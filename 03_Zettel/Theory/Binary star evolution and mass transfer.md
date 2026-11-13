---
layout: "default"
title: "Binary star evolution and mass transfer"
---
most stars live in binaries, and if the two stars are close enough, one of them will at some point grow larger than the region where its own gravity wins. gas then flows to the companion. this **mass transfer** changes the masses, the orbit and the fate of both stars, and it produces objects that single-star evolution cannot make.

## the Roche potential

I work in the frame that rotates with the binary, with angular velocity $\omega^2 = G(M_1 + M_2)/a^3$ for a circular orbit of separation $a$. a test particle feels the gravity of both stars and the centrifugal term:

$$\Phi(\vec r) = -\frac{G M_1}{\lvert \vec r - \vec r_1\rvert} - \frac{G M_2}{\lvert \vec r - \vec r_2\rvert} - \frac{1}{2}\lvert \vec\omega \times \vec r\rvert^2$$

close to each star the equipotential surfaces are spheres. further out they become elongated, and one critical surface has the shape of a figure of eight. the two halves are the **Roche lobes**, and they touch at the inner Lagrange point $L_1$, where the net force vanishes.

the size of the lobe of star 1 is given by the radius of a sphere with the same volume. with $q = M_1/M_2$, the Eggleton (1983) fit is

$$\boxed{\, \frac{R_{L,1}}{a} = \frac{0.49\, q^{2/3}}{0.6\, q^{2/3} + \ln\left(1 + q^{1/3}\right)} \,}$$

accurate to about 1% for every mass ratio. for equal masses $R_L \approx 0.38\,a$. the more massive star has the larger lobe.

## three kinds of binary

- **detached**: both stars are inside their lobes. they evolve as single stars and only interact through tides and winds.
- **semi-detached**: one star fills its lobe and loses gas through $L_1$. this is Roche lobe overflow.
- **contact**: both stars fill their lobes and share a common envelope. W Ursae Majoris systems are the standard example.

## when the overflow starts

a star expands at three moments of its life, and the classification follows which one makes it reach the lobe first. it is set by the initial separation.

- **case A**: during core hydrogen burning. needs a very close orbit, periods of a few days.
- **case B**: after core hydrogen exhaustion and before helium ignition, while the star crosses the Hertzsprung gap or climbs the red giant branch. the most common case.
- **case C**: after core helium burning, on the asymptotic giant branch or as a supergiant. needs a wide orbit, periods of years.

## how the orbit responds

take the simplest assumption, **conservative** transfer. all the gas lost by star 1 lands on star 2, so the total mass $M = M_1 + M_2$ and the orbital angular momentum $J$ are constant. for a circular orbit

$$J = M_1 M_2 \sqrt{\frac{G a}{M_1 + M_2}}$$

solving for the separation with $J$ and $M$ fixed:

$$a = \frac{J^2 M}{G}\,\frac{1}{(M_1 M_2)^2} \quad\Longrightarrow\quad a \propto (M_1 M_2)^{-2}$$

differentiating in time with $\dot M_2 = -\dot M_1$:

$$\frac{\dot a}{a} = -2\left(\frac{\dot M_1}{M_1} + \frac{\dot M_2}{M_2}\right) = 2\,\frac{(-\dot M_1)}{M_1}\left(1 - \frac{M_1}{M_2}\right)$$

star 1 is the donor, so $-\dot M_1 > 0$. the sign of the bracket decides everything:

- **donor more massive** ($M_1 > M_2$): $\dot a < 0$. the orbit shrinks, the lobe shrinks with it and the transfer accelerates.
- **donor less massive** ($M_1 < M_2$): $\dot a > 0$. the orbit widens and the transfer is self-limiting.

the product $M_1 M_2$ is largest when the masses are equal, so the separation passes through a **minimum at $M_1 = M_2$**. with Kepler's third law $P \propto a^{3/2}$, the period follows $P \propto (M_1 M_2)^{-3}$.

real systems also lose mass and angular momentum, through winds, magnetic braking and gravitational radiation, and then the orbit shrinks further than this estimate.

## the Algol paradox

in Algol the less massive star is the more evolved one, a subgiant that fills its lobe, while the more massive star is still on the main sequence. single-star evolution says the opposite, because the more massive star should evolve first.

