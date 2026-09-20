---
layout: "default"
title: "Redshift distribution of flux-limited samples"
---
# redshift distribution of flux-limited samples

up: [[Pablo_02_Statistical_properties_of_galaxies]]

## the question

if i build a sample by saying "give me every galaxy in this footprint with $m < m_{\text{lim}}$", what is the resulting $N(z)$?

intuitively: a faint magnitude limit sees deeper. so $\langle z \rangle$ should grow with $m_{\text{lim}}$. the quantitative answer convolves the luminosity function (LF) with the cosmological volume element.

## the integral

$$\frac{dN}{dz}(m_{\text{lim}}) = \frac{dV}{dz} \int_{L_{\min}(z, m_{\text{lim}})}^{\infty} \phi(L, z)\, dL$$

where $L_{\min}(z, m_{\text{lim}})$ is the luminosity such that a galaxy at redshift $z$ has apparent magnitude exactly $m_{\text{lim}}$. that depends on the [[Luminosity distance]] and the [[K-correction]]:

$$m_{\text{lim}} = M + 5\log_{10}(d_L / 10\,\text{pc}) + K(z)$$

## the brinchmann 2008 figure

Brinchmann 2008 plots $N(z)$ for SDSS galaxies in different magnitude slices. the curve has a clear *peak* at low $z$ that shifts redder with magnitude. by $r \sim 22$, the peak is at $z \sim 0.5$. by $r \sim 25$ (HDF depths), the median shifts to $z \sim 1$.

the peak is the convolution of two competing factors:

- **rising** $dV/dz$ (more volume per redshift bin until the angular diameter turnover at $z \sim 1.5$)
- **falling** number of galaxies above $L_{\min}$ as $L_{\min}$ rises with $z$

the peak is the place these two curves cross.

## why this matters

every survey analysis that quotes $\rho_{SFR}(z)$, $\phi(M_*, z)$, or any volume-limited quantity has to **invert this convolution**. the LF is the unknown; the observable is the $(m, z)$ density of sources. you need either:

- a complete spectroscopic redshift for each source (expensive, doable only for $\sim 10^5$ to $10^6$ sources), or
- [[Photometric redshifts]] (cheap, doable for $\sim 10^8$ sources but with biases).

and both are subject to [[Malmquist bias]] at the sample edge.

## connections

- biases: [[Malmquist bias]], [[Photo-z biases and catastrophic outliers]]
- redshift estimators: [[Photometric redshifts]]
- the LF that drives this: [[Luminosity function definition]], [[Schechter function]]
- how to infer LF in the presence of a flux limit: [[1Vmax estimator]]

## key references

- Brinchmann et al. 2008
- Pozzetti et al. 2010 (zCOSMOS $N(z)$)



## Linked References

- [[Malmquist bias]]
- [[Photo-z biases and catastrophic outliers]]
- [[Observational_Cosmology_MOC]]


