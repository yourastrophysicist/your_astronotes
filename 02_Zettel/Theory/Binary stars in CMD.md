---
layout: default
name: Binary stars in CMD
description: how unresolved binaries shift stars above the main sequence by up to 0.75 mag in cluster CMDs
---

unresolved binaries are one of the most useful "contaminants" of a cluster [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html). when two stars share a single PSF in our images, we measure the combined flux and assign it to a single point in the [HR diagram](../../02_Zettel/Theory/HR diagram.html). the result is a systematic shift upward (brighter) and slightly redward, depending on the mass ratio $q = M_2/M_1$.

the cleanest case is the equal-mass binary, $q = 1$. two identical main-sequence stars contribute the same flux, so the total is exactly twice the single-star flux. in magnitudes,

$$\Delta m = -2.5 \log_{10}(2) \approx -0.753 \text{ mag}.$$

this is the famous "0.75 mag binary ridge" sitting parallel to and above the Main sequence in a high-precision cluster CMD. since both components have nearly identical colours, the colour shift for $q = 1$ is essentially zero, and the binary lies directly above its single-star counterpart at the same colour.

for partial-mass-ratio binaries ($0 < q < 1$), the displacement is smaller in magnitude and acquires a colour component, because the secondary is cooler and redder. these intermediate cases populate the strip between the single-star MS and the equal-mass binary ridge, forming a continuum rather than a discrete second sequence. the density of points across this strip carries information on the Binary mass ratio distribution.

if we model the magnitude offset for an unresolved pair of MS stars,

$$m_{\text{tot}} = -2.5 \log_{10}\!\left(10^{-0.4 m_1} + 10^{-0.4 m_2}\right),$$

we can build synthetic CMDs by sampling pairs from an assumed [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.html) (often the [IMF](../../02_Zettel/Theory/Salpeter Kroupa Chabrier IMFs.html)) plus a $q$ distribution. the comparison to observations gives the [binary fraction](../../02_Zettel/Theory/Cluster binary fraction methods.html) $f_b$.

the same trick works for higher multiples. triples and quadruples shift even further above the MS, but they are rare and dynamically unstable in [Globular Clusters](../../02_Zettel/Theory/Globular Clusters.html). most "binary ridge" stars are genuine bound pairs, although a small fraction can be chance superpositions in dense cluster fields (mitigated with HST proper motions and high-resolution imaging).

## binary fraction measurements

- **Milone et al. 2012, A&A 540, A16**: established the standard photometric method to estimate the fraction of binaries in stellar populations by fitting synthetic CMDs with varying binary fractions and mass ratio distributions. they applied this to 59 Galactic GCs, finding binary fractions ranging from a few percent in dense cores to $\sim 50\%$ in sparse environments.
- **NGC 6791 binary fraction (Bedin et al. 2008, 2009)**: the metal-rich open cluster NGC 6791 is noted for hosting a exceptionally large fraction of MS+MS binaries ($f_{\rm bin} \approx 0.32 \pm 0.03$). unresolved binaries are also responsible for the double-peaked luminosity function of its white dwarf cooling sequence (34% WD-WD binaries, Bedin et al. 2009), illustrating how binary fractions affect all evolutionary phases on the CMD.

## reference papers

- **Milone et al. 2012, A&A 540, A16** — binary fractions in 59 Galactic GCs.
- **Bedin et al. 2008, 2009** — high binary fraction in NGC 6791 and its impact on the WDCS.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
- [Cluster binary fraction methods](../../02_Zettel/Theory/Cluster binary fraction methods.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [Binary star orbits](../../02_Zettel/Theory/interf/Binary star orbits.html)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.html)
- [White dwarf cooling sequence on the CMD](../../02_Zettel/Theory/White dwarf cooling sequence on the CMD.html)