the answer is mass transfer. the subgiant was the more massive star at birth. it evolved first, filled its lobe, and gave most of its envelope to the companion. the mass ratio has **reversed**. the first fast phase happened while the donor was the more massive star and the orbit was shrinking. what I observe now is the slow second phase, with the donor already the lighter star.

## stable or unstable

what matters is how the donor radius and the lobe radius react to the loss of mass.

- if the star shrinks faster than its lobe, or expands more slowly, the transfer is **stable** and proceeds on the thermal or nuclear timescale of the donor.
- if the lobe shrinks faster than the star, the rate runs away on a dynamical timescale.

stars with deep convective envelopes, like red giants, expand when they lose mass. if such a donor is also the more massive star, the transfer is unstable and the companion cannot accept the gas.

## common envelope

in the unstable case the envelope of the giant engulfs the companion. the companion and the core of the giant spiral toward each other inside the envelope, and the friction deposits orbital energy into the gas. the usual energy balance is

$$\alpha_{\rm CE}\left(\frac{G M_c M_2}{2 a_f} - \frac{G M_1 M_2}{2 a_i}\right) = \frac{G M_1 M_{\rm env}}{\lambda R_{L,1}}$$

with $M_c$ the core mass, $M_{\rm env}$ the envelope mass, $\alpha_{\rm CE}$ the fraction of orbital energy used to unbind the envelope and $\lambda$ a number of order one for the structure of the envelope. the result is either a merger or a very tight binary with a period of hours, with the orbit smaller by a factor of 100 or more.

this is the only known way to bring two compact objects close enough to interact again or to merge within the age of the universe.

## what it produces

- **Algol systems**: semi-detached, mass ratio reversed.
- **cataclysmic variables**: a white dwarf accreting from a low-mass star. novae and dwarf novae.
- **Type Ia supernovae**: a carbon-oxygen white dwarf pushed toward the Chandrasekhar mass by a companion (single degenerate), or the merger of two white dwarfs (double degenerate).
- **X-ray binaries**: a neutron star or black hole accreting. low-mass systems transfer through $L_1$, high-mass systems mostly through the wind of an OB star. the luminosity is $L_{\rm acc} = G M \dot M / R$.
- **millisecond pulsars**: old neutron stars spun up by the angular momentum of the accreted gas.
- **blue stragglers**: main-sequence stars rejuvenated by transfer or merger, which sit above the turnoff of their cluster.
- **stripped stars and Type Ib/c supernovae**: massive stars that lost their hydrogen envelope to a companion.
- **gravitational-wave sources**: double neutron stars and double black holes, brought close by a common envelope phase.

## numbers to remember

- $R_L \approx 0.38\,a$ for equal masses.
- conservative transfer: $a \propto (M_1 M_2)^{-2}$, minimum separation at equal masses.
- more than half of the massive stars exchange mass with a companion during their life.
- common envelope: the orbit shrinks by a factor of $\sim 100$.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Binary star|500](https://commons.wikimedia.org/wiki/Special:FilePath/Best_image_of_Alpha_Centauri_A_and_B.jpg?width=600)
*Lead figure of the Wikipedia article Binary star* ([Commons file page](https://commons.wikimedia.org/wiki/File:Best_image_of_Alpha_Centauri_A_and_B.jpg), ESA/Hubble & NASA, CC BY 4.0, as used on the Wikipedia article [Binary star](https://en.wikipedia.org/wiki/Binary_star))

- **Binary star**. "A binary star or binary star system is a system of two stars that are gravitationally bound to and in orbit around each other. Binary stars are among the most important objects in astrophysics because they allow direct measurement of stellar masses and test theories of stellar evolution." ([Wikipedia](https://en.wikipedia.org/wiki/Binary_star))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Binary star orbits]]
- [[Binary stars in CMD]]
- [[Accretion onto compact objects]]
- [[Supernovae and compact remnants]]
- [[Type Ia supernovae as standard candles]]
- [[Cepheids and supernovae]]
- [[Stellar evolution timescales]]
- [[Solar evolution and final stages]]
- [[Main sequence, giants, supergiants, white dwarfs]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]
