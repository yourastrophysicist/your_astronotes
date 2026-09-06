---
layout: default
title: "Friedmann equations with Lambda"
---

applying the Einstein field equations to the Robertson-Walker metric (see 03_Zettel/Theory/Robertson-Walker metric) with a perfect-fluid stress-energy tensor and a cosmological constant gives two coupled ODEs for $a(t)$. these are the **Friedmann equations**.

---

## the Einstein equations with Λ

$$R_{\mu\nu} - \frac{1}{2} g_{\mu\nu} R - \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}$$

with the perfect-fluid stress-energy
$$T_{\mu\nu} = (\rho + p/c^2) u_\mu u_\nu - p g_{\mu\nu}$$

substituting the FRW metric components and reading off the time-time and space-space pieces:

---

## the two equations

**Friedmann equation** (from the time-time component):
$$\boxed{\,H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k c^2}{a^2} + \frac{\Lambda c^2}{3}\,}$$

**acceleration equation** (from the space-space component):
$$\boxed{\,\frac{\ddot a}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3p}{c^2}\right) + \frac{\Lambda c^2}{3}\,}$$

note: pressure $p$ appears as a *source* of gravity in GR — radiation, with $p = \rho c^2/3$, gravitates with $\rho + 3p/c^2 = 2\rho$, twice the rest-mass-equivalent of dust.

---

## $\Lambda$ as vacuum energy

a cosmological constant $\Lambda$ behaves like a perfect fluid with
$$\rho_V = \frac{\Lambda c^2}{8\pi G}, \qquad p_V = -\rho_V c^2$$

negative pressure! and constant in space and time — the *vacuum* energy density. with $\rho_V$ defined this way, I can absorb the $\Lambda$ term into $\rho$ in the Friedmann equation:
$$H^2 = \frac{8\pi G}{3}(\rho_m + \rho_\gamma + \rho_V) - \frac{k c^2}{a^2}$$

then the universe just contains "matter + radiation + vacuum," all with the same form of Friedmann equation.

the equation-of-state parameter $w = p/(\rho c^2)$:
- non-relativistic matter: $w = 0$ → $\rho \propto a^{-3}$
- radiation: $w = 1/3$ → $\rho \propto a^{-4}$
- cosmological constant: $w = -1$ → $\rho = $ const
- generic dark energy: $w \approx -1$, possibly time-dependent

---

## continuity equation

a third equation, the conservation of the stress-energy tensor $\nabla_\mu T^{\mu\nu} = 0$:
$$\dot\rho + 3 H(\rho + p/c^2) = 0$$

this is the **continuity equation** in cosmology. it follows from the Friedmann + acceleration equations (only two of the three are independent). useful form for a fluid with $w = $ const:
$$\rho \propto a^{-3(1+w)}$$

so:
- matter ($w = 0$): $\rho \propto a^{-3}$
- radiation ($w = 1/3$): $\rho \propto a^{-4}$
- $\Lambda$ ($w = -1$): $\rho = $ const (does not dilute)

---

## density parameters

dividing the Friedmann equation by $H^2$ at the present epoch:
$$1 = \Omega_m + \Omega_\gamma + \Omega_\Lambda + \Omega_K$$

where
$$\Omega_i \equiv \frac{\rho_i}{\rho_{\rm crit}}, \qquad \rho_{\rm crit} = \frac{3 H^2}{8\pi G}, \qquad \Omega_K \equiv -\frac{kc^2}{H^2 a^2}$$

with Planck 2018: $\Omega_m \approx 0.315$, $\Omega_\Lambda \approx 0.685$, $\Omega_K \approx 0.001 \pm 0.002$, $\Omega_\gamma \approx 5 \times 10^{-5}$.

→ see [Density parameters and flatness](../../02_Zettel/Theory/Density parameters and flatness.html) for the full treatment.

---

## H(z) for ΛCDM

the Friedmann equation as a function of redshift, useful for distance integrals:
$$H^2(z) = H_0^2[\Omega_m(1+z)^3 + \Omega_\Lambda + \Omega_K(1+z)^2 + \Omega_\gamma(1+z)^4]$$

setting $\Omega_K = 0$ and dropping the negligible radiation term:
$$H(z) \approx H_0\sqrt{\Omega_m(1+z)^3 + \Omega_\Lambda}$$

at $z \to 0$: $H \to H_0$. at $z \to \infty$: $H \to H_0 \sqrt{\Omega_m}(1+z)^{3/2}$, matter-dominated form. at $z$ such that $\Omega_m(1+z)^3 = \Omega_\Lambda$ ($z \approx 0.7$): the **transition** between matter and Λ domination.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Newtonian Friedmann derivation](../../02_Zettel/Theory/Newtonian Friedmann derivation.html) — the classical version, parallel to this
- 03_Zettel/Theory/Robertson-Walker metric
- [Friedmann models](../../02_Zettel/Theory/Friedmann models.html)
- [Density parameters and flatness](../../02_Zettel/Theory/Density parameters and flatness.html)
- [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.html)
- [Cosmic_inventory_dark_energy](../../02_Zettel/Theory/Cosmic_inventory_dark_energy.html)
- [Baumann_reference](../../02_Zettel/Theory/Baumann_reference.html) — chapter 1.3 has the full GR derivation
