---
layout: default
title: "Pablo_04_Nuclear_activity_in_galaxies"
---

# Pablo lecture 2 — nuclear activity in galaxies

up: [Observational_Cosmology_MOC](../../../00_Atlas/Observational_Cosmology_MOC.html)
date: 2026-04-16
lecturer: Pablo Pérez-González (visiting)

## the question of the lecture

the previous lectures built up the galaxy population: bimodality, luminosity function, stellar mass function, star formation rates and tracers. but some galaxies have a monster at their centre that outshines everything else — and that monster turns out to be entangled with the galaxy's entire life history. **what are active galactic nuclei, how do we recognise them observationally, what powers them, and what does the unified model actually unify?**

the whole lecture is structured as a zoom-in: first the observational signatures (spectra, SED, variability, polarization), then the classification zoo, then the physical engine (SMBH, accretion, Eddington), then the structure from inside out (disk, torus, BLR, NLR, jets), then the unified model that tries to collapse the zoo into one object seen from different angles, and finally the cosmological context — how AGN and their host galaxies co-evolve.

## what is an AGN?

most galaxy emission comes from stars (optical), dust (MIR/FIR), and gas (radio). but some galaxies show **nuclear emission** at all wavelengths that can be as bright as or brighter than the entire host. these host an **active galactic nucleus (AGN)**. see Active galactic nuclei.

the engine is a **supermassive black hole (SMBH)** converting gravitational energy into electromagnetic energy via accretion. alternative explanations (intense nuclear starbursts) can't account for all AGN properties. see Supermassive black holes.

AGN are detected using different methods at different wavelengths, which is why the classification is such a mess — the same object discovered in radio looks different from the one discovered in X-rays, and they got different names before anyone realised they might be the same thing.

## observational characteristics — the spectral evidence

### what normal galaxies look like, for contrast

- **evolved stellar populations**: absorption-dominated, smooth continuum, Ca K, G-band, Mg b. from Jorgensen et al. (2005).
- **young stellar populations**: emission lines from HII regions — Hα, Hβ, Hγ, [OII], [OIII], [NII], [SII]. narrow, low-velocity. this is what we used [H-alpha SFR tracer](../../../02_Zettel/Theory/H-alpha SFR tracer.html) and [OII SFR tracer](../../../02_Zettel/Theory/OII SFR tracer.html) for in the previous lecture.

### AGN spectra — why they're immediately different

AGN spectra are the sum of stellar population + gas + dust + the AGN itself. what makes them stand out:

- **much stronger emission lines** than HII-region galaxies
- **much broader lines** — velocities of thousands of km/s instead of hundreds
- **a different continuum** — power-law, not stellar

example: NGC 4151 (Seyfert) — strong [OIII], Hα+[NII] blend, on a bright continuum.

QSO composite spectrum (Francis et al. 2001): a forest of broad lines from UV to optical — Lyα/NV (1216/1240 Å), CIV (1549), CIII] (1909), CII] (2326), MgII (2798), [OII] (3727), [NeV] (3426), [NeIII] (3869), Hδ (4102), Hγ (4340), Hβ (4861), [OIII] (4959 & 5007). see AGN emission lines.

line decomposition (Schulze et al. 2009): the Hβ and Hα regions decompose into multiple Gaussians — broad component + narrow component + continuum + iron pseudo-continuum. separating them is a fitting problem.

### line broadening — what it means physically

$$\frac{\Delta\lambda}{\lambda} \approx \frac{\Delta v}{c}, \qquad \Delta v = \left(\frac{2kT}{m}\right)^{1/2}$$

normal galaxies: emission lines → 100–300 km/s (e.g. a $10^{12}$ M☉ galaxy at 50 kpc radius → ~300 km/s virial velocity).

AGN: **at least 400 km/s, up to several thousand km/s**. the gas is moving much faster than the galaxy's virial velocity — it's deep in the potential well of something very massive and very compact. see AGN line broadening.

### the two line-emitting regions

