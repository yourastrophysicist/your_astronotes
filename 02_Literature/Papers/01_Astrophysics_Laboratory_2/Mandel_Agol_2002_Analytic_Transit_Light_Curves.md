---
layout: "default"
title: "Mandel & Agol (2002) — Analytic Light Curves for Planetary Transit Searches"
---
## Metadata
- **Authors**: Kaisey Mandel, Eric Agol
- **Year**: 2002
- **arXiv ID**: [arXiv:astro-ph/0210099](https://arxiv.org/abs/astro-ph/0210099)
- **ADS Bibcode**: `2002ApJ...580L.171M`
- **Journal**: *ApJ*, 580, L171
- **Sub-field**: astro-ph.EP
- **Key Observatory / Code**: HST photometry of HD 209458; formulae now implemented in `batman`, `PyTransit`, `juliet`

---

## Executive Summary
Mandel & Agol derive closed-form analytic expressions for the fractional flux decrement of a star during a planetary transit, for both a uniform stellar disk and a disk with linear or quadratic limb darkening. Prior to this work, transit light curves were computed by brute-force numerical integration of the occulted stellar surface, which was too slow for the least-squares and (subsequently) MCMC fitting of large transit datasets. The paper reduces the problem to evaluating complete elliptic integrals of the first, second, and third kind, giving an exact, computationally cheap light curve model. They validate the formalism against HST photometry of HD 209458b, recovering $R_p/R_* = 0.1207 \pm 0.0003$.

---

## Key Equations & Theoretical Framework
Define the projected sky-plane separation between planet and star center in units of the stellar radius, $z(t) = d(t)/R_*$, and the radius ratio $p = R_p/R_*$. Three geometric regimes exist:
- **No overlap**: $z \geq 1+p$ — flux unocculted, $F = 1$.
- **Partial overlap (ingress/egress)**: $|1-p| < z < 1+p$.
- **Full occultation of stellar disk by the planetary silhouette** (only possible for $p \geq 1$) or **complete immersion** ($z \leq 1-p$, planet fully inside stellar disk for $p<1$).

For a **uniform stellar disk**, the occulted area fraction is obtained purely from circle-circle intersection geometry:
$$\kappa_0 = \cos^{-1}\!\left(\frac{p^2+z^2-1}{2pz}\right), \qquad \kappa_1 = \cos^{-1}\!\left(\frac{1-p^2+z^2}{2z}\right)$$
$$\lambda_e(p,z) = \frac{1}{\pi}\left[p^2\kappa_0 + \kappa_1 - \frac{1}{2}\sqrt{4z^2-(1+z^2-p^2)^2}\right], \qquad F_{\mathrm{uniform}}(z) = 1-\lambda_e(p,z)$$
where:
- $\kappa_0, \kappa_1$ are the half-angles subtended by the chord of intersection as seen from the planet and star centers, respectively
- the square-root term is twice the area of the kite formed by the two circle centers and the two intersection points

For a **quadratically limb-darkened disk**, $I(\mu)/I(1) = 1 - u_1(1-\mu) - u_2(1-\mu)^2$ with $\mu=\cos\theta=\sqrt{1-r^2}$ ($r$ the normalized radial coordinate on the stellar disk), the occulted flux requires integrating $I(\mu)$ over the lens-shaped overlap region. Using Green's theorem to convert the area integral into a line integral around the overlap boundary, Mandel & Agol show the result reduces to two auxiliary functions $\lambda_d(p,z)$ and $\eta_d(p,z)$, expressible in closed form via the complete elliptic integrals
$$\mathcal{K}(k) = \int_0^{\pi/2} \frac{d\theta}{\sqrt{1-k^2\sin^2\theta}}, \quad \mathcal{E}(k) = \int_0^{\pi/2}\sqrt{1-k^2\sin^2\theta}\,d\theta, \quad \Pi(n,k) = \int_0^{\pi/2}\frac{d\theta}{(1-n\sin^2\theta)\sqrt{1-k^2\sin^2\theta}}$$
with elliptic modulus $k=k(p,z)$ and characteristic $n=n(p,z)$ set by the transit geometry. The normalized flux is then
$$F(z) = 1 - \left[\frac{1-u_1-2u_2}{1-u_1/3-u_2/6}\right]\lambda_e(p,z) - \left[\frac{u_1+2u_2}{1-u_1/3-u_2/6}\right]\lambda_d(p,z) - \left[\frac{u_2}{1-u_1/3-u_2/6}\right]\eta_d(p,z)$$
where the normalization constant $1-u_1/3-u_2/6$ is the disk-integrated mean intensity, ensuring $F\to 1$ as $z\to\infty$.

**Asymptotic checks**: as $p\to 0$ the flux decrement reduces to $\Delta F \to p^2 I(\mu_0)/\langle I\rangle$, the instantaneous surface-brightness sampled at the transit chord — the point-source limit; for $u_1=u_2=0$, $\lambda_d, \eta_d \to 0$ and $F$ collapses exactly to the uniform-disk expression $F_{\mathrm{uniform}}$.

---

## Observational Data & Methodology
- **Target / Sample**: HD 209458, the first spectroscopically confirmed transiting hot Jupiter (HD 209458b).
- **Instrument Setup**: HST STIS photometry from the discovery transit light curves of Brown et al. (2001), sub-mmag precision.
- **Reduction & Detrending Pipeline**: The analytic model is fit directly to the reduced HST flux time series via $\chi^2$ minimization; no numerical disk integration is required, allowing rapid exploration of $(R_p/R_*, a/R_*, i, u_1, u_2)$ parameter space.

---

## Critical Findings & Scientific Impact
1. Exact analytic recovery of $R_p/R_* = 0.1207 \pm 0.0003$ for HD 209458b, consistent with prior numerical fits but at a fraction of the computational cost.
2. The elliptic-integral formalism is exact for quadratic and linear limb darkening and is the direct ancestor of essentially every modern transit-fitting code (`batman`, `PyTransit`, `ellc`, `juliet`).
3. Open problem flagged by the authors: extension to higher-order (non-linear, 4-parameter) limb darkening laws requires either numerical quadrature or further specialized elliptic-integral bookkeeping — later addressed by Giménez (2006) and the numerical/semi-analytic approaches used in `batman`.

---

## Vault Cross-References
- Core Theory: [[Exoplanet Transit Geometry and Impact Parameter]], [[Transit Depth and Ingress-Egress Timescales]], [[Stellar Limb Darkening Laws]]
- Computational: [[Transit Modeling with batman]]
- Map of Content: [[Astrophysics_Laboratory_2_MOC]], [[Exoplanetary_Astrophysics_MOC]]
