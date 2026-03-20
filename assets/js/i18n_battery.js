/* ═══════════════════════════════════════════════════════════════
   VoltTool — i18n_battery.js
   Stringhe per la pagina degrado batteria.
   Dipende da: i18n.js (lang già definito)
   ═══════════════════════════════════════════════════════════════ */

const STRINGS_BATTERY = {
  it: {
    pageTitle: 'VoltTool — Degrado batteria',

    /* guide */
    guide: 'Stima il <strong>degrado della batteria</strong> nel tempo: confronta il modello lineare con quello esponenziale e scopri quanti km perdi ogni anno.',

    /* section labels */
    secBattery: 'Capacità iniziale',
    secDegrado: 'Parametri di degrado',
    secOptions: 'Opzioni avanzate',

    /* slider labels */
    slBattery:   '🔋 Capacità iniziale',
    slDegrado:   '📉 Degrado annuo',
    slKwh:       'Consumo',
    slThreshold: '⚠️ Soglia allerta',
    slBattCost:  '💰 Costo batteria',
    slKmAnno:    '📅 Km / anno',

    /* chart tabs */

    /* accordion labels */
    chkConsumoLabel:   '⚡ Consumo medio',
    chkThresholdLabel: '⚠️ Soglia di allerta',
    chkRoiLabel:       '💰 Sostituzione batteria & ROI',

    /* chart */
    chartTitle:    'Degrado batteria — 20 anni',
    chartSubtitle: (cap, deg) => `Capacità iniziale ${cap} kWh · Degrado ${deg}%/anno`,
    dsLinear:      'Lineare',
    dsExp:         'Esponenziale',
    dsThreshold:   (v) => `Soglia ${v}%`,
    axisAnni:      'Anno',
    axisKwh:       'kWh residui',
    axisKm:        'km',
    tooltipYear:   (y) => `Anno ${y}`,

    /* preset battery */
    presetBat30:  'City car',
    presetBat50:  'Compatta',
    presetBat77:  'SUV',
    presetBat100: 'Long range',

    /* result boxes */
    rbCapY10Label:  'Capacità anno 10',
    rbCapY20Label:  'Capacità anno 20',
    rbKmLostLabel:  '📉 Km persi (anno 20 vs anno 0)',
    rbLinLabel:     'Lineare',
    rbExpLabel:     'Esponenziale',
    rbThreshLabel:  (pct) => `⚠️ Primo anno sotto ${pct}%`,
    rbThreshLinear: (y, kwh) => `Lin: anno ${y} (${kwh} kWh)`,
    rbThreshExp:    (y, kwh) => `Esp: anno ${y} (${kwh} kWh)`,
    rbThreshNever:  'Non raggiunta nei 20 anni',

    /* ROI */
    rbRoiCost:  'Costo sostituzione stimato',
    rbRoiYears: 'ROI stimato',
    rbRoiDesc:  (cap, costKwh, totalCost, kmAnno, kwh100, energyPrice) =>
      `${cap} kWh × ${costKwh} €/kWh = ${totalCost} € di sostituzione. ` +
      `Con ${kmAnno} km/anno e ${kwh100} kWh/100km a ${energyPrice} €/kWh, ` +
      `il risparmio annuo copre il costo in`,

    /* modal */
    modalTitleBattery:   'Capacità iniziale',
    modalDescBattery:    'Inserisci la capacità in kWh',
    modalTitleDegrado:   'Degrado annuo',
    modalDescDegrado:    'Inserisci la % di degrado per anno',
    modalTitleKwh:       'Consumo medio',
    modalDescKwh:        'Inserisci il consumo in kWh/100km',
    modalTitleKmAnno:    'Km annui',
    modalDescKmAnno:     'Inserisci i km percorsi ogni anno',
    modalTitleThreshold: 'Soglia allerta',
    modalDescThreshold:  'Inserisci la soglia % (es. 70 o 80)',
    modalTitleBattCost:  'Costo €/kWh batteria',
    modalDescBattCost:   'Costo di mercato per kWh di batteria (es. 120)',
    btnOk:     'OK',
    btnCancel: 'Annulla',

    /* misc */
    kmLostNote:   (km0, kmN, diff) => `Da ${km0} km → ${kmN} km (−${diff} km)`,
    expModelNote: 'Lineare: stessa % applicata alla capacità iniziale ogni anno. Esponenziale: la % si applica al residuo dell\'anno precedente (più realistico).',
    legendLinear: '━━ Lineare',
    legendExp:    '━━ Esponenziale',
  },

  en: {
    pageTitle: 'VoltTool — Battery degradation',

    guide: 'Estimate <strong>battery degradation</strong> over time: compare the linear model with the exponential one and see how many km you lose each year.',

    secBattery: 'Initial capacity',
    secDegrado: 'Degradation parameters',
    secOptions: 'Advanced options',

    slBattery:   '🔋 Initial capacity',
    slDegrado:   '📉 Annual degradation',
    slKwh:       'Consumption',
    slThreshold: '⚠️ Alert threshold',
    slBattCost:  '💰 Battery cost',
    slKmAnno:    '📅 Km / year',


    chkConsumoLabel:   '⚡ Average consumption',
    chkThresholdLabel: '⚠️ Alert threshold',
    chkRoiLabel:       '💰 Battery replacement & ROI',

    chartTitle:    'Battery degradation — 20 years',
    chartSubtitle: (cap, deg) => `Initial capacity ${cap} kWh · Degradation ${deg}%/year`,
    dsLinear:      'Linear',
    dsExp:         'Exponential',
    dsThreshold:   (v) => `Threshold ${v}%`,
    axisAnni:      'Year',
    axisKwh:       'Remaining kWh',
    axisKm:        'km',
    tooltipYear:   (y) => `Year ${y}`,

    presetBat30:  'City car',
    presetBat50:  'Compact',
    presetBat77:  'SUV',
    presetBat100: 'Long range',

    rbCapY10Label:  'Capacity year 10',
    rbCapY20Label:  'Capacity year 20',
    rbKmLostLabel:  '📉 Km lost (year 20 vs year 0)',
    rbLinLabel:     'Linear',
    rbExpLabel:     'Exponential',
    rbThreshLabel:  (pct) => `⚠️ First year below ${pct}%`,
    rbThreshLinear: (y, kwh) => `Lin: year ${y} (${kwh} kWh)`,
    rbThreshExp:    (y, kwh) => `Exp: year ${y} (${kwh} kWh)`,
    rbThreshNever:  'Not reached within 20 years',

    rbRoiCost:  'Estimated replacement cost',
    rbRoiYears: 'Estimated ROI',
    rbRoiDesc:  (cap, costKwh, totalCost, kmAnno, kwh100, energyPrice) =>
      `${cap} kWh × ${costKwh} €/kWh = ${totalCost} € replacement cost. ` +
      `With ${kmAnno} km/year and ${kwh100} kWh/100km at ${energyPrice} €/kWh, ` +
      `annual energy savings cover the cost in`,

    modalTitleBattery:   'Initial capacity',
    modalDescBattery:    'Enter capacity in kWh',
    modalTitleDegrado:   'Annual degradation',
    modalDescDegrado:    'Enter degradation % per year',
    modalTitleKwh:       'Average consumption',
    modalDescKwh:        'Enter consumption in kWh/100km',
    modalTitleKmAnno:    'Annual km',
    modalDescKmAnno:     'Enter km driven per year',
    modalTitleThreshold: 'Alert threshold',
    modalDescThreshold:  'Enter threshold % (e.g. 70 or 80)',
    modalTitleBattCost:  'Battery cost €/kWh',
    modalDescBattCost:   'Market cost per kWh of battery pack (e.g. 120)',
    btnOk:     'OK',
    btnCancel: 'Cancel',

    kmLostNote:   (km0, kmN, diff) => `From ${km0} km → ${kmN} km (−${diff} km)`,
    expModelNote: 'Linear: same % applied to initial capacity each year. Exponential: % applied to previous year\'s remaining capacity (more realistic).',
    legendLinear: '━━ Linear',
    legendExp:    '━━ Exponential',
  }
};

const tB = STRINGS_BATTERY[lang] || STRINGS_BATTERY['it'];
