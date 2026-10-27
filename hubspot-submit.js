/**
 * The Sales Bench — HubSpot Forms API Integration Service
 * 
 * Submits custom HTML form data directly to the HubSpot Forms API v3 endpoint:
 * https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}
 * 
 * Eliminates all third-party HubSpot iframes, scripts, cookies, and virality branding.
 */

const HUBSPOT_CONFIG = {
    portalId: '342958738',
    formId: 'de5aa2ee-c4fc-4f04-8b6b-563c3bfb9fa3',
    endpoint: 'https://api.hsforms.com/submissions/v3/integration/submit/342958738/de5aa2ee-c4fc-4f04-8b6b-563c3bfb9fa3'
};

/**
 * Submit form fields to HubSpot Forms API v3
 * @param {Object} data - Key-value map of form fields (e.g. { email, firstname, lastname, company, message })
 * @param {Object} context - Page context metadata (pageUri, pageName)
 * @returns {Promise<Object>} API response status and body
 */
async function submitHubSpotForm(data, context = {}) {
    if (!data.email) {
        throw new Error('Email field is required for HubSpot submission.');
    }

    // Transform key-value object into HubSpot fields array
    const fields = Object.entries(data).map(([name, value]) => ({
        name: name,
        value: typeof value === 'string' ? value.trim() : String(value)
    }));

    const payload = {
        fields: fields,
        context: {
            pageUri: context.pageUri || 'https://scottrepository.github.io/thesalesbench-website/',
            pageName: context.pageName || 'The Sales Bench | Enterprise Revenue Architecture',
            ...context
        },
        legalConsentOptions: {
            consent: {
                consentToProcess: true,
                text: 'I agree to allow The Sales Bench to store and process my personal data to communicate regarding enterprise revenue advisory services.'
            }
        }
    };

    const response = await fetch(HUBSPOT_CONFIG.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    const responseData = await response.json().catch(() => ({}));

    if (!response.ok) {
        const errorMsg = responseData.message || `HubSpot API Error (${response.status})`;
        const error = new Error(errorMsg);
        error.status = response.status;
        error.details = responseData;
        throw error;
    }

    return {
        success: true,
        status: response.status,
        inlineMessage: responseData.inlineMessage || 'Submission successful'
    };
}

// Optional CLI runner: node hubspot-submit.js --email=test@example.com --firstname=John --lastname=Doe
if (typeof require !== 'undefined' && require.main === module) {
    const args = process.argv.slice(2).reduce((acc, arg) => {
        if (arg.startsWith('--')) {
            const [k, v] = arg.slice(2).split('=');
            acc[k] = v || true;
        }
        return acc;
    }, {});

    if (args.email) {
        submitHubSpotForm(args)
            .then(res => {
                console.log('✓ Successfully posted to HubSpot API:', res);
                process.exit(0);
            })
            .catch(err => {
                console.error('✗ Failed to post to HubSpot API:', err.message);
                process.exit(1);
            });
    } else {
        console.log('HubSpot API Integration loaded.');
        console.log('Usage: node hubspot-submit.js --email=rep@company.com --firstname=Jane --company=Acme');
    }
}

if (typeof module !== 'undefined') {
    module.exports = { submitHubSpotForm, HUBSPOT_CONFIG };
}