1. **narrow line region (NLR)**: v = 400–500 km/s. forbidden lines — [NII] λ6548,6584, [OIII] λ4959,5007, [OII] λ3727. forbidden lines need low-density gas (metastable upper states with long half-lives that would be collisionally depopulated at high density). also high-ionization lines. see Narrow line region.

2. **broad line region (BLR)**: v = 1,000–10,000 km/s. allowed lines only — Balmer series, HeI, HeII. no forbidden lines because the gas is too dense. see Broad line region.

3. the combined spectrum can also show **star formation lines** coexisting with AGN features — disentangling AGN from SF in the same galaxy is a persistent headache (connects directly to [Pablo_03_Star_formation_in_galaxies](../../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)).

### the SED across the entire electromagnetic spectrum

**power-law continuum**: the most powerful AGN have $F_\nu \sim \nu^{-\alpha}$, α ~ 0.5–2.0, with no stellar absorption lines or breaks. this is **synchrotron radiation** from relativistic electrons in strong magnetic fields. self-absorption turns it over as $\nu^{2.5}$ at low frequencies. see Synchrotron radiation.

**the canonical AGN SED** (Elvis et al. 1994, the diagram to memorise):

| spectral region | what's there | origin |
|-----------------|-------------|--------|
| radio | radio-loud vs radio-quiet split | jet synchrotron |
| mm break (~100 μm) | turnover | synchrotron → dust transition |
| IR | $L_\nu \propto \nu^3$ peak at 10–100 μm | dust emission from the torus (T = 100–2000 K) |
| 1 μm inflection | dip | dust → accretion disk transition |
| big blue bump (0.1–1 μm) | broad excess | thermal emission from accretion disk |
| soft excess (~0.1 keV) | smooth rollover | tail of blue bump into soft X-rays |
| X-ray | power-law | corona, IC scattering |
| Compton hump (~10–30 keV) | broad bump | reflection off cold material |

compare to the SEDs from [Pablo_02_Statistical_properties_of_galaxies](../../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html): an elliptical peaks in the NIR, a disk galaxy has UV+FIR, a starburst is FIR-dominated, a ULIRG is extreme FIR. the AGN SED is flatter and broader than any of them.

**UV/blue bump**: featureless blue continuum, especially visible in Sy 1s (Mrk 231, Polletta et al. 2007).

**QSO SED**: $\nu F_\nu$ practically flat from optical into X-rays (e.g. 3C 273). very prominent broad emission lines. may be highly polarized. UV from optically thick accretion disk or free-free; IR from hot dust.

**obscured AGN**: some QSOs have heavily attenuated UV and X-ray, with IR dominating. these matter enormously for galaxy evolution models because much of the universe's AGN activity is hidden behind dust. connects to the obscured AGN fraction discussion below.

### the X-ray spectrum — a diagnostic goldmine

the X-ray spectrum (Risaliti & Elvis 2004) contains:

- **soft excess** at ~0.1–1 keV
- **warm absorber** features (ionized gas absorption edges)
- **iron Kα line** at 6.4 keV — fluorescence from cold material near the SMBH
- **Compton hump** peaking at ~10–30 keV — reflection spectrum

absorption column densities $N_H$ span from $10^{21.5}$ to >$10^{25}$ cm⁻² (Gilli 2007). at $\log N_H > 24$ → **Compton-thick**: soft X-rays completely absorbed, only hard X-rays and the iron line + Compton hump get through. see AGN X-ray spectrum.

this connects directly to [Lab_High-Energy_MOC](../../../00_Atlas/Lab_High-Energy_MOC.html) — the instruments that detect these features (Chandra, XMM-Newton, NuSTAR) are the ones from the instrumentation course.

high-resolution X-ray spectroscopy resolves individual lines: O VII Heα, O VIII Lyα/Lyβ, Ne X Lyα, Mg XI Heα, Fe XVII, NeIX Heα triplet, Fe XX/XXI. future missions (IXO-class) will do this routinely.

### variability

AGN emission at all wavelengths is **highly variable**. see AGN variability:

- continuum and broad-line emission: factors of 2 over months, weeks, or days
- the continuum varies first, then the broad lines follow (reverberation)
- narrow lines don't track the continuum — the NLR is too extended to respond quickly
- X-ray variability is even faster — **minutes**
- extreme: QSO 3C 279 brightened by a factor of 250 in 1937, lasting years

