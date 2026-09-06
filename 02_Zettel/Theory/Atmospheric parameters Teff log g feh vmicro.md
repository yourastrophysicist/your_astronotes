---
layout: default
name: Atmospheric parameters Teff log g feh vmicro
description: the four basic numbers that describe a stellar photosphere and define a model atmosphere
---

# atmospheric parameters: Teff, log g, [Fe/H], vmicro

a stellar atmosphere is, to first approximation, a 1D plane-parallel radiative-convective slab characterised by **four numbers**: the effective temperature $T_{\rm eff}$, the surface gravity $\log g$, the metallicity (typically [Fe/H]), and the microturbulent velocity $\xi_t$. these are the "atmospheric parameters". together they define a model atmosphere and any synthetic spectrum computed from it. determining them from observations is the first step in any spectroscopic analysis.

## the four parameters

**effective temperature $T_{\rm eff}$.** the temperature of a blackbody with the same total luminosity and radius as the real star,
$$L = 4\pi R^2 \sigma T_{\rm eff}^4.$$
typical range: 2500 K (late M dwarfs) to 50{,}000+ K (O stars). it sets the shape of the continuum and the populations of atomic levels (via Boltzmann), hence the relative line strengths. see [Spectroscopic determination of Teff](../../02_Zettel/Theory/Spectroscopic determination of Teff.md).

**surface gravity $\log g$.** the local gravitational acceleration at the photosphere,
$$g = \frac{GM}{R^2},$$
expressed in cgs and $\log_{10}$. typical values:
- $\log g \approx 4.4$ for the sun and other dwarfs;
- $\log g \approx 2\text{-}3$ for red giants;
- $\log g \approx 0\text{-}1$ for supergiants;
- $\log g \approx 7\text{-}9$ for white dwarfs (see [White dwarf overview](../../02_Zettel/Theory/White dwarf overview.md)).
$\log g$ controls the photospheric pressure (because hydrostatic equilibrium gives $P \propto g$), and therefore pressure broadening (Stark, van der Waals) and the ionisation balance through the [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md). see [Spectroscopic determination of log g](../../02_Zettel/Theory/Spectroscopic determination of log g.md).

**metallicity [Fe/H].** the abundance of iron, typically used as a proxy for "all metals". defined as
$$[\text{Fe/H}] = \log_{10}\!\frac{(N_{\rm Fe}/N_{\rm H})_*}{(N_{\rm Fe}/N_{\rm H})_\odot},$$
so [Fe/H] $= 0$ is solar, [Fe/H] $= -2$ is one hundredth of solar (a metal-poor halo star), [Fe/H] $= +0.4$ is a metal-rich open cluster. there is also the "12 scale" $\log\varepsilon(X) = \log(N_X/N_H) + 12$, with $\log\varepsilon(\text{Fe})_\odot \approx 7.5$. metallicity sets the strength of all metallic lines and shifts the [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md) main-sequence position. see [Spectroscopic determination of metallicity](../../02_Zettel/Theory/Spectroscopic determination of metallicity.md).

**microturbulent velocity $\xi_t$ (vmicro).** an empirical fudge representing small-scale, sub-resolution velocity fields in the photosphere that broaden lines beyond what thermal motion alone would do. typical values are 0.5-2 km/s for dwarfs, up to 5 km/s for giants and supergiants. it is determined by demanding that strong and weak lines of the same species give the same abundance (see [Microturbulence](../../02_Zettel/Theory/Microturbulence.md)).

## why all four are needed (and coupled)

the parameters are not independent. ionisation balance depends on both $T_{\rm eff}$ and $\log g$ (through Saha). line strengths depend on temperature, abundance, and microturbulence. so spectroscopic analysis is **iterative**: start with photometric estimates, refine $T_{\rm eff}$ and $\log g$ from spectra, fix [Fe/H] and microturbulence, return.

a fifth quantity, the projected rotation $v\sin i$, is often added to the parameter set because it broadens all lines uniformly (see [Stellar rotation v sini](../../02_Zettel/Theory/Stellar rotation v sini.md)).

## typical uncertainties

for late-type stars (G, K), state-of-the-art high-resolution spectroscopy reaches:
- $T_{\rm eff}$: 100-300 K absolute, 10-50 K differential
- $\log g$: 0.1-0.3 dex (strong lines), 0.1-1.0 dex (ionisation balance)
- [Fe/H]: 0.1-0.5 dex absolute, 0.01-0.05 dex differential

uncertainties are larger for hot stars (where line forests are sparser), giants, and metal-poor stars (where lines are weak).

## see also
- [Spectroscopic determination of Teff](../../02_Zettel/Theory/Spectroscopic determination of Teff.md)
- [Spectroscopic determination of log g](../../02_Zettel/Theory/Spectroscopic determination of log g.md)
- [Spectroscopic determination of metallicity](../../02_Zettel/Theory/Spectroscopic determination of metallicity.md)
- [Microturbulence](../../02_Zettel/Theory/Microturbulence.md)
- [Stellar rotation v sini](../../02_Zettel/Theory/Stellar rotation v sini.md)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.md)
- [Stellar spectral types OBAFGKM](../../02_Zettel/Theory/Stellar spectral types OBAFGKM.md)
- [Local thermodynamic equilibrium LTE](../../02_Zettel/Theory/Local thermodynamic equilibrium LTE.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
