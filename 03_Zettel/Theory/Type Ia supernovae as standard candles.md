---
layout: "default"
title: "Type Ia supernovae as standard candles"
---
{% raw %}
while Cepheid variable stars provide extraordinary accuracy, they cannot be resolved beyond $\sim 30-40$ Mpc. to map cosmological distances across billions of light-years and measure the expansion rate of the universe, astronomy relies on the premier secondary standard candle: **Type Ia Supernovae (SNe Ia)**.

![distancescale-15.png](../../assets/images/distancescale-15.png)

---

## the physical progenitor mechanism

a **Type Ia Supernova** is the catastrophic thermonuclear detonation of a **carbon-oxygen white dwarf** in a binary system:
1. the white dwarf accretes hydrogen-rich gas from an evolving companion star (single-degenerate channel) or merges with another white dwarf (double-degenerate channel).
2. as mass accumulates, the white dwarf approaches the **Chandrasekhar mass limit**:
   $$M_{\text{Ch}} \approx 1.44 M_\odot$$
3. electron degeneracy pressure cannot prevent central compression. central density climbs to $\rho_c \sim 2 \times 10^9$ g/cm$^3$ and temperature reaches $T_c \sim 7 \times 10^8$ K, igniting carbon fusion.
4. because the matter is completely electron-degenerate, temperature increases do not increase pressure: there is no thermal expansion to stabilize fusion. a runaway **thermonuclear flame front** sweeps through the entire star in seconds, incinerating the carbon and oxygen into radioactive nickel (${}^{56}\text{Ni}$).
5. the star is completely obliterated; no central remnant is left behind.

![distancescale-16.png](../../assets/images/distancescale-16.png)

---

## why Type Ia Supernovae are ideal standard candles

1. **uniform trigger mass**: because all progenitors detonate at essentially the identical critical mass ($M \approx 1.4 M_\odot$) and identical carbon-oxygen composition, the total energy release and radioactive ${}^{56}\text{Ni}$ mass synthesized are remarkably uniform:
   $$M({}^{56}\text{Ni}) \approx 0.6 M_\odot$$
2. **colossal luminosity**: at peak brightness, a Type Ia supernova reaches an absolute magnitude of:
   $$\boxed{\, M_B \approx M_V \approx -19.3 \pm 0.3 \text{ mag} \,}$$
   radiating a peak luminosity of $L \approx 4 \times 10^9 L_\odot$—**as bright as an entire galaxy of 10 billion stars!**
3. **vast cosmological reach**: can be detected and monitored across deep space out to redshifts $z > 1.5 - 2.0$.

---

## the Phillips relation (luminosity-width relation)

uncalibrated Type Ia supernovae exhibit an intrinsic scatter of $\sim 0.3 - 0.5$ mag (too large for precision cosmology). in 1993, Mark Phillips discovered an empirical calibration: **the Phillips Relation**:
- the peak absolute magnitude correlates tightly with the **rate of decline** of its B-band light curve in the 15 days following maximum: $\Delta m_{15}(B)$.
- intrinsically brighter supernovae have broader, slower-declining light curves; fainter supernovae fade more quickly.

$$\boxed{\, M_{\text{max}}(B) = -21.726 + 2.698 \, \Delta m_{15}(B) \,}$$

applying the Phillips relation standardizes Type Ia supernovae to an extraordinary precision of **$\sigma_M \approx 0.12-0.15$ mag**, corresponding to distance uncertainties of only **$\sim 5-7\%$**!

![distancescale-17.png](../../assets/images/distancescale-17.png)

---

## the discovery of Cosmic Acceleration and Dark Energy (1998)

in 1998, two independent teams—the **High-Z Supernova Search Team** (led by Brian Schmidt and Adam Riess) and the **Supernova Cosmology Project** (led by Saul Perlmutter)—used Type Ia supernovae at $z \sim 0.5-1.0$ to measure the cosmic deceleration parameter $q_0$.

**the shocking discovery**: distant supernovae were systematically **$\sim 0.25$ magnitudes fainter** (and thus farther away) than predicted by any matter-dominated decelerating universe! 
consequence: the expansion of the universe is not slowing down under gravity, but is currently **accelerating**, driven by an unknown repulsive component: **Dark Energy ($\Lambda$)**. 

this monumental discovery earned Perlmutter, Schmidt, and Riess the **2011 Nobel Prize in Physics**.