variability → size constraint: $R \leq c\Delta t$. for MCG-6-30-15, $\Delta t \sim 10^4$ s → $R \sim 10^{-4}$ pc ≈ 20 AU. the engine is tiny.

### polarization

- visible AGN emission: typically ≤3% polarization
- **radio lobes**: linear polarization up to **60%** — synchrotron in strong B-fields
- some Sy 2s show **broad lines in polarized light** — light from the hidden BLR scattered by material above the torus. this was one of the strongest early proofs of the unified model. see AGN polarization.

## the classification zoo
<img src="{{ "/assets/images/AGNUnificationFull_PDF.pdf" | relative_url }}" alt="AGNUnificationFull_PDF" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" /> 

### seyfert galaxies (Seyfert 1943)

~10–20% of all galaxies. mostly spirals (Sb, SBb). many show companions or interaction signs.

- **Sy 1**: bright NLs + BLs, continuum dominated by central object. strong X-ray. variable on hours–days. $N_H \sim 10^{22-24}$ cm⁻².
- **Sy 2**: no broad lines (or very faint). narrow lines dominate, v ~ 500 km/s. weaker continuum, more stellar contribution. weak X-ray (absorbed). not variable.
- **Sy 1.5**: intermediate — both components visible.
- the Type 1 / Type 2 distinction extends to all AGN classes. see Seyfert galaxies.

### quasars (QSOs)

discovered 1963. point-like with broad emission lines + power-law continuum. like Sy 1 but the narrow component is insignificant and there's more emission from highly ionized atoms. observed up to $z \sim 8$ (13 Gyr lookback). see Quasars.

- IR excess compared to normal galaxies.
- ~10% are **radio-loud** (QSRs) with jets. rest are **radio-quiet** (QSOs).
- radio-loud QSOs → spheroidal hosts with interactions/mergers. radio-quiet → ellipticals or spirals.
- QSOs are the "tip of the iceberg" of nuclear activity.
- prototype: 3C 273 — visible optical jet.

### radio galaxies

discovered through radio. emission in nucleus, lobes, and jets extending up to 100 kpc into the IGM. jets produce synchrotron as they slow down. nucleus shows Sy 1–2 / QSO features. strong X-ray. see Radio galaxies.

- mostly **ellipticals** (M87, Cygnus A). ~100× less abundant than Seyferts.
- divide into **BLRGs** and **NLRGs**.

**Fanaroff-Riley classification** (1974):
- **FR I**: luminosity drops outward from centre. curved jets, often two. $L(1.4\text{ GHz}) < 10^{25}$ W Hz⁻¹. e.g. NGC 2156.
- **FR II**: luminosity greatest at lobe ends (hotspots). straighter jets, one often much fainter. $L(1.4\text{ GHz}) > 10^{25}$ W Hz⁻¹. e.g. 3C 175.

**M87**: E in Virgo cluster. nucleus ~2 pc, collimated jet extending to 1500 pc, visible in radio + optical + X-rays (non-thermal). rapidly rotating disk → $M_{BH} \sim 3.2 \times 10^9$ M☉.

### blazars

like QSOs but **very** variable with intense, **polarized** radio emission. see Blazars.

- **BL Lac objects**: virtually no emission lines. low redshifts. vary by factors 1.3–100 in hours–days. power-law SEDs, linear polarization 30–40%. 90% in ellipticals.
- **OVVs** (optically violent variables): like BL Lacs but with broader, more intense lines and brighter spectral range. detectable at higher redshifts.
- both can be identified as **MIR power-law galaxies** by Spitzer/IRAC.

### LINERs (low ionization nuclear emission-line regions)

dim cores but intense **low-ionization** forbidden lines: [OI], [OII], [NII]. may be excited or shock-ionized material. related to AGN and/or star formation. almost all spirals have LINER spectra in their cores. some HII regions show them too. see LINERs.

example: NGC 1052 — strong Na I λ5890,5896, [S II] λ6716,6731, Ca II H&K, G band, Mg I b, weak Hβ (Ho et al. 1993).

