---
layout: "default"
title: "Star formation history of a population"
---
the **star formation history (SFH)** of a galaxy or stellar system is the time-dependent rate of star creation:
$$\psi(t) \equiv \frac{dM_*}{dt} \quad [M_\odot/\text{yr}]$$
as a function of cosmic time $t$ (or lookback time). in unresolved stellar population synthesis, the integrated spectral energy distribution of a galaxy is modeled as the convolution of its SFH with a library of coeval, single-metallicity **single stellar populations (SSPs)**:

$$L_\lambda^{\rm gal}(t) = \int_0^t \psi(t - t')\,L_\lambda^{\rm SSP}(t', Z(t'))\,e^{-\tau_\lambda^{\rm dust}(t')}\,dt'$$

where $t'$ is the age of an individual generation, $Z(t')$ is the chemical enrichment history, and $\tau_\lambda^{\rm dust}(t')$ represents age-dependent dust attenuation.

## mathematical models of SFH

### 1. single stellar population (instantaneous burst)
$$\psi(t) = M_*\,\delta(t - t_0)$$
all stars form at a single epoch $t_0$. this is the fundamental mathematical building block (the Green's function) of population synthesis. it provides an accurate description of star clusters and ancient monolithic ellipticals.

### 2. constant star formation
$$\psi(t) = \psi_0 = \text{const}$$
applicable to late-type spiral and irregular galaxies in dynamic steady state, where gas inflow balances star formation. predicts an SED with persistent, strong rest-frame ultraviolet flux and prominent nebular recombination lines.

### 3. exponentially declining ($\tau$-model)
$$\psi(t) = \frac{M_*}{\tau}\,e^{-t/\tau}$$
where $\tau$ is the characteristic e-folding star-formation timescale. as $\tau \to 0$, it approaches an instantaneous SSP; as $\tau \to \infty$, it approaches constant star formation. historically used as the standard parametrization for early-type galaxies experiencing monotonic gas exhaustion.

### 4. delayed-$\tau$ model
$$\psi(t) = A\,t\,\exp(-t/\tau)$$
rises linearly at early times, peaks at $t = \tau$, and decays exponentially thereafter. physically superior to simple $\tau$-models because it captures the initial growth and gas accumulation phase of proto-galaxies before quenching.

### 5. non-parametric SFH (modern Bayesian approach)
modern SED-fitting pipelines (e.g. Prospector [Leja et al. 2019], BAGPIPES [Carnall et al. 2018]) abandon rigid analytical formulas in favor of flexible step functions:
$$\psi(t) = \sum_{k=1}^{N_{\rm bins}} \psi_k\,\Pi_k(t)$$
where the SFR $\psi_k$ is fit across $N_{\rm bins} \sim 6\text{--}14$ lookback-time bins. Bayesian priors (such as the **continuity prior** penalizing sharp jumps in $\Delta \log \psi$, or **Dirichlet priors**) prevent overfitting while capturing episodic bursts, rejuvenation events, and sharp quenching timescales without model bias.

## multi-wavelength probes and observational timescales

different wavebands probe star formation over vastly different lookback timescales set by the main-sequence lifetimes of the dominating stars:

| observational tracer | waveband | stellar source | active timescale | dust sensitivity |
|---|---|---|---|---|
| **Lyman continuum** | $< 912$ Å | massive O stars ($M \ge 30\,M_\odot$) | $\lesssim 3\text{--}5$ Myr | severe (absorbed by H I) |
| **$\mathrm{H}\alpha$ emission** | $6563$ Å | photoionized H II nebulae around O stars | $\lesssim 10$ Myr | moderate ($A_{\mathrm{H}\alpha} \approx 0.8\,A_V$) |
| **far-UV continuum** | $1500\text{--}2800$ Å | O and early B stars ($M \ge 5\,M_\odot$) | $\sim 10\text{--}100$ Myr | high ($A_{\rm FUV} \approx 2.5\text{--}3\,A_V$) |
| **far-infrared (FIR)** | $8\text{--}1000\,\mu$m | thermal dust re-radiation of young star UV | $\sim 10\text{--}100$ Myr | unobscured tracer (probes dust) |
| **optical continuum** | $4000\text{--}8000$ Å | A, F, G stars | $\sim 100\text{--}1000$ Myr | moderate |
| **near-infrared (NIR)** | $1\text{--}2.5\,\mu$m (K-band) | evolved red giants and low-mass MS stars | integrated cosmic time ($\sim 10$ Gyr) | minimal ($A_K \approx 0.1\,A_V$) |

a robust reconstruction of $\psi(t)$ requires panchromatic coverage combining UV, optical, and infrared data to resolve both recent bursts and underlying ancient mass.

## specific star formation rate and galaxy taxonomy

the ratio of current star formation to accumulated stellar mass defines the **specific star formation rate (sSFR)**:
$$\mathrm{sSFR} \equiv \frac{\mathrm{SFR}}{M_*} \quad [\text{yr}^{-1}]$$
the inverse of sSFR is the **doubling timescale** $t_{\rm double} = 1/\mathrm{sSFR}$. in the local universe:
- **star-forming main sequence (SFMS)**: $\mathrm{sSFR} \sim 10^{-10}\,\text{yr}^{-1}$ ($t_{\rm double} \sim 10$ Gyr, comparable to the Hubble time).
- **starbursts**: $\mathrm{sSFR} \gtrsim 10^{-9}\,\text{yr}^{-1}$ ($t_{\rm double} \lesssim 1$ Gyr).
- **quiescent / quenched galaxies**: $\mathrm{sSFR} \lesssim 10^{-11}\,\text{yr}^{-1}$ ($t_{\rm double} \gg t_H$).

## connection to the cosmic star formation rate density

integrating individual galaxy SFHs over cosmological volumes generates the **cosmic star formation history (CSFH)** (Madau & Dickinson 2014):
$$\rho_{\rm SFR}(z) = 0.015\,\frac{(1+z)^{2.7}}{1 + [(1+z)/2.9]^{5.6}} \quad [M_\odot\,\text{yr}^{-1}\,\text{Mpc}^{-3}]$$
the cosmic star formation rate density peaked at $z \approx 1.9$ ("cosmic noon", $\sim 10$ Gyr ago) and declined by an order of magnitude toward $z = 0$.

## see also

- [Observational_Astrophysics_MOC](../../04_Atlas/Observational_Astrophysics_MOC.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [Stellar population synthesis](Stellar%20population%20synthesis.html)
- [Single stellar population SSP](Single%20stellar%20population%20SSP.html)
- [SPS code families](SPS%20code%20families.html)
- [Initial mass function](Initial%20mass%20function.html)
- [SED fitting basics](SED%20fitting%20basics.html)
- [SFR tracers from population synthesis](SFR%20tracers%20from%20population%20synthesis.html)
- [Stellar mass estimation in unresolved populations](Stellar%20mass%20estimation%20in%20unresolved%20populations.html)
- [Age estimation in unresolved populations](Age%20estimation%20in%20unresolved%20populations.html)

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_stars-101.png](../../assets/images/obs_stars-101.png)
*Star Formation History (SFH) psi(t): star formation rate as a function of cosmic time.*

![obs_stars-102.png](../../assets/images/obs_stars-102.png)
*Parametric SFH models: exponentially declining tau-models psi(t) proportional to exp(-t/tau).*

![obs_stars-103.png](../../assets/images/obs_stars-103.png)
*Delayed tau-models: psi(t) proportional to t * exp(-t/tau) matching early growth and late quenching.*

![obs_stars-104.png](../../assets/images/obs_stars-104.png)
*Constant star formation and instantaneous burst (delta-function) models.*

![obs_stars-105.png](../../assets/images/obs_stars-105.png)
*Specific Star Formation Rate (sSFR = SFR / M_*) and galaxy star-forming main sequence.*

![obs_stars-106.png](../../assets/images/obs_stars-106.png)
*Summary of stellar population synthesis foundations.*

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (12)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Age%20estimation%20in%20unresolved%20populations.html" class="backlink-item">Age estimation in unresolved populations</a></li>
    <li class="backlink-item-wrap"><a href="H-alpha%20SFR%20tracer.html" class="backlink-item">H-alpha SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="IR%20SFR%20tracer.html" class="backlink-item">IR SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="Photometric%20redshifts.html" class="backlink-item">Photometric redshifts</a></li>
    <li class="backlink-item-wrap"><a href="SED%20fitting%20basics.html" class="backlink-item">SED fitting basics</a></li>
    <li class="backlink-item-wrap"><a href="SFR%20tracers%20from%20population%20synthesis.html" class="backlink-item">SFR tracers from population synthesis</a></li>
    <li class="backlink-item-wrap"><a href="SPS%20code%20families.html" class="backlink-item">SPS code families</a></li>
    <li class="backlink-item-wrap"><a href="Single%20stellar%20population%20SSP.html" class="backlink-item">Single stellar population SSP</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20mass%20estimation%20in%20unresolved%20populations.html" class="backlink-item">Stellar mass estimation in unresolved populations</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20population%20synthesis.html" class="backlink-item">Stellar population synthesis</a></li>
    <li class="backlink-item-wrap"><a href="UV%20SFR%20tracer.html" class="backlink-item">UV SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Astrophysics_MOC.html" class="backlink-item">Observational_Astrophysics_MOC</a></li>
  </ul>
</div>

