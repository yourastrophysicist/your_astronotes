---
layout: default
title: "Molecular clouds"
---

# molecular clouds

up: [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.md) · [Interstellar medium components and gas cycle](../../02_Zettel/Theory/Interstellar medium components and gas cycle.md)

## properties of giant molecular clouds (gmcs)

Giant Molecular Clouds are the densest, coldest phase of the interstellar medium and the exclusive sites of star formation in galaxies:

- **temperature**: $T \sim 10 - 20$ K.
- **density**: $n(\text{H}_2) \sim 10^2 - 10^6 \text{ cm}^{-3}$.
- **mass**: $M \sim 10^4 - 10^6 M_\odot$.
- **size**: $R \sim 10 - 100$ pc.

## tracing molecular gas via co

Molecular hydrogen $\text{H}_2$ has no permanent electric dipole moment because of its homonuclear symmetry. Its lowest quadrupole rotational transition ($J=2 \to 0$) requires excitation energies $\Delta E / k_B \approx 512$ K, remaining unpopulated at GMC temperatures.

Instead, millimeter emission from trace **carbon monoxide ($^{12}\text{CO}$)** is used:
- Rotational transition $J = 1 \to 0$ at $\nu = 115.27$ GHz ($\lambda = 2.6$ mm).
- Dipole moment $\mu = 0.11$ Debye; easily excited by collisions with $\text{H}_2$ at $T \sim 10$ K ($E_{10}/k_B \approx 5.5$ K).

## the x_co conversion factor

Because the $^{12}\text{CO}(1-0)$ line is optically thick ($\tau \gg 1$), its integrated intensity $W_{\rm CO} = \int T_{\rm mb} dv$ measures cloud surface area rather than column density. However, because clouds are virialized entities, integrated CO luminosity scales with total virial mass. The empirical conversion factor is:

$$N(\text{H}_2) = X_{\rm CO} \cdot W_{\rm CO}$$

Standard Milky Way value:
$$X_{\rm CO} \approx 2.0 \times 10^{20} \text{ cm}^{-2} (\text{K km s}^{-1})^{-1}$$
Corresponding mass conversion factor $\alpha_{\rm CO} \approx 4.3 M_\odot (\text{K km s}^{-1} \text{pc}^2)^{-1}$ (including helium). In low-metallicity dwarf galaxies, $X_{\rm CO}$ increases significantly (CO-dark molecular gas).

## larson scaling relations

Larson (1981) established three empirical scaling relations for virialized GMCs:
1. **linewidth-size relation**: $\sigma_v \propto R^{0.5}$ (supersonic turbulence).
2. **density-size relation**: $\langle \rho \rangle \propto R^{-1}$ (constant surface mass density $\Sigma \approx 100 M_\odot \text{ pc}^{-2}$).
3. **virial balance**: $M_{\rm vir} \approx 5 \sigma_v^2 R / G$.

## connections

- star formation law: [Schmidt-Kennicutt law](../../02_Zettel/Theory/Schmidt-Kennicutt law.md)
- ism context: [Interstellar medium components and gas cycle](../../02_Zettel/Theory/Interstellar medium components and gas cycle.md)