### ULIRGs and the starburst-AGN connection

starburst galaxies aren't AGN, but intense star formation and nuclear activity often coexist — possibly sharing a common origin. connects directly to [LIRGs ULIRGs HyLIRGs](../../../02_Zettel/Theory/LIRGs ULIRGs HyLIRGs.html) from the previous lecture.

ULIRGs show very intense AGN that could explain much of their IR luminosity, but also have extreme star formation. as IR luminosity increases (Sanders & Mirabel 1996): the Sy 1 + Sy 2 fraction grows dramatically while the HII-region fraction drops.

### BPT diagram — the diagnostic tool

Baldwin, Phillips & Terlevich (BPT) diagram. this is how you actually separate AGN from star-forming galaxies in practice. see [BPT diagram](../../../02_Zettel/Theory/BPT diagram.html).

- x-axis: $\log([\text{NII}]\,\lambda 6583 / \text{H}\alpha)$, or $\log([\text{SII}]\,\lambda\lambda 6718,6731 / \text{H}\alpha)$, or $\log([\text{OI}]\,\lambda 6300 / \text{H}\alpha)$
- y-axis: $\log([\text{OIII}]\,\lambda 5007 / \text{H}\beta)$

separates: **HII regions** (lower left — photoionized by stars), **Seyferts** (upper right — high [OIII]/Hβ), **LINERs** (right — moderate [OIII]/Hβ), **transition objects** (between).

### the summary table (Carroll & Ostlie 2007)

| class | sub-class | description |
|-------|-----------|-------------|
| Seyferts | Type 1 | broad + narrow lines, weak radio, X-ray, spirals, variable |
| | Type 2 | narrow only, weak radio, weak X-ray, spirals, not variable |
| Quasars | Radio-loud (QSR) | broad + narrow, strong radio, some pol., FR II, variable |
| | Radio-quiet (QSO) | broad + narrow, weak radio, weak pol., variable |
| Radio galaxies | BLRG | broad + narrow, strong radio, FR II, weak pol., ellipticals, variable |
| | NLRG | narrow only, strong radio, FR I & II, no pol., ellipticals, not variable |
| Blazars | BL Lacs | ~no lines, strong radio, strong pol., rapid variability, 90% ellipticals |
| | OVV | broad + narrow, strong radio, strong pol., rapid variability, more luminous |
| ULIRGs | | possibly dust-enshrouded quasars, or starburst |
| LINERs | | low-luminosity Sy 2-like, low-ionization, in many spirals |

## physical properties of the central engine

### size

AGN appear point-like even at HST resolution (0.05″) and radio interferometry (0.001″). nearest AGN: NGC 4395 at 4.3 Mpc → size < 1 pc (< 0.05 pc at 0.001″).

variability argument: $R \leq c\Delta t$. MCG-6-30-15: $\Delta t \sim 10^4$ s → $R \sim 10^{-4}$ pc ≈ 20 AU. MW dynamics push even smaller: < 0.001 pc.

### luminosity

QSO bolometric luminosity: $L > 10^{38}$ W ($2.6 \times 10^{11}$ L☉), up to $10^{41}$ W ($2.6 \times 10^{14}$ L☉). typical: $L \sim 5 \times 10^{39}$ W ($1.3 \times 10^{13}$ L☉).

that's up to **100,000 times brighter than an entire galaxy** — from a region smaller than the solar system.

### the schwarzschild radius

$$r_S = \frac{2GM_{BH}}{c^2}$$

for $10^8$ M☉: $r_S \sim 2$ AU $\sim 10^{-5}$ pc. matches the variability-derived engine size. see Schwarzschild radius.

### the eddington luminosity

the maximum luminosity before radiation pressure blows away the accreting material (assumes ionized H, spherical symmetry — "not OK" for a disk, Pablo notes, but a useful order-of-magnitude ceiling):

$$L_{Ed} = \frac{4\pi G c M_{BH} m_p}{\sigma_T} \approx 1.3 \times 10^{31} \left(\frac{M}{M_\odot}\right) \text{ W} = 3.3 \times 10^4 \left(\frac{M}{M_\odot}\right) L_\odot$$

