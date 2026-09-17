---
layout: "default"
title: "LIRGs ULIRGs HyLIRGs"
---
{% raw %}
# LIRGs, ULIRGs, HyLIRGs

up: [Pablo_03_Star_formation_in_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## the luminosity classification

defined by the total infrared luminosity $L_{\text{TIR}}$ in the $8$–$1000\,\mu$m band:

| class | $L_{\text{TIR}}$ | typical SFR |
|---|---|---|
| LIRG (luminous IR galaxy) | $10^{11}$–$10^{12}\,L_\odot$ | $> 17\,M_\odot/\text{yr}$ |
| ULIRG (ultra-LIRG) | $10^{12}$–$10^{13}\,L_\odot$ | $> 170\,M_\odot/\text{yr}$ |
| HyLIRG (hyper-LIRG) | $> 10^{13}\,L_\odot$ | $> 1700\,M_\odot/\text{yr}$ |

the SFR thresholds follow from the IR calibration $\text{SFR} \approx L_{\text{TIR}} / (10^{10}\,L_\odot) \cdot 1.7\,M_\odot/\text{yr}$ (see [IR SFR tracer](./IR%20SFR%20tracer.html)).

## discovery: IRAS 1983

LIRGs and ULIRGs were discovered by the IRAS all-sky survey at 12, 25, 60, and 100 μm. the surprise: some nearby objects are *brighter* in the IR than in the optical by factors of up to $10^3$. their energy budget is dominated by dust-reprocessed UV, not starlight directly.

Rieke & Lebofsky 1979 SEDs (Pablo slide): M82, NGC 1068, NGC 4161, 3C 273 showing the divergence between optical and IR luminosities. M82 peaks at $\sim 60\,\mu$m; the AGN-dominated 3C 273 is flat.

## the ULIRG archetype: Arp 220

Arp 220 at $d = 77$ Mpc:
- $L_{\text{TIR}} \sim 2 \times 10^{12}\,L_\odot$
- nuclear SFR $\sim 200\,M_\odot/\text{yr}$
- late-stage major merger: two counter-rotating nuclei separated by $\sim 300$ pc
- SPIRE spectrum shows rich CO ladder and water lines → dense, warm molecular gas
- may host a buried AGN (debated)

## dust SED components

the Pablo slide (Sanders & Mirabel 1996) separates ULIRG SEDs into:

- **cold dust** ($T \sim 20$ K, dominating $\gtrsim 100\,\mu$m): bulk of the mass, heated by diffuse ISRF + heated ISM
- **warm dust** ($T \sim 50$–$80$ K): heated by young stellar population, dominates 60–100 μm
- **hot dust** ($T \sim 300$ K+): only present in AGN-dominated ULIRGs
- **PAH** emission bands: ubiquitous in SF-dominated ULIRGs, suppressed by AGN

modern dust-SED fitting (Draine & Li 2007, Magdis 2012, Casey 2014) fits these components jointly.

## merger origin

$> 90\%$ of local ULIRGs are major mergers (Sanders & Mirabel 1996). the Sanders-Mirabel mosaic of IRAS 05189-2524, Mrk 231, Mrk 273, Arp 220, IRAS 22491-1808 all show double nuclei, tidal tails, rings. Mihos & Hernquist 1996 simulations explain: tidal forces drive gas to nuclei, triggering a central starburst + AGN.

## cosmological role

at $z \sim 2$–$3$, LIRGs/ULIRGs dominate the [Cosmic star formation history](./Cosmic%20star%20formation%20history.html) budget. the Madau-Dickinson peak is powered by IR-luminous objects. but:
- locally ULIRGs are rare ($< 1$% of galaxies)
- at $z \sim 2$, they are the **main-sequence typical galaxy** at $M_* > 10^{10.5}\,M_\odot$. not exotic mergers, but normal SF at higher cosmic gas fractions
- HyLIRGs at $z > 2$ are lensed systems or extreme sub-mm galaxies (Casey 2014)

## AGN-SF coexistence

many ULIRGs host both a starburst and an AGN (Genzel 1998, Farrah 2003). decomposition is hard: dust hides both. diagnostics:
- MIR silicate absorption depth (AGN have deep 9.7 μm absorption)
- MIR PAH/continuum ratio (low in AGN)
- hard X-ray luminosity (AGN signature)
- high-ionization lines ([Ne V], [O IV])

## connections

- IR SFR: [IR SFR tracer](./IR%20SFR%20tracer.html)
- mergers: [Galaxy mergers and SF](./Galaxy%20mergers%20and%20SF.html)
- extreme SF physics: [Starburst galaxies](./Starburst%20galaxies.html)
- high-$z$ counterparts: main-sequence at $z > 1$, [Galaxy main sequence of star formation](./Galaxy%20main%20sequence%20of%20star%20formation.html)
- contribution to cosmic budget: [Cosmic star formation history](./Cosmic%20star%20formation%20history.html)

## key references

- Sanders & Mirabel 1996 ARAA (LIRG/ULIRG review)
- Sanders, Soifer et al. 1988 (bright IRAS galaxies)
- Casey, Narayanan, Cooray 2014 PhysRep (dusty SFGs review)
- Lonsdale, Farrah, Smith 2006
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Chemical%20evolution%20of%20galaxies.html" class="backlink-item">Chemical evolution of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20mergers%20and%20SF.html" class="backlink-item">Galaxy mergers and SF</a></li>
    <li class="backlink-item-wrap"><a href="./K-correction%20in%20optical%20vs%20sub-mm.html" class="backlink-item">K-correction in optical vs sub-mm</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html" class="backlink-item">Pablo_03_Star_formation_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_04_Nuclear_activity_in_galaxies.html" class="backlink-item">Pablo_04_Nuclear_activity_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Starburst%20galaxies.html" class="backlink-item">Starburst galaxies</a></li>
  </ul>
</div>