![distancescale-18.png](../../assets/images/distancescale-18.png)

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Parallax and standard candles](./Parallax%20and%20standard%20candles.html)
- [Cepheids and supernovae](./Cepheids%20and%20supernovae.html)
- [Hubble's law and cosmological redshift](./Hubble%27s%20law%20and%20cosmological%20redshift.html)
- [Cosmic_inventory_dark_energy](./Cosmic_inventory_dark_energy.html)
- [Supernovae and compact remnants](./Supernovae%20and%20compact%20remnants.html)

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_dist-45.png](../../assets/images/obs_dist-45.png)
*Type Ia Supernovae: thermonuclear explosion of carbon-oxygen white dwarf accreting towards Chandrasekhar mass.*

![obs_dist-46.png](../../assets/images/obs_dist-46.png)
*Peak luminosity M_B ~ -19.3 mag (bolometric luminosity L ~ 10^43 erg/s, competing with host galaxy).*

![obs_dist-47.png](../../assets/images/obs_dist-47.png)
*Light curve decline rate: Delta m_15(B) parameter.*

![obs_dist-48.png](../../assets/images/obs_dist-48.png)
*Mark Phillips 1993 relation: broader/slower light curves are intrinsically brighter.*

![obs_dist-49.png](../../assets/images/obs_dist-49.png)
*Light curve stretch factor s and modern standardization light curve fitters (SALT2, MLCS2k2).*

![obs_dist-50.png](../../assets/images/obs_dist-50.png)
*Standardized candle precision: residual scatter sigma_mag ~ 0.12-0.15 mag (~6-7% distance error).*

![obs_dist-51.png](../../assets/images/obs_dist-51.png)
*High-Z Supernova Search Team and Supernova Cosmology Project (1998).*

![obs_dist-52.png](../../assets/images/obs_dist-52.png)
*Discovery of cosmic acceleration and dark energy (Nobel Prize 2011).*

![obs_dist-53.png](../../assets/images/obs_dist-53.png)
*Hubble diagram of Type Ia SNe out to z > 1.*

![obs_dist-54.png](../../assets/images/obs_dist-54.png)
*Systematic uncertainties: dust extinction, host galaxy mass step, progenitor metallicity.*

![obs_dist-55.png](../../assets/images/obs_dist-55.png)
*Single-degenerate vs double-degenerate progenitor channels.*

![obs_dist-56.png](../../assets/images/obs_dist-56.png)
*Type Ia SNe as anchor for cosmological parameter estimation (Omega_m, Omega_Lambda, w).*
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (21)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Cepheid%20period-luminosity%20relation.html" class="backlink-item">Cepheid period-luminosity relation</a></li>
    <li class="backlink-item-wrap"><a href="./Cepheids%20and%20supernovae.html" class="backlink-item">Cepheids and supernovae</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmological%20constant.html" class="backlink-item">Cosmological constant</a></li>
    <li class="backlink-item-wrap"><a href="./Deceleration%20parameter.html" class="backlink-item">Deceleration parameter</a></li>
    <li class="backlink-item-wrap"><a href="./Distance%20ladder%20derivations.html" class="backlink-item">Distance ladder derivations</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Galactic%20novae%20spectroscopy.html" class="backlink-item">Galactic novae spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Hubble%20flow%20distances.html" class="backlink-item">Hubble flow distances</a></li>
    <li class="backlink-item-wrap"><a href="./Hubble%20law.html" class="backlink-item">Hubble law</a></li>
    <li class="backlink-item-wrap"><a href="./Hubble%27s%20law%20and%20cosmological%20redshift.html" class="backlink-item">Hubble's law and cosmological redshift</a></li>
    <li class="backlink-item-wrap"><a href="./Limb%20darkening.html" class="backlink-item">Limb darkening</a></li>
    <li class="backlink-item-wrap"><a href="./Luminosity%20distance.html" class="backlink-item">Luminosity distance</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Astrophysics_MOC.html" class="backlink-item">Observational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Parallax%20and%20standard%20candles.html" class="backlink-item">Parallax and standard candles</a></li>
    <li class="backlink-item-wrap"><a href="./Supernova%20Hubble%20diagram.html" class="backlink-item">Supernova Hubble diagram</a></li>
    <li class="backlink-item-wrap"><a href="./Supernova%20spectroscopy.html" class="backlink-item">Supernova spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Supernovae%20and%20compact%20remnants.html" class="backlink-item">Supernovae and compact remnants</a></li>
    <li class="backlink-item-wrap"><a href="./Surface%20brightness%20fluctuations.html" class="backlink-item">Surface brightness fluctuations</a></li>
    <li class="backlink-item-wrap"><a href="./Symbiotic%20star%20spectroscopy.html" class="backlink-item">Symbiotic star spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./TRGB%20tip%20of%20the%20red%20giant%20branch.html" class="backlink-item">TRGB tip of the red giant branch</a></li>
    <li class="backlink-item-wrap"><a href="./Variable%20stars%20as%20standard%20candles.html" class="backlink-item">Variable stars as standard candles</a></li>
  </ul>
</div>