stars sit well below $L_{Ed}$. AGN approach it. accretion disks are regulated by Eddington — as luminosity grows, SMBH mass must grow too, or the system destroys itself. see Eddington luminosity.

for typical AGN luminosity $5 \times 10^{39}$ W → $M_{BH} \sim 3.8 \times 10^8$ M☉. both the variability + Schwarzschild argument and the luminosity + Eddington argument land on the same mass. that's satisfying.

### accretion efficiency and rate

accretion onto a SMBH radiates ~10% of the rest-mass energy — much better than nuclear fusion (0.7%). for rotating (Kerr) SMBHs, efficiency can reach ~50% because frame-dragging allows stable orbits closer to the horizon.

$$L = \eta \dot{M} c^2, \qquad 0.057 < \eta < 0.42$$

for a typical AGN ($L = 5 \times 10^{39}$ W, $\eta = 0.1$): $\dot{M} \sim 8.8$ M☉/yr. this is a physically reasonable accretion rate — that much gas lives in galactic nuclei. see Accretion onto SMBHs.

**M87 example**: ionized gas rotation curve (Macchetto et al. 1997) → $v_{max} \sim 550$ km/s at 7–15 pc → $M_{BH} \sim 3 \times 10^9$ M☉ after correcting for inclination.

## AGN structure — from the inside out

### the standard model

the AGN phenomenon is explained by a **SMBH** at the centre, surrounded by an **accretion disk**, enclosed in a **dust/gas torus**. the **orientation** of this system relative to the observer determines which "type" we observe. everything else — jets, BLR, NLR — follows from this geometry.

### the accretion disk

**formation**: gas clouds orbit the SMBH, lose energy through cloud-cloud collisions (viscosity), settle into roughly circular orbits. rotation direction set by the initial angular momentum of the infalling material (or the direction of the cannibalized galaxy in a merger). see Accretion disk.

**three-zone structure** (from inside out):

1. **innermost** (up to ~$10^3 r_S$): very hot, radiation pressure > gas pressure → thick disk. origin of the **UV emission** / big blue bump. intense B-fields → highly polarized synchrotron (explains blazars). high temperatures → highly ionized metals in X-ray spectra.

2. **intermediate** (up to ~$10^5 r_S$ ≈ 1 pc for $10^8$ M☉): thin disk, gas-pressure supported. widens outward. irradiated by the hot inner region.

3. **outermost**: disk fragments into individual gas clouds that can fall inward through mutual collisions.

### magnetic fields and jets

the hot disk material generates intense B-fields (~1 T). SMBH rotation amplifies them. these fields accelerate charged particles (e⁻, e⁺) to relativistic speeds along the rotation axis → **synchrotron-emitting jets**. see AGN jets.

jets:
- aligned with disk rotation axis. the thick inner disk acts as a collimating funnel.
- one jet is often invisible — **relativistic beaming** makes the jet aimed toward us hugely brighter than the receding one.
- globally neutral → e⁻/e⁺ pairs or e⁻/ions.
- energy is mostly kinetic. jet material hits IGM, excites gas and dust, drives shocks.
- synchrotron losses should brake particles within ~10,000 yr, but very long jets exist → **re-acceleration mechanisms** are required (shocks, disturbed B-fields, radiation pressure).

### superluminal motion

jet velocities are measured from structures "traveling" along jets in time-series radio maps. 3C 120 (Gómez et al. 2000): $v_{app} = 4.4 h_{65}^{-1} c$. 3C 273: $v_{app}/c \sim 8$, explained by a true velocity $v/c = 0.992$ at a small angle to the line of sight.

$$v_{app} = \frac{v \sin\theta}{1 - (v/c)\cos\theta}$$

this is a **projection effect**, not a violation of special relativity. $v_{app}$ peaks when $\cos\theta = v/c$. see Superluminal motion.

### the dust torus

surrounding the SMBH + accretion disk: a **torus of gas and dust** with high column density. see AGN dust torus.

