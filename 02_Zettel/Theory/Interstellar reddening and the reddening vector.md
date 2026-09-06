---
layout: default
name: Interstellar reddening and the reddening vector
description: how dust along the line of sight shifts stars in the CMD along a vector with slope set by the total-to-selective extinction ratio
---

reddening is what happens when starlight passes through interstellar dust on its way to us. dust grains scatter and absorb blue photons more efficiently than red ones, so the star ends up looking both fainter (extincted) and redder (reddened) than it actually is. the colour excess is defined as

$$E(B-V) = (B-V)_{\text{observed}} - (B-V)_{\text{intrinsic}} = A_B - A_V$$

so the colour excess is just the difference of extinctions in two bands. positive $E(B-V)$ means more attenuation in $B$ than in $V$, which is exactly what dust does in the optical.

the total-to-selective extinction ratio is

$$R_V = \frac{A_V}{E(B-V)}$$

and on a colour-magnitude diagram (see [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md)), this ratio is the slope of the **reddening vector**. if you plot $V$ vs $(B-V)$, an unreddened star at intrinsic position $(V_0, (B-V)_0)$ shifts to

$$V = V_0 + A_V, \quad (B-V) = (B-V)_0 + E(B-V)$$

so the displacement vector has horizontal component $\Delta(B-V) = E(B-V)$ and vertical component $\Delta V = A_V = R_V \cdot E(B-V)$. the slope on the CMD is therefore $R_V$ itself. typical $R_V \approx 3.1$ in diffuse ISM means a unit colour shift to the red corresponds to about 3 magnitudes of dimming in $V$.

practically, this means a reddened cluster CMD looks just like an unreddened one but slid down and to the right along the reddening vector. if you know the direction of that vector you can fit a fiducial sequence and slide it back to zero reddening, recovering the intrinsic CMD. this is the standard de-reddening procedure for galactic globular clusters and open clusters.

a few subtleties:

- differential reddening: across the face of a cluster, $E(B-V)$ can vary spatially, smearing the CMD perpendicular to the reddening vector. correcting this star-by-star (using nearby reference stars or extinction maps) sharpens the CMD and recovers narrow sub-giant branches.
- the reddening vector direction depends on the photometric system. in $(V, B-V)$ the slope is $R_V \approx 3.1$, but in $(V, V-I)$ the slope changes because $A_V/E(V-I) \approx 2.45$ for the same dust law.
- reddening is not the same as extinction alone. extinction is the total flux loss; reddening is the differential effect across wavelengths. you can have heavy extinction with little reddening if the dust law is grey, but in the standard ISM both go together.

reddening is a key systematic in distance and age determinations. the [Distance modulus](../../02_Zettel/Theory/Distance modulus.md) becomes the apparent distance modulus $(m-M)_V = (m-M)_0 + A_V$, and getting $A_V$ wrong propagates directly into the inferred distance and any age inferred from main-sequence-turnoff fitting (see [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.md)). for galactic globular clusters in the bulge, where reddening can be $E(B-V) \gtrsim 1$ and highly variable, this is one of the dominant error sources.

see also [Interstellar absorption](../../02_Zettel/Theory/Interstellar absorption.md), [Extinction law and Rv](../../02_Zettel/Theory/Extinction law and Rv.md), [HR diagram](../../02_Zettel/Theory/HR diagram.md), [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
