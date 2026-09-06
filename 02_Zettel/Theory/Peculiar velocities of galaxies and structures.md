---
layout: default
title: "Peculiar velocities of galaxies and structures"
---

galaxies don't only follow the Hubble flow; they also have **peculiar velocities** $\vec v_{\rm pec}$ relative to it, driven by gravitational pulls from nearby structure. understanding peculiar velocities is essential at low $z$ + as a cosmological probe.

## the definition

a galaxy's observed redshift contains two contributions:
$$cz_{\rm obs} = H_0\,d + v_{\rm pec, los}$$

with $v_{\rm pec, los}$ = line-of-sight peculiar velocity. positive = moving away (redshift), negative = moving toward (blueshift).

## typical values

- **Local Group**: $v_{\rm pec} \sim 600$ km/s toward the Virgo cluster (Virgo infall) + the Great Attractor.
- **field galaxies**: $\sim 200$ to $400$ km/s.
- **galaxies in clusters**: $\sim 1000$ km/s velocity dispersion within the cluster.

## the impact at low $z$

at $z \lesssim 0.01$ ($d \lesssim 50$ Mpc): $H_0 d \sim$ few hundred km/s, comparable to $v_{\rm pec}$. so the **Hubble distance** $d \approx cz/H_0$ has $\sim 30\%$ scatter from peculiar velocity.

this is why **local distances** to nearby galaxies use Cepheids, TRGB, SBF, Tully-Fisher etc., not Hubble flow.

at $z \gtrsim 0.1$: $H_0 d \gg v_{\rm pec}$, and Hubble distance becomes reliable.

## the dipole in the CMB

the **CMB dipole** (largest anisotropy on the sky, $\Delta T/T \sim 10^{-3}$) is **kinematic**: it's the Doppler signature of the Earth's peculiar motion relative to the CMB rest frame.

Earth's velocity: $v_{\rm CMB} \approx 369$ km/s in the direction of $(\ell, b) \approx (264°, 48°)$ in Galactic coordinates.

decomposing:
- Sun's motion in the Galaxy: $\sim 220$ km/s.
- Galaxy's motion in the Local Group: $\sim 100$ km/s.
- Local Group's motion to Virgo + Great Attractor: $\sim 600$ km/s.

modulo, $v_{\rm CMB} \approx 369$ km/s. all from local gravity.

## as a cosmological probe

### the velocity field
peculiar velocities are sourced by **gravitational pulls** from nearby mass concentrations:
$$\vec v_{\rm pec}(\vec r) \propto \vec\nabla \Phi(\vec r)$$
with $\Phi$ the cosmological potential. so measuring $\vec v_{\rm pec}$ across the local universe maps the **mass distribution** $\rho(\vec r)$.

surveys: **Cosmicflows-3**, **6dFGS**, **2MTF**: $v_{\rm pec}$ for thousands of nearby galaxies. used to map structures up to $\sim 200$ Mpc.

### bulk flows
average $v_{\rm pec}$ over a sphere of radius $R$. predicted by $\Lambda$CDM at amplitude $\sim 100$ km/s for $R = 100\,h^{-1}$ Mpc. early measurements (Watkins et al.) hinted at a "**dark flow**" of $\sim 1000$ km/s, controversial. modern data consistent with $\Lambda$CDM.

### redshift-space distortions (RSD)
in galaxy clustering surveys, peculiar velocities along the line of sight cause **anisotropies** in the apparent galaxy distribution:
- "**fingers of God**": elongated radial structures at cluster centres (high velocity dispersion).
- "**Kaiser squashing**": flattened on large scales due to coherent infall.

these anisotropies probe $f\sigma_8$ where $f \approx \Omega_m^{0.55}$ is the linear growth factor. constrain dark energy + modified gravity.

### the Tully-Fisher and FP residuals
at fixed redshift, peculiar velocities show up as residuals in distance-redshift relations. comparing TF or FP distances + redshifts gives a $v_{\rm pec}$ map.

## see also

- [Hubble law](../../02_Zettel/Theory/Hubble law.html)
- [Hubble flow distances](../../02_Zettel/Theory/Hubble flow distances.html)
- [Cosmological redshift](../../02_Zettel/Theory/Cosmological redshift.html)
- [Comoving vs proper coordinates](../../02_Zettel/Theory/Comoving vs proper coordinates.html)
- [Cosmic_inventory_dark_matter](../../02_Zettel/Theory/Cosmic_inventory_dark_matter.html)
- [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.html)
- [Fundamental plane of ellipticals](../../02_Zettel/Theory/Fundamental plane of ellipticals.html)
- [Galaxy main sequence of star formation](../../02_Zettel/Theory/Galaxy main sequence of star formation.html)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.html)