- explains the strong MIR/FIR in most AGN (dust absorbs UV/X-ray, re-emits in IR).
- dust grains (usually graphite) must be at $T < 2000$ K or they sublimate.
- inner radius = **sublimation radius** (where $T = T_{sub}$ given the central engine luminosity).
- if very large and dense → absorbs everything → **obscured AGN**.
- not necessarily coplanar with the accretion disk.
- size: 1,000–10,000× larger than the emitting disk.
- example: NGC 4261 — HST image shows a ~400 light-year gas+dust disk.

### the broad and narrow line regions — where the spectral lines actually come from

**BLR** (inside the torus):
- dense clouds ($\sim 10^{8-10}$ cm⁻³), heated to > $10^4$ K. close to the SMBH → thousands of km/s.
- hundreds of millions of clouds, each a few M☉. cover ~10% of the sky from the SMBH's perspective.
- variability is large and tracks the continuum with a time lag → **reverberation mapping** gives the BLR radius.

**NLR** (outside the torus):
- much less dense, lower velocities → forbidden lines survive.
- visible in all AGN types (not blocked by the torus).
- extends for several kpc → **extended NLR** (ENLR), visible in [OIII] bicones.
- often coexists with star formation in the host nucleus.
- NLR clouds can disperse or be swept away → the Sy/QSO phase is **not permanent**.

### X-ray emission mechanisms

multiple origins:
- synchrotron from the jet
- tail of the blue bump / UV continuum → soft X-rays
- **inverse Compton scattering**: relativistic e⁻ upscatter photons to X-ray energies
- thermal bremsstrahlung from e⁻-e⁻ interactions
- γ-rays: IC scattering, nuclear reactions near event horizon, SNe near SMBH

### scale of AGN components (Martin Elvis 2007 diagram)

from centre outward, the component scales for $10^7$ / $10^9$ M☉:

| component | radius ($r_S$) | physical scale | emission |
|-----------|----------------|----------------|----------|
| X-ray source | 1–10 | ~μpc | X-ray continuum |
| UV / big blue bump | 10–100 | ~0.3 μpc–mpc | UV |
| HIBELs (CIV, HeII, OVI) | 100–1000 | | high-ionization broad lines |
| LoBELs (MgII, Balmer) | $10^4$–$10^5$ | | low-ionization broad lines |
| accretion disk continuum | $10^4$–$10^5$ | | NIR (JHK) |
| dusty molecular torus | $10^5$–$10^6$ | ~1–10 pc | MIR, H₂, coronal lines |
| NELR | $10^6$–$10^7$ | ~10–100 pc | Hα, [OIII] |
| extended NELR / bicones | — | ~1–10 kpc | [OIII], FIR, CO |
| host galaxy | — | ~10 kpc | — |
| relativistic jet | ⊥ to disk | any scale | synchrotron (radio to γ) |

see also the Zier & Biermann (2002) diagram which shows the same structure in $\log(r/\text{pc})$ vs $\log(z/\text{pc})$ coordinates, with the classification labels mapped to viewing angles.

## the unified model

the unified model says: **all AGN are fundamentally the same object.** the zoo collapses to three parameters. see AGN unified model:

1. **SMBH mass**
2. **accretion rate** (Eddington ratio)
3. **viewing angle** (orientation of disk + torus relative to the observer)

### viewing angle → classification

- **face-on / through the jet**: **blazar** (BL Lac or OVV). jet continuum dominates, lines washed out. strong polarization. rapid variability from relativistic beaming.
- **intermediate angle** (above torus, BLR visible): **Sy 1** or **QSO** (radio-quiet) or **BLRG** (radio-loud). broad + narrow lines visible.
- **edge-on** (torus blocks BLR): **Sy 2** or **NLRG**. narrow lines only. but some Sy 2s show BLs in polarized (scattered) light → the BLR is there, just hidden.
- **with jets**: radio-loud. **without jets**: radio-quiet. at high angles, two jets and NLR visible. at low angles, one jet.

### Sy 1 vs Sy 2

