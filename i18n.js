/* ═══════════════════════════════════════════════════════════════
   VoltTool — i18n.js
   Esporta: STRINGS, lang, t
   ═══════════════════════════════════════════════════════════════ */

const STRINGS = {
  it: {

    /* nav */
    navAnnualCost: 'Guidare in elettrico: costo annuale',
    navBreakeven: 'Viaggio: EV o termica?',

    /* guide */
    guideFree: '<strong>Confronto diretto:</strong> imposta entrambi i prezzi reali che paghi e scopri subito quale motorizzazione conviene di più.',
    guideElec: '<strong>Imposta il prezzo del carburante</strong> che paghi alla pompa — calcoleremo a quale prezzo dell\'energia le due motorizzazioni si equivalgono.',
    guideFuel: '<strong>Imposta il prezzo dell\'energia</strong> che paghi a casa — calcoleremo a quale prezzo del carburante le due motorizzazioni si equivalgono.',

    /* savings */
    svLabelFree: '💶 Risparmio annuo',
    svLabelBreakeven: '💶 Risparmio annuo con i tuoi prezzi reali',
    svElecWins: (v) => `Elettrico più conveniente: ${v} €/anno`,
    svFuelWins: (v) => `Carburante più conveniente: ${v} €/anno`,
    svZero: 'Costo identico con i prezzi inseriti',
    svNoteElec: (km, cf, ce, diff) => `${km} km/anno × ${diff} €/km di differenza (carburante ${cf} − elettrico ${ce} €/km)`,
    svNoteFuel: (km, cf, ce, diff) => `${km} km/anno × ${diff} €/km di differenza (elettrico ${ce} − carburante ${cf} €/km)`,
    svNoteZero: 'I prezzi reali producono lo stesso costo al km.',

    /* breakeven */
    beValueElec: (v) => `${v} €/kWh`,
    beValueFuel: (v) => `${v} €/L`,
    beNoteElec: (pFuel, pElec, cpkm) => `Con carburante a ${pFuel} €/L, l'energia deve costare ${pElec} €/kWh per lo stesso costo al km (${cpkm} €/km).`,
    beNoteFuel: (pElec, pFuel, cpkm) => `Con energia a ${pElec} €/kWh, il carburante deve costare ${pFuel} €/L per lo stesso costo al km (${cpkm} €/km).`,

    /* chart */
    chartSubElec: (pFuel) => `Asse X: prezzo energia €/kWh — carburante fisso a ${pFuel} €/L`,
    chartSubFuel: (pElec) => `Asse X: prezzo carburante €/L — energia fissa a ${pElec} €/kWh`,
    dsLabelFuel: 'Carburante (€/km)', dsLabelElec: 'Elettrico (€/km)', dsLabelParity: 'Pareggio',
    axisEuroL: '€ / litro', axisEuroKwh: '€ / kWh', axisEuroKmY: '€ / km',

    /* units */
    unitKml: 'km/L', unitL100: 'L/100km', unitKwhKm: 'kWh/100km', unitKmKwh: 'km/kWh',

    /* modal */
    modalTitleKml: 'Consumo carburante', modalDescKml: 'Inserisci il consumo in km/L',
    modalTitleKwh: 'Consumo elettrico', modalDescKwh: 'Inserisci il consumo in kWh/100km',
    modalTitlePfuel: 'Prezzo carburante', modalDescPfuel: 'Inserisci il prezzo di riferimento in €/L',
    modalTitlePelec: 'Prezzo energia', modalDescPelec: 'Inserisci il prezzo di riferimento in €/kWh',
    modalTitleKmanno: 'Km annui', modalDescKmanno: 'Inserisci i km percorsi ogni anno',
    modalTitleRFuel: 'Carburante reale', modalDescRFuel: 'Prezzo reale che paghi alla pompa (€/L)',
    modalTitleRElec: 'Energia reale', modalDescRElec: 'Prezzo reale che paghi a casa (€/kWh)',
    btnOk: 'OK', btnCancel: 'Annulla',

    /* chart placeholder */
    chartPlaceholder: 'In modalità libera entrambi i prezzi variano\nliberamente — il grafico 2D non è applicabile.\n\nIl risparmio annuo è calcolato in tempo reale\nnel pannello a sinistra.',

    /* section labels */
    secUsage: 'I tuoi dati di utilizzo',
    secConsumption: 'Consumi della tua auto',
    secBreakeven: 'Prezzo di riferimento per il pareggio',
    secMode: 'Modalità di calcolo',

    /* slider labels */
    slKmAnno: '📅 Km / anno',
    slRealFuel: '⛽ Carburante alla pompa',
    slRealElec: '🔌 Corrente a casa',
    slFuel: '⛽ Carburante',
    slElec: '⚡ Elettrico',
    slPFuel: '⛽ €/litro (pareggio)',
    slPElec: '⚡ €/kWh (pareggio)',

    /* result labels */
    rbSvLabel: '💶 Risparmio annuo stimato',
    rbBeLabel: '⚡ Punto di pareggio',

    /* mode buttons */
    modeFree: 'Modalità libera (confronto diretto)',
    modeElec: 'Calcola prezzo energia (€/kWh)',
    modeFuel: 'Calcola prezzo carburante (€/L)',

    /* chart title */
    chartTitle: 'Costo al km in funzione del prezzo variabile',

    /* header */
    headerSub: 'Piccoli aiuti per la vita in elettrico',

    /* page title */
    pageTitle: 'VoltTool',

    /* preset labels */
    presetKmlCity: 'Piccola / city', presetKmlMid: 'Berlina', presetKmlSport: 'Sportiva',
    presetKwhCity: 'Città', presetKwhExtra: 'Extraurbana', presetKwhAuto: 'Autostrada',
  },

  en: {


    /* nav */
    navAnnualCost: 'Driving electric: annual cost',
    navBreakeven: 'Trip: EV or ICE?',

    /* guide */
    guideFree: '<strong>Direct comparison:</strong> set both real prices you pay and instantly see which option saves you more money.',
    guideElec: '<strong>Set the fuel price</strong> you pay at the pump — we\'ll calculate at what energy price both options cost the same.',
    guideFuel: '<strong>Set the energy price</strong> you pay at home — we\'ll calculate at what fuel price both options cost the same.',

    /* savings */
    svLabelFree: '💶 Annual savings',
    svLabelBreakeven: '💶 Annual savings with your real prices',
    svElecWins: (v) => `Electric saves ${v} €/year`,
    svFuelWins: (v) => `Fuel saves ${v} €/year`,
    svZero: 'Identical cost with the prices entered',
    svNoteElec: (km, cf, ce, diff) => `${km} km/year × ${diff} €/km difference (fuel ${cf} − electric ${ce} €/km)`,
    svNoteFuel: (km, cf, ce, diff) => `${km} km/year × ${diff} €/km difference (electric ${ce} − fuel ${cf} €/km)`,
    svNoteZero: 'Real prices produce the same cost per km.',

    /* breakeven */
    beValueElec: (v) => `${v} €/kWh`,
    beValueFuel: (v) => `${v} €/L`,
    beNoteElec: (pFuel, pElec, cpkm) => `With fuel at ${pFuel} €/L, energy must cost ${pElec} €/kWh for the same cost per km (${cpkm} €/km).`,
    beNoteFuel: (pElec, pFuel, cpkm) => `With energy at ${pElec} €/kWh, fuel must cost ${pFuel} €/L for the same cost per km (${cpkm} €/km).`,

    /* chart */
    chartSubElec: (pFuel) => `X axis: energy price €/kWh — fuel fixed at ${pFuel} €/L`,
    chartSubFuel: (pElec) => `X axis: fuel price €/L — energy fixed at ${pElec} €/kWh`,
    dsLabelFuel: 'Fuel (€/km)', dsLabelElec: 'Electric (€/km)', dsLabelParity: 'Breakeven',
    axisEuroL: '€ / litre', axisEuroKwh: '€ / kWh', axisEuroKmY: '€ / km',

    /* units */
    unitKml: 'km/L', unitL100: 'L/100km', unitKwhKm: 'kWh/100km', unitKmKwh: 'km/kWh',

    /* modal */
    modalTitleKml: 'Fuel consumption', modalDescKml: 'Enter consumption in km/L',
    modalTitleKwh: 'Electric consumption', modalDescKwh: 'Enter consumption in kWh/100km',
    modalTitlePfuel: 'Fuel price', modalDescPfuel: 'Enter reference price in €/L',
    modalTitlePelec: 'Energy price', modalDescPelec: 'Enter reference price in €/kWh',
    modalTitleKmanno: 'Annual km', modalDescKmanno: 'Enter km driven per year',
    modalTitleRFuel: 'Real fuel price', modalDescRFuel: 'Real price you pay at the pump (€/L)',
    modalTitleRElec: 'Real energy price', modalDescRElec: 'Real price you pay at home (€/kWh)',
    btnOk: 'OK', btnCancel: 'Cancel',

    /* chart placeholder */
    chartPlaceholder: 'In free mode both prices vary\nfreely — a 2D chart is not applicable.\n\nAnnual savings are calculated in real time\nin the left panel.',

    /* section labels */
    secUsage: 'Your usage data',
    secConsumption: 'Your car\'s consumption',
    secBreakeven: 'Reference price for breakeven',
    secMode: 'Calculation mode',

    /* slider labels */
    slKmAnno: '📅 Km / year',
    slRealFuel: '⛽ Fuel at pump',
    slRealElec: '🔌 Home electricity',
    slFuel: '⛽ Fuel',
    slElec: '⚡ Electric',
    slPFuel: '⛽ €/litre (breakeven)',
    slPElec: '⚡ €/kWh (breakeven)',

    /* result labels */
    rbSvLabel: '💶 Estimated annual savings',
    rbBeLabel: '⚡ Breakeven point',

    /* mode buttons */
    modeFree: 'Free mode (direct comparison)',
    modeElec: 'Calculate energy price (€/kWh)',
    modeFuel: 'Calculate fuel price (€/L)',

    /* chart title */
    chartTitle: 'Cost per km as a function of the variable price',

    /* header */
    headerSub: 'Little tools for everyday EV life',

    /* page title */
    pageTitle: 'VoltTool — Breakeven',

    /* preset labels */
    presetKmlCity: 'Small / city', presetKmlMid: 'Saloon', presetKmlSport: 'Sports',
    presetKwhCity: 'City', presetKwhExtra: 'Extra-urban', presetKwhAuto: 'Motorway',
  }
};

const lang = (navigator.language || 'it').split('-')[0];
const t = STRINGS[lang] || STRINGS['it'];
