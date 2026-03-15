/* ═══════════════════════════════════════════════════════════════
   VoltTool — common.js
   Shared UI helpers used by all pages.
   - Shared number formatting (fmtP1 / fmtP2 / fmtP3 / fmtInt)
   - LocalStorage state helpers
   - Slider track fill helper
   - Modal / popup helpers
   - Accordion helpers
   - Basic shared event hookups
   ═══════════════════════════════════════════════════════════════ */

(function () {
    const fmt = {
        p1: new Intl.NumberFormat(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
        p2: new Intl.NumberFormat(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        p3: new Intl.NumberFormat(navigator.language, { minimumFractionDigits: 3, maximumFractionDigits: 3 }),
        int: new Intl.NumberFormat(navigator.language, { maximumFractionDigits: 0 }),
    };

    function loadState(storageKey, defaults) {
        try {
            const raw = localStorage.getItem(storageKey);
            if (raw) return { ...defaults, ...JSON.parse(raw) };
        } catch (e) {
            // ignore
        }
        return { ...defaults };
    }

    function saveState(storageKey, state) {
        try {
            localStorage.setItem(storageKey, JSON.stringify(state));
        } catch (e) {
            // ignore
        }
    }

    function updateTrack(el) {
        const item = el.closest('.slider-item');
        if (item && item.style.display === 'none') return;
        const pct = (parseFloat(el.value) - parseFloat(el.min)) /
            (parseFloat(el.max) - parseFloat(el.min)) * 100;
        el.style.setProperty('--pct', pct + '%');
    }

    // Modal helpers
    let modalTarget = null;
    let modalCfg = {};

    function setModalConfig(cfg) {
        modalCfg = cfg || {};
    }

    function openModal(target) {
        modalTarget = target;
        const cfg = modalCfg[target];
        if (!cfg) return;
        document.getElementById('modal-title').textContent = typeof cfg.title === 'function' ? cfg.title() : cfg.title;
        document.getElementById('modal-desc').textContent = typeof cfg.desc === 'function' ? cfg.desc() : cfg.desc;
        const inp = document.getElementById('modal-input');
        inp.min = cfg.min; inp.max = cfg.max; inp.step = cfg.step;
        const current = typeof cfg.getValue === 'function'
            ? cfg.getValue()
            : (window[cfg.stateKey] !== undefined ? window[cfg.stateKey] : (cfg.defaultValue ?? ''));
        inp.value = current;
        document.getElementById('modal-overlay').classList.add('open');
        setTimeout(() => { inp.focus(); inp.select(); }, 60);
    }

    function closeModal() {
        document.getElementById('modal-overlay').classList.remove('open');
        modalTarget = null;
    }

    function confirmModal() {
        if (!modalTarget) return;
        const cfg = modalCfg[modalTarget];
        if (!cfg) return;
        const inp = document.getElementById('modal-input');
        let val = parseFloat(inp.value);
        if (isNaN(val)) { closeModal(); return; }
        val = Math.max(cfg.min, val);
        if (cfg.onConfirm) {
            cfg.onConfirm(val);
        }
        closeModal();
    }

    // Preset popup helpers
    let activePopup = null;
    function togglePopup(popupId, btn) {
        const popup = document.getElementById(popupId);
        if (!popup) return;
        if (activePopup && activePopup !== popup) activePopup.classList.remove('open');
        if (popup.classList.contains('open')) {
            popup.classList.remove('open');
            activePopup = null;
            return;
        }
        const rect = btn.getBoundingClientRect();
        popup.style.top = (rect.bottom + 6) + 'px';
        popup.style.left = rect.left + 'px';
        popup.classList.add('open');
        activePopup = popup;
    }

    // Close preset popup when clicking outside
    document.addEventListener('click', e => {
        if (activePopup && !activePopup.contains(e.target) && !e.target.classList.contains('preset-btn')) {
            activePopup.classList.remove('open');
            activePopup = null;
        }
    });

    function applyPreset(field, value) {
        if (typeof applyPresetHandler === 'function') applyPresetHandler(field, value);
        if (activePopup) { activePopup.classList.remove('open'); activePopup = null; }
    }

    // Accordion helpers
    function applyAccordion(opt, active) {
        document.getElementById('chk-' + opt)?.classList.toggle('active', active);
        document.getElementById('panel-' + opt)?.classList.toggle('open', active);
    }

    function toggleOption(opt) {
        if (!window.appState) return;
        const key = 'opt' + opt.charAt(0).toUpperCase() + opt.slice(1);
        window.appState[key] = !window.appState[key];
        applyAccordion(opt, window.appState[key]);
        if (typeof window.onAppStateChange === 'function') window.onAppStateChange();
    }

    // Modal global shortcuts
    document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    document.getElementById('modal-input')?.addEventListener('keydown', e => { if (e.key === 'Enter') confirmModal(); });
    document.getElementById('btn-ok')?.addEventListener('click', confirmModal);
    document.getElementById('btn-cancel')?.addEventListener('click', closeModal);

    // Expose globally
    window.VT = {
        fmt,
        loadState,
        saveState,
        updateTrack,
        setModalConfig,
        openModal,
        closeModal,
        confirmModal,
        togglePopup,
        applyPreset,
        applyAccordion,
        toggleOption,
        registerAppState: (state, onChange) => {
            window.appState = state;
            window.onAppStateChange = onChange;
        },
    };

    // aliases for inline handlers
    window.openModal = window.VT.openModal;
    window.closeModal = window.VT.closeModal;
    window.confirmModal = window.VT.confirmModal;
    window.togglePopup = window.VT.togglePopup;
    window.applyPreset = window.VT.applyPreset;
    window.applyAccordion = window.VT.applyAccordion;
    window.toggleOption = window.VT.toggleOption;
})();