- **Sy 1**: massive SMBH, high accretion rate, viewed from above the torus → BLR + NLR both visible.
- **Sy 2**: could be less massive SMBH with less accreting material, and/or the BLR is obscured by the torus.
- note from Pablo: if the amount of dust and emission are equal in Sy 1 and Sy 2, the IR emission should be equal. is it? it doesn't seem so — a challenge.

### QSOs in the model

radio-quiet QSOs = very luminous Sy 1s (larger SMBHs and/or higher accretion rate). if the central engine produces jets → radio emission, but how we see it depends again on orientation.

### problems and open questions

the model isn't perfect. Pablo lists:
- **radio-loud vs radio-quiet**: some AGN genuinely lack jets — not an orientation effect. SMBH spin from mergers?
- some Sy 2s don't show as much extinction as expected
- some Sy 2s show BLs in polarized light (supporting the model), but not all
- some Sy 1s have darkened central regions
- some AGN are darkened at some wavelengths but not others
- modifications needed: "clumpy medium" instead of smooth torus, reflection effects, etc.
- age and fuel supply may matter — not just geometry

### the evolutionary lifecycle (UCL diagram)

new BH in star-forming clouds → BH grows, stars form → energy output blasts away gas clouds (quenching SF) → BH accretes remaining gas unobscured → QSO luminosity fades → **dormant black hole**, fuel used up.

this connects the AGN to the host galaxy's star formation history — exactly what [Pablo_03_Star_formation_in_galaxies](../../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html) was building toward.

## AGN and galaxy evolution — the cosmological significance

### the $M_{BH}$–$\sigma$ relation

tight correlation (Tremaine et al. 2002):

$$M_{BH} \propto \sigma^{4-5}$$

across ellipticals, lenticulars, spirals, measured via stellar dynamics, ionized gas, masers. the SMBH and its host galaxy **know about each other** — they co-evolve. see MBH-sigma relation.

### cosmic downsizing

AGN number density and emissivity vs redshift (Hasinger et al. 2006):
- most luminous AGN ($\log L > 46$) peaked earliest ($z \sim 2$–3), now very rare.
- lower-luminosity AGN ($\log L \sim 42$–43) peaked later or stay roughly constant.
- this is **anti-hierarchical** — the biggest SMBHs formed and shone first. see AGN cosmic downsizing.

best described by **luminosity-dependent density evolution (LDDE)**, not pure luminosity evolution (PLE).

### the merger-driven evolutionary sequence

Hopkins et al. (2008), also Sanders et al. (1988). the full lifecycle:

**(a) isolated disk** → **(b) small group** (halo accretes companions, dynamical friction merges subhalos) → **(c) interaction/merger** (SFR rises, stellar winds dominate feedback) → **(d) coalescence/(U)LIRG** (violent relaxation, gas inflows, starburst + buried X-ray AGN) → **(e) "blowout"** (BH grows rapidly, dominates luminosity, remaining dust/gas expelled, reddened Type II QSO, near-Eddington) → **(f) quasar** (dust removed, "traditional" QSO, tidal features fade, characteristically blue/young spheroid) → **(g) decay/K+A** (QSO fades, remnant reddens, hot halo from feedback, quasi-static cooling) → **(h) "dead" elliptical** (SF terminated, large BH/spheroid, efficient feedback, growth only by dry mergers).

this is the master narrative of extragalactic astrophysics right now: galaxies, black holes, mergers, star formation, and quenching are not separate stories. they are **one story** told from different observational angles.

### EHT — the direct image

Event Horizon Telescope imaged the SMBH shadow in M87 ($\sim 6.5 \times 10^9$ M☉) and Sgr A* ($\sim 4 \times 10^6$ M☉). bright asymmetric ring matching GR predictions. direct visual confirmation of the SMBH + accretion flow picture.

## equations to remember

| quantity | equation |
|----------|----------|
| Schwarzschild radius | $r_S = 2GM_{BH}/c^2$ |
| Eddington luminosity | $L_{Ed} = 4\pi G c M_{BH} m_p / \sigma_T \approx 1.3 \times 10^{31} (M/M_\odot)$ W |
| accretion luminosity | $L = \eta \dot{M} c^2$, $0.057 < \eta < 0.42$ |
| line broadening | $\Delta\lambda / \lambda \approx \Delta v / c$ |
| thermal broadening | $\Delta v = (2kT/m)^{1/2}$ |
| variability → size | $R \leq c\Delta t$ |
| superluminal apparent velocity | $v_{app} = v\sin\theta / [1 - (v/c)\cos\theta]$ |

