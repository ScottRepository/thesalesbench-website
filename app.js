/**
 * THE SALES BENCH — INTERACTIVE REVENUE TELEMETRY & ROI ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Scroll State
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 24) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // 2. Mobile Navigation Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileMenuBtn.textContent = isOpen ? 'CLOSE [X]' : 'MENU [≡]';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileMenuBtn.textContent = 'MENU [≡]';
      });
    });
  }

  // 3. Hero Telemetry Console Tabs
  const consoleTabs = document.querySelectorAll('.console-tab');
  const consolePanes = document.querySelectorAll('.console-pane');

  consoleTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      consoleTabs.forEach((t) => t.classList.remove('active'));
      consolePanes.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 4. Interactive Cost-of-Inaction & Sales Bench ROI Simulator
  const pipelineInput = document.getElementById('sim-pipeline');
  const hiresInput = document.getElementById('sim-hires');
  const cycleInput = document.getElementById('sim-cycle');

  const pipelineValEl = document.getElementById('sim-pipeline-val');
  const hiresValEl = document.getElementById('sim-hires-val');
  const cycleValEl = document.getElementById('sim-cycle-val');

  const outPayrollEl = document.getElementById('out-payroll');
  const outWinLiftEl = document.getElementById('out-win-lift');
  const outCycleSavedEl = document.getElementById('out-cycle-saved');
  const outTotalImpactEl = document.getElementById('out-total-impact');

  function formatCurrencyMillions(val) {
    if (val >= 1000000) {
      return '$' + (val / 1000000).toFixed(2) + 'M';
    }
    return '$' + Math.round(val / 1000).toLocaleString() + 'K';
  }

  function updateSimulator() {
    if (!pipelineInput || !hiresInput || !cycleInput) return;

    const pipelineM = parseFloat(pipelineInput.value); // $M active enterprise pipeline
    const plannedHires = parseInt(hiresInput.value, 10); // Planned NA executive/AE hires
    const cycleMonths = parseInt(cycleInput.value, 10); // Current enterprise sales cycle (months)

    pipelineValEl.textContent = `$${pipelineM}M USD`;
    hiresValEl.textContent = `${plannedHires} ${plannedHires === 1 ? 'Exec / Rep' : 'Execs / Reps'}`;
    cycleValEl.textContent = `${cycleMonths} Months`;

    // Benchmark 1: 4-Week Validation Gate de-risks €250k+ (~$270k USD) per premature NA hire
    const payrollDeRiskedEUR = plannedHires * 250; // in €k
    const payrollDeRiskedUSD = plannedHires * 270000;

    // Benchmark 2: Code-enforced MEDDPICC stage-gating & MAPs -> +28% win rate lift
    // Assume baseline 20% enterprise win rate -> +28% relative lift adds +5.6% incremental closed ARR on active pipeline
    const incrementalArrUSD = pipelineM * 1000000 * 0.056;

    // Benchmark 3: 15–20% cycle compression (use 18% midpoint)
    const daysSaved = Math.round(cycleMonths * 30 * 0.18);

    // Total 12-Month Quantified Value Protection + Acceleration
    const totalImpactUSD = payrollDeRiskedUSD + incrementalArrUSD;

    outPayrollEl.textContent = `€${payrollDeRiskedEUR.toLocaleString()}k+`;
    outWinLiftEl.textContent = `+${formatCurrencyMillions(incrementalArrUSD)}`;
    outCycleSavedEl.textContent = `-${daysSaved} Days`;
    outTotalImpactEl.textContent = `${formatCurrencyMillions(totalImpactUSD)} / yr`;
  }

  if (pipelineInput && hiresInput && cycleInput) {
    [pipelineInput, hiresInput, cycleInput].forEach((input) => {
      input.addEventListener('input', updateSimulator);
    });
    updateSimulator();
  }
});
