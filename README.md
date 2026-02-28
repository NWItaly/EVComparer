# VoltTool — Piccoli aiuti per la vita in elettrico

Strumento web per rispondere rapidamente e semplicemente ai dubbi di chi ha un'auto elettrica o sta pensando di prenderne una. 

**[→ Apri l'app](https://nwitaly.github.io/VoltTool/)**

---

## Funzionalità

### `index.html` — Guidare in elettrico: costo annuale
Inserisci i tuoi dati reali e scopri subito quanto risparmi (o spendi in più) ogni anno scegliendo l'elettrico rispetto al carburante.

- Km percorsi all'anno
- Prezzo reale del carburante alla pompa (€/L)
- Prezzo reale dell'energia elettrica a casa (€/kWh)
- Consumo dell'auto a carburante (km/L) con preset per tipologia di veicolo
- Consumo dell'auto elettrica (kWh/100km) con preset per tipo di percorso
- Risultato in €/anno con dettaglio del costo al km per entrambe le motorizzazioni

### `breakeven.html` — Viaggio: EV o termica?
Dato il consumo delle due auto, calcola a quale prezzo dell'energia (o del carburante) le due opzioni diventano equivalenti. Utile per rispondere a *"conviene l'elettrico se la corrente sale a X?"*

- Due modalità di calcolo:
  - fissa il prezzo del carburante → calcola il prezzo massimo accettabile dell'energia
  - fissa il prezzo dell'energia → calcola il prezzo minimo a cui il carburante deve salire
- Grafico interattivo del costo al km in funzione del prezzo variabile
- Punto di pareggio evidenziato sul grafico

---

## Struttura del progetto

```
├── index.html        # Calcolatore risparmio annuale
├── breakeven.html    # Calcolatore punto di pareggio
├── shared.css        # Design system condiviso (variabili, componenti, nav)
├── i18n.js           # Stringhe in italiano e inglese (rileva lingua dal browser)
└── nav.js            # Menu di navigazione con hamburger per mobile
```

---

## Come funziona

- **Zero build step** — HTML + CSS + JS vanilla, consultabile direttamente nel browser
- **Lingua automatica** — rileva `navigator.language` e mostra IT o EN senza configurazione
- **Stato persistente** — i valori inseriti vengono salvati in `localStorage` e ripristinati alla visita successiva
- **Responsive** — layout a colonna su mobile, sidebar + grafico su desktop; menu hamburger sotto i 700px
- **Slider + input preciso** — ogni parametro è modificabile tramite slider per esplorazione rapida o campo numerico per valori esatti

---

## Dipendenze esterne

| Libreria | Versione | Uso |
|---|---|---|
| [Chart.js](https://www.chartjs.org/) | 4.4.2 | Grafico breakeven (solo `breakeven.html`) |
| [Google Fonts](https://fonts.google.com/) | — | Syne + DM Mono |

Entrambe caricate via CDN, nessun `npm install`.

---

## Sviluppo futuro

Altre funzionalità in programma, ognuna su pagina dedicata per mantenere il codice leggero e indipendente.

## Disclaimer

Buona parte del codice è stato scritto dall'IA di Claude. Se trovi bug e vuoi segnalarmeli sarò felice di correggerli.