## landmark numbers

| what | value |
|------|-------|
| typical QSO luminosity | $5 \times 10^{39}$ W (~$10^{13}$ L☉) |
| QSO luminosity range | $10^{38}$–$10^{41}$ W |
| SMBH mass for typical AGN | ~$3.8 \times 10^8$ M☉ |
| M87 SMBH | $3.2 \times 10^9$ M☉ |
| accretion rate (typical) | ~8.8 M☉/yr |
| accretion efficiency | ~10% (up to ~50% Kerr) |
| Sy fraction of galaxies | 10–20% |
| radio-loud fraction of QSOs | ~10% |
| radio galaxies vs Sy | ~100× less common |
| NLR velocities | 400–500 km/s |
| BLR velocities | 1,000–10,000 km/s |
| torus dust temperature | < 2000 K |
| torus vs disk size | 1,000–10,000× larger |
| highest-redshift QSO | $z \sim 8$ |
| 3C 273 $v_{app}/c$ | ~8 ($v/c = 0.992$) |
| BL Lac polarization | 30–40% |
| radio lobe polarization | up to 60% |

## what the student should take away

- an AGN is a SMBH accreting material. everything we observe — the emission lines, the SED, the variability, the jets — traces back to accretion onto a compact object smaller than the solar system.
- the classification zoo (Seyferts, quasars, radio galaxies, blazars, LINERs) is at least partly an orientation effect. the unified model collapses most of it into three parameters: SMBH mass, accretion rate, and viewing angle.
- the BPT diagram is the practical tool that separates AGN from star-forming galaxies in spectroscopic surveys.
- AGN and their host galaxies co-evolve. the $M_{BH}$–$\sigma$ relation, cosmic downsizing, and the merger-driven evolutionary sequence (Hopkins et al.) all point to the same conclusion: the black hole is not a passive resident. it shapes its galaxy.
- obscured AGN are everywhere and missing them means missing much of the action in the universe.
- this connects backward to everything from the previous lectures: SFR tracers (because AGN contaminate them), the IR (where dust-obscured AGN live), and galaxy stellar mass functions (because AGN feedback determines where galaxies end up).

## connections

- previous lecture: [Pablo_03_Star_formation_in_galaxies](../../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)
- accretion physics from the instrumentation side: [Lab_High-Energy_MOC](../../../00_Atlas/Lab_High-Energy_MOC.html)
- mergers and ULIRGs: [LIRGs ULIRGs HyLIRGs](../../../02_Zettel/Theory/LIRGs ULIRGs HyLIRGs.html)
- SFR tracers contaminated by AGN: [Radio SFR tracer](../../../02_Zettel/Theory/Radio SFR tracer.html), [X-ray SFR tracer](../../../02_Zettel/Theory/X-ray SFR tracer.html)
- the mind map of everything: Interests_MOC
- MOC: [Observational_Cosmology_MOC](../../../00_Atlas/Observational_Cosmology_MOC.html)

## key references

- Elvis et al. 1994 ApJS 95, 1 (the AGN SED template)
- Francis et al. 2001 (QSO composite spectrum)
- Risaliti & Elvis 2004 (X-ray spectral review)
- Gilli 2007 (absorption column density distribution)
- Hasinger et al. 2006 (AGN luminosity function evolution)
- Hopkins et al. 2008 (merger-driven evolutionary sequence)
- Sanders & Mirabel 1996 (LIRGs, ULIRGs)
- Tremaine et al. 2002 ($M_{BH}$–$\sigma$)
- Baldwin, Phillips & Terlevich (BPT diagram)
- Fanaroff & Riley 1974 (FR I / FR II)
- Polletta et al. 2007 (SED templates)
- Carroll & Ostlie 2007, chapter 28
- Sparke & Gallagher 2008, chapter 9
