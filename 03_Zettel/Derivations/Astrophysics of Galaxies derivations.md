---
layout: default
title: "Astrophysics of Galaxies derivations"
---
## 1. Derivation I - Schechter Luminosity Function Integrals

### Textbook Citation & Source
- Primary Literature - Schechter, P. 1976, ApJ, 203, 297 and Blanton et al. 2003, ApJ, 592, 819.
- Textbooks - Mo, van den Bosch & White, *Galaxy Formation and Evolution*, Section 3.1, pages 105-115 and Binney & Merrifield, *Galactic Astronomy*, Section 4.1, pages 150-165.

### Step 1 - Mathematical Definition of the Object
The differential luminosity function $\Phi(L)dL$ defines the number density of galaxies per comoving unit volume with luminosities in the interval $[L, L + dL]$:
$$\Phi(L) dL = \phi^* \left(\frac{L}{L^*}\right)^\alpha \exp\left(-\frac{L}{L^*}\right) \frac{dL}{L^*}$$
Here $\phi^*$ is the normalization (units of $\mathrm{Mpc}^{-3}$), $L^*$ is the characteristic transition luminosity, and $\alpha$ is the faint-end logarithmic slope.

### Step 2 - Total Number Density Integral and Divergence Mechanics
We calculate the total space density of galaxies $n_{\rm gal}$:
$$n_{\rm gal} = \int_0^\infty \Phi(L) dL = \phi^* \int_0^\infty \left(\frac{L}{L^*}\right)^\alpha \exp\left(-\frac{L}{L^*}\right) \frac{dL}{L^*}$$

- **Change of Variables**:
  Define the dimensionless variable $x \equiv L / L^*$.
  The differential element is $dx = dL / L^*$.
  The limits of integration remain $[0, \infty)$.
- **Integrand Evaluation**:
  $$n_{\rm gal} = \phi^* \int_0^\infty x^\alpha e^{-x} dx$$
- **Connection to the Euler Gamma Function**:
  The Euler Gamma function is defined for $z > 0$ as $\Gamma(z) \equiv \int_0^\infty t^{z-1} e^{-t} dt$.
  Here the exponent of $x$ is $\alpha = (\alpha + 1) - 1$.
  Therefore:
  $$\boxed{ n_{\rm gal} = \phi^* \, \Gamma(\alpha + 1) }$$
- **Divergence analysis**:
  Because observed galaxy surveys consistently find $\alpha \approx -1.1$ to $-1.3$ (e.g. Blanton et al. 2003 find $\alpha = -1.20 \pm 0.03$ in the SDSS $r$-band), we have $\alpha + 1 < 0$.
  The Gamma function $\Gamma(z)$ has simple poles at non-positive integers ($z = 0, -1, -2, \dots$) and diverges as $x \to 0$ for $\alpha \le -1$:
  $$\int_0^\epsilon x^\alpha dx \approx \left[ \frac{x^{\alpha+1}}{\alpha+1} \right]_0^\epsilon \to \infty$$
  **Physical Conclusion**: The total number of galaxies is mathematically infinite in an untruncated Schechter model. In real astrophysics, star formation is suppressed below a minimum halo mass $M_{\rm min} \sim 10^8\,\Msun$ by reionization and supernova feedback.

### Step 3 - Total Luminosity Density Integral
Now compute the total luminosity emitted per unit comoving volume, $j$:
$$j = \int_0^\infty L \, \Phi(L) dL = \phi^* L^* \int_0^\infty \left(\frac{L}{L^*}\right)^{\alpha+1} \exp\left(-\frac{L}{L^*}\right) \frac{dL}{L^*}$$

- **Evaluation**:
  Using $x \equiv L/L^*$:
  $$j = \phi^* L^* \int_0^\infty x^{\alpha+1} e^{-x} dx = \phi^* L^* \int_0^\infty x^{(\alpha+2)-1} e^{-x} dx$$
  $$\boxed{ j = \phi^* L^* \, \Gamma(\alpha + 2) }$$
- **Convergence**:
  For convergence as $x \to 0$, we require $\alpha + 2 > 0 \implies \alpha > -2$.
  Since observed $\alpha \approx -1.2 > -2$, **the total luminosity density converges strictly**. Faint galaxies dominate the total numbers, but galaxies near $L^*$ dominate the cosmic energy budget.

### Step 4 - Transformation to Absolute Magnitude Form
Recall the Pogson relation: $M - M^* = -2.5 \log_{10}(L / L^*)$.
Invert: $L / L^* = 10^{-0.4(M - M^*)}$.
Compute the differential:
$$\frac{dL}{L^*} = \frac{d}{dM} \left[ 10^{-0.4(M - M^*)} \right] dM = -0.4 \ln(10) \, 10^{-0.4(M - M^*)} dM$$
Substitute into $\Phi(L)dL$ (taking absolute value for distribution densities):
$$\boxed{ \Phi(M) dM = 0.4\ln(10) \, \phi^* \, 10^{-0.4(\alpha+1)(M - M^*)} \exp\left[ -10^{-0.4(M - M^*)} \right] dM }$$

---

## 2. Derivation II - Sersic Surface Brightness Profile and Luminosity

### Textbook Citation & Source
- Textbooks - Mo, van den Bosch & White, Section 2.2, pages 68-75 and Binney & Merrifield, Chapter 4.

### Step 1 - Analytical Formulation
The Sersic (1968) profile describes the radial surface brightness distribution:
$$I(R) = I_e \exp\left\{ -b_n \left[ \left(\frac{R}{R_e}\right)^{1/n} - 1 \right] \right\}$$
where $R_e$ is the effective (half-light) radius, $I_e \equiv I(R_e)$ is the intensity at $R_e$, $n$ is the Sersic index, and $b_n$ is a coupling constant chosen such that $R_e$ encloses exactly half the total light.
For $n = 1$, $b_1 \approx 1.678$ (pure exponential disk).
For $n = 4$, $b_4 \approx 7.669$ (de Vaucouleurs profile for ellipticals and classical bulges).

### Step 2 - Exact Integration of Total Luminosity
The total luminosity $L_{\rm tot}$ is obtained by integrating over concentric circular annuli:
$$L_{\rm tot} = \int_0^\infty 2\pi R \, I(R) \, dR = 2\pi I_e e^{b_n} \int_0^\infty R \exp\left[ -b_n \left(\frac{R}{R_e}\right)^{1/n} \right] dR$$

- **Change of Variable**:
  Let $u \equiv b_n \left(\frac{R}{R_e}\right)^{1/n}$.
  Then $\frac{R}{R_e} = \left(\frac{u}{b_n}\right)^n \implies R = R_e b_n^{-n} u^n$.
  The differential is:
  $$dR = n R_e b_n^{-n} u^{n-1} du$$
- **Substitute into the Integral**:
  $$R \, dR = \left( R_e b_n^{-n} u^n \right) \left( n R_e b_n^{-n} u^{n-1} du \right) = n R_e^2 b_n^{-2n} u^{2n-1} du$$
- **Integration**:
  $$L_{\rm tot} = 2\pi I_e e^{b_n} \int_0^\infty \left( n R_e^2 b_n^{-2n} u^{2n-1} \right) e^{-u} du = 2\pi n R_e^2 I_e \frac{e^{b_n}}{b_n^{2n}} \int_0^\infty u^{(2n)-1} e^{-u} du$$
  Recognize the integral as $\Gamma(2n)$:
  $$\boxed{ L_{\rm tot} = \frac{2\pi n \, e^{b_n}}{b_n^{2n}} \, I_e R_e^2 \, \Gamma(2n) }$$

### Step 3 - Half-Light Condition for $b_n$
The luminosity within radius $R$ is given by the incomplete gamma function:
$$L(R) = \frac{2\pi n \, e^{b_n}}{b_n^{2n}} I_e R_e^2 \, \gamma\left(2n, \, b_n (R/R_e)^{1/n}\right)$$
Setting $L(R_e) = \frac{1}{2} L_{\rm tot}$ requires:
$$\gamma(2n, b_n) = \frac{1}{2} \Gamma(2n)$$
This transcendental equation determines $b_n$ as a function of $n$, accurately approximated by $b_n \approx 2n - \frac{1}{3} + \frac{4}{405n}$ for $n \ge 0.5$.

---

## 3. Derivation III - The Spherical Jeans Equation and Mass-Anisotropy Degeneracy

### Textbook Citation & Source
- Textbooks - Binney & Tremaine, *Galactic Dynamics*, Section 4.2 and Mo, van den Bosch & White, Section 11.1, pages 490-505.

### Step 1 - From the Collisionless Boltzmann Equation
For a collisionless steady-state spherical stellar system with distribution function $f(r, v_r, v_\theta, v_\phi)$, integrating $v_r \times \text{CBE}$ over all velocities yields the radial momentum balance:
$$\frac{d}{dr}\left(\nu \langle v_r^2 \rangle\right) + \frac{2\nu}{r}\langle v_r^2 \rangle - \frac{\nu}{r}\left(\langle v_\theta^2 \rangle + \langle v_\phi^2 \rangle\right) = - \nu \frac{d\Phi}{dr}$$
where $\nu(r)$ is the 3D stellar tracer number density and $\Phi(r)$ is the gravitational potential.

### Step 2 - Introducing Velocity Anisotropy $\beta(r)$
In a spherical system with no net rotation, $\langle v_r \rangle = \langle v_\theta \rangle = \langle v_\phi \rangle = 0$, so $\langle v_r^2 \rangle = \sigma_r^2$ and $\langle v_\theta^2 \rangle = \langle v_\phi^2 \rangle = \sigma_\theta^2 = \sigma_t^2/2$.
Define Binney's anisotropy parameter:
$$\beta(r) \equiv 1 - \frac{\sigma_\theta^2(r)}{\sigma_r^2(r)}$$
- $\beta = 0$: isotropic velocity dispersion ($\sigma_r = \sigma_\theta$).
- $\beta = 1$: purely radial orbits ($\sigma_\theta = 0$).
- $\beta \to -\infty$: purely circular / tangential orbits ($\sigma_r = 0$).

Rewrite the velocity terms:
$$\frac{2\nu}{r}\sigma_r^2 - \frac{\nu}{r}(2\sigma_\theta^2) = \frac{2\nu\sigma_r^2}{r}\left(1 - \frac{\sigma_\theta^2}{\sigma_r^2}\right) = \frac{2\beta(r)\nu\sigma_r^2}{r}$$

The radial Jeans equation becomes:
$$\frac{d(\nu \sigma_r^2)}{dr} + \frac{2\beta(r)}{r} \nu \sigma_r^2 = - \nu \frac{d\Phi}{dr}$$

### Step 3 - Solving for Enclosed Mass $M(r)$
Using Newton's gravity $\frac{d\Phi}{dr} = \frac{G M(r)}{r^2}$:
$$G M(r) = - \frac{r^2}{\nu} \left[ \frac{d(\nu \sigma_r^2)}{dr} + \frac{2\beta}{r}\nu\sigma_r^2 \right]$$
Expand the derivative via logarithmic derivatives:
$$\frac{1}{\nu}\frac{d(\nu\sigma_r^2)}{dr} = \frac{\sigma_r^2}{\nu}\frac{d\nu}{dr} + \frac{d\sigma_r^2}{dr} = \frac{\sigma_r^2}{r}\left[ \frac{d\ln\nu}{d\ln r} + \frac{d\ln\sigma_r^2}{d\ln r} \right]$$
Substitute back:
$$\boxed{ M(r) = - \frac{r \sigma_r^2(r)}{G} \left[ \frac{d\ln\nu}{d\ln r} + \frac{d\ln\sigma_r^2}{d\ln r} + 2\beta(r) \right] }$$

### Step 4 - The Mass-Anisotropy Degeneracy Explained
The observer does not measure 3D $\sigma_r(r)$ or 3D $\nu(r)$ directly. Only projected surface brightness $I(R)$ and line-of-sight velocity dispersion $\sigma_{\rm LOS}(R)$ are accessible:
$$I(R) \sigma_{\rm LOS}^2(R) = 2 \int_R^\infty \left( 1 - \beta \frac{R^2}{r^2} \right) \frac{\nu(r) \sigma_r^2(r) \, r}{\sqrt{r^2 - R^2}} \, dr$$
Because both $M(r)$ and $\beta(r)$ enter simultaneously, a rising $\sigma_{\rm LOS}(R)$ in a galactic nucleus can be explained either by:
1. A central black hole ($M_{\rm BH} > 0$) with isotropic orbits ($\beta = 0$), or
2. No black hole ($M_{\rm BH} = 0$) with radially anisotropic orbits ($\beta > 0$).
To break this degeneracy, one must measure higher-order Gauss-Hermite velocity moments ($h_3, h_4$) with 2D IFU spectroscopy (e.g. VLT/SINFONI JAM modeling, Cappellari 2008).

---

## 4. Derivation IV - Scaling Relations, Tully-Fisher and Fundamental Plane

### Textbook Citation & Source
- Textbooks - Mo, van den Bosch & White, Chapter 10, pages 440-455 and Binney & Merrifield, Chapter 6.

### Step 1 - Tully-Fisher Relation for Spiral Disks
Consider a rotationally supported disk galaxy in centrifugal equilibrium:
$$\frac{v_c^2}{R} = \frac{G M(R)}{R^2} \implies v_c^2 \approx \frac{G M}{R}$$
1. Relate total mass to total luminosity using mass-to-light ratio $\Upsilon \equiv M/L$:
   $$M = \Upsilon L$$
2. Relate disk scale length $R_d$ to luminosity using mean surface brightness $I_0$:
   $$L = 2\pi I_0 R_d^2 \implies R_d \propto \left(\frac{L}{I_0}\right)^{1/2}$$
3. Substitute mass and radius into the centrifugal equilibrium equation:
   $$v_c^2 \propto \frac{G (\Upsilon L)}{(L / I_0)^{1/2}} = G \, \Upsilon \, I_0^{1/2} \, L^{1/2}$$
4. Square both sides to isolate luminosity $L$:
   $$v_c^4 \propto G^2 \Upsilon^2 I_0 L \implies \boxed{ L \propto \frac{v_c^4}{G^2 \, \Upsilon^2 \, I_0} }$$
If central surface brightness $I_0$ is approximately constant across disks (Freeman's Law, $I_0 \approx 21.65\,\mathrm{mag\,arcsec}^{-2}$) and $\Upsilon$ is constant, we recover $L \propto v_c^4$.

### Step 2 - Virial Theorem and the Fundamental Plane for Ellipticals
Elliptical galaxies are pressure-supported systems governed by the scalar virial theorem:
$$2K + U = 0$$
where kinetic energy $K = \frac{1}{2} M \langle v^2 \rangle = \frac{3}{2} M \sigma^2$ (for isotropic velocity dispersion $\sigma$), and potential energy $U = - c_V \frac{G M^2}{R_e}$ (with structure factor $c_V$):
$$\sigma^2 = \frac{c_V}{3} \frac{G M}{R_e} \implies M = \frac{c_2 R_e \sigma^2}{G}$$
Relate mass to luminosity $L$ via mass-to-light ratio $\Upsilon \equiv M/L$, and relate luminosity to mean surface brightness $\langle I \rangle_e \equiv L / (2\pi R_e^2)$:
$$L = 2\pi R_e^2 \langle I \rangle_e \implies M = \Upsilon \left( 2\pi R_e^2 \langle I \rangle_e \right)$$
Equate the two mass expressions:
$$\Upsilon \left( 2\pi R_e^2 \langle I \rangle_e \right) = \frac{c_2 R_e \sigma^2}{G}$$
Divide through by $R_e$:
$$2\pi \Upsilon R_e \langle I \rangle_e = \frac{c_2 \sigma^2}{G}$$
Solve explicitly for $R_e$:
$$\boxed{ R_e = \frac{c_2}{2\pi G} \, \sigma^2 \, \langle I \rangle_e^{-1} \, \Upsilon^{-1} }$$
Taking the logarithm yields the **Virial Fundamental Plane**:
$$\log R_e = 2\log\sigma - \log\langle I \rangle_e - \log\Upsilon + \text{const}$$
Comparing this to the empirical Fundamental Plane ($\log R_e = a\log\sigma + b\log\langle I \rangle_e + c$ with $a \approx 1.24$ and $b \approx -0.82$):
The deviation ($a \ne 2, b \ne -1$) is called the **tilt of the Fundamental Plane**, caused primarily by a systematic scaling of stellar population mass-to-light ratio with galaxy mass: $\Upsilon \propto M^{0.2}$.

---

## 5. Derivation V - Reverberation Mapping and Black Hole Mass

### Textbook Citation & Source
- Primary Literature - Blandford & McKee 1982 and Peterson et al. 2004, ApJ, 613, 682 and Bentz et al. 2009, ApJ, 697, 160.

### Step 1 - Isodelay Paraboloid Geometry
Consider an ionizing continuum source at the origin and an emission-line cloud at spherical coordinates $(r, \theta)$.
The path difference between the light arriving directly from the source and light scattered/reprocessed by the cloud toward an observer at distance $D \gg r$ along the line of sight:
$$\Delta d = r - r\cos(\pi - \theta) = r(1 + \cos\theta)$$
The time delay $\tau$ is:
$$\tau = \frac{r(1 + \cos\theta)}{c} \implies \boxed{ r(\theta) = \frac{c\tau}{1 + \cos\theta} }$$
This is the equation of a **paraboloid** with its focus at the continuum source and opening toward the observer.

### Step 2 - Radius-Luminosity Scaling
In photoionization equilibrium, the ionization parameter $U$ is:
$$U = \frac{Q(H)}{4\pi r^2 n_e c} \propto \frac{L_{\rm ion}}{n_e r^2}$$
Because broad-line regions across all AGN share remarkably similar spectral line ratios, $U$ and the local gas density $n_e$ must be nearly invariant across different AGN:
$$\frac{L}{R_{\rm BLR}^2} \approx \text{constant} \implies \boxed{ R_{\rm BLR} \propto L^{1/2} }$$
Empirically confirmed by Bentz et al. (2009): $R_{\rm BLR} \propto [\lambda L_\lambda(5100\text{\AA})]^{0.52 \pm 0.04}$.

### Step 3 - Virial Black Hole Mass Calculation
Assuming the BLR gas motion is gravitationally dominated by the central point mass $M_{\rm BH}$:
$$v_{\rm BLR}^2 = \frac{G M_{\rm BH}}{R_{\rm BLR}}$$
Measuring line width $\Delta v$ (e.g. line dispersion $\sigma_{\rm line}$ or FWHM) and time lag $\tau_{\rm cent} = R_{\rm BLR}/c$:
$$\boxed{ M_{\rm BH} = f \, \frac{c \, \tau_{\rm cent} \, (\Delta v)^2}{G} }$$
where $f$ is the dimensionless virial coefficient accounting for BLR geometry, inclination, and velocity field (calibrated to $f \approx 4.3 - 5.5$ using the local $M_{\rm BH}-\sigma$ relation).

---

## 6. Derivation VI - Spectral PCA Covariance Diagonalization and Eigenspectra

### Textbook Citation & Source
- Primary Literature - Connolly et al. 1995, AJ, 110, 1071 and Madgwick et al. 2002, MNRAS, 333, 133 (2dFGRS spectral classification).
- Textbooks - Mo, van den Bosch & White, Section 2.4.2, pages 86-89.

### Step 1 - Spectral Matrix Formulation
Consider an observational sample of $N$ galaxy spectra, each sampled at $M$ discrete rest-frame wavelength bins $\lambda_j$ ($j = 1, \dots, M$).
Represent the dataset as an $N \times M$ flux matrix $X_{ij} = F_i(\lambda_j)$.
1. Normalize each spectrum to unit mean flux:
   $$\hat{X}_{ij} = \frac{X_{ij}}{\frac{1}{M}\sum_{j=1}^M X_{ij}}$$
2. Subtract the mean ensemble spectrum $\bar{X}_j = \frac{1}{N}\sum_{i=1}^N \hat{X}_{ij}$ to obtain the mean-centered data matrix:
   $$\tilde{X}_{ij} = \hat{X}_{ij} - \bar{X}_j$$

### Step 2 - Covariance Matrix Construction
The $M \times M$ sample covariance matrix $C$ between wavelength channels $\lambda_j$ and $\lambda_k$ is:
$$C_{jk} = \frac{1}{N - 1} \sum_{i=1}^N \tilde{X}_{ij} \tilde{X}_{ik} = \frac{1}{N - 1} (\tilde{X}^T \tilde{X})_{jk}$$

### Step 3 - Eigenvalue Decomposition
Because $C$ is real and symmetric ($C = C^T$), spectral theory guarantees an orthonormal basis of $M$ eigenvectors $\mathbf{e}_k$ (the **eigenspectra** or principal components) and non-negative real eigenvalues $\lambda_k$:
$$C \mathbf{e}_k = \lambda_k \mathbf{e}_k, \qquad \mathbf{e}_k \cdot \mathbf{e}_m = \delta_{km}$$
Sort eigenvalues in descending order: $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_M \ge 0$.
The fractional variance explained by the $k$-th eigenspectrum is:
$$f_k = \frac{\lambda_k}{\sum_{m=1}^M \lambda_m}$$
In optical galaxy surveys (e.g. SDSS, 2dFGRS), the first two eigenspectra account for $> 90\%$ of the total spectral variance across the entire galaxy population:
- **Eigenspectrum 1 ($\mathbf{e}_1$)**: Represents the continuum color slope (4000 \AA\ break, stellar age, and overall metallicity).
- **Eigenspectrum 2 ($\mathbf{e}_2$)**: Represents emission-line strength ($\mathrm{H}\alpha, [\mathrm{O}\,\text{II}], [\mathrm{O}\,\text{III}]$) orthogonal to the continuum, directly measuring the current star formation rate.

### Step 4 - Spectral Projection and the 2dFGRS $\eta$ Parameter
Any galaxy spectrum is reconstructed as a linear combination:
$$\tilde{X}_i(\lambda) = \sum_{k=1}^K a_{ik} \mathbf{e}_k(\lambda)$$
where the scalar expansion coefficients (projection scores) are:
$$a_{ik} = \sum_{j=1}^M \tilde{X}_{ij} e_{kj} = \tilde{X}_i \cdot \mathbf{e}_k$$
Madgwick et al. (2002) defined the canonical 2dFGRS spectral classification parameter $\eta$ by rotating the $(a_1, a_2)$ principal plane:
$$\boxed{ \eta \equiv a_1 - 0.5 a_2 }$$
- $\eta < -1.4$: Passive, quiescent early-type galaxies (ellipticals/S0).
- $-1.4 \le \eta < 1.1$: Intermediate early spirals (Sa/Sb).
- $1.1 \le \eta < 3.5$: Active late-type star-forming spirals (Sc/Sd).
- $\eta \ge 3.5$: Starburst galaxies with extreme nebular emission lines.

---

## 7. Derivation VII - Adaptive 2D Voronoi Spatial Binning & Target SNR

### Textbook Citation & Source
- Primary Literature - Cappellari, M., & Copin, Y. 2003, MNRAS, 342, 345.

### Step 1 - The Signal-to-Noise Ratio Dilemma
In an IFU observation of a galaxy, each spatial pixel (spaxel) $i$ records a stellar signal $S_i$ and noise variance $\sigma_i^2$.
Because surface brightness drops by orders of magnitude from the center to the outer disk/halo ($I \propto e^{-R/h}$), central spaxels have $\mathrm{SNR}_i \equiv S_i / \sigma_i \gg 50$, while outer spaxels drop to $\mathrm{SNR}_i < 2$, where absorption line kinematics cannot be extracted.
Standard $N \times N$ rectangular binning destroys central spatial resolution and smears non-axisymmetric features.

### Step 2 - Formulation of the Voronoi Partitioning Problem
We seek a partition of $N_{\rm spax}$ spaxels into $K$ disjoint polygonal bins $V_k$ ($k = 1, \dots, K$) such that every bin satisfies:
$$\mathrm{SNR}(V_k) = \frac{\sum_{i \in V_k} S_i}{\sqrt{\sum_{i \in V_k} \sigma_i^2}} \ge \mathrm{SNR}_{\rm target} \quad (\text{e.g. } \mathrm{SNR}_{\rm target} \approx 40)$$
while ensuring that bins are topological Voronoi tessellations of a set of generator points $\{\mathbf{z}_k\}$:
$$V_k = \{ \mathbf{x}_i \in \mathbb{R}^2 : \|\mathbf{x}_i - \mathbf{z}_k\| \le \|\mathbf{x}_i - \mathbf{z}_m\|, \;\forall m \ne k \}$$

### Step 3 - Centroidal Relaxation Algorithm
1. **Initial Node Selection**: Spaxels with individual $\mathrm{SNR}_i \ge \mathrm{SNR}_{\rm target}$ remain unbinned single spaxels ($V_k = \{i\}$), preserving maximum seeing-limited spatial resolution.
2. **Accretion Phase**: Starting from the spaxel of highest remaining SNR, adjacent spaxels are accreted into bin $V_k$ until $\mathrm{SNR}(V_k)$ reaches $\mathrm{SNR}_{\rm target}$.
3. **Modified Lloyd's Relaxation**: For each bin, compute its luminosity-weighted centroid:
   $$\mathbf{z}_k = \frac{\sum_{i \in V_k} S_i \mathbf{x}_i}{\sum_{i \in V_k} S_i}$$
   Update the Voronoi tessellation with respect to new generators $\{\mathbf{z}_k\}$ and iterate until convergence.
This preserves 2D structural geometry, minimizes Poisson scatter across the field, and produces an optimal, unbiased 2D stellar kinematic map.

---

## 8. Derivation VIII - Kahn-Woltjer Timing Argument for the Local Group Mass

### Textbook Citation & Source
- Primary Literature - Kahn, F. D., & Woltjer, L. 1959, ApJ, 130, 705 and van der Marel et al. 2012, ApJ, 753, 8.
- Textbooks - Binney & Tremaine, *Galactic Dynamics*, Section 10.2, pages 725-730 and Mo, van den Bosch & White, Section 2.4.

### Step 1 - Physical Model & Equation of Motion
Model the Milky Way and Andromeda (M31) as two point masses with total mass $M_{\rm tot} \equiv M_{\rm MW} + M_{\rm M31}$.
Assume they formed at $t = 0$ at zero separation ($r = 0$), expanded with the cosmic Hubble flow, decelerated under mutual gravity, reached maximum separation ($r_{\rm max}$, turnaround), and are currently falling toward each other on a purely radial orbit ($L = 0$).
The relative equation of motion is:
$$\frac{d^2 r}{dt^2} = -\frac{G M_{\rm tot}}{r^2}$$

### Step 2 - Energy Integral and Separation of Variables
Multiply by $\dot{r} = dr/dt$ and integrate:
$$\frac{d}{dt}\left[ \frac{1}{2}\dot{r}^2 \right] = \frac{d}{dt}\left[ \frac{G M_{\rm tot}}{r} \right] \implies \frac{1}{2}\left(\frac{dr}{dt}\right)^2 - \frac{G M_{\rm tot}}{r} = E = -\frac{G M_{\rm tot}}{2a}$$
where $a$ is the semi-major axis ($r_{\rm max} = 2a$ at turnaround where $\dot{r} = 0$).
Solve for $\dot{r}$:
$$\frac{dr}{dt} = \pm \sqrt{\frac{G M_{\rm tot}}{a}} \sqrt{\frac{2a - r}{r}} \implies \sqrt{\frac{r}{2a - r}} \, dr = \pm \sqrt{\frac{G M_{\rm tot}}{a}} \, dt$$

### Step 3 - Cycloid Parametric Solution
Substitute the development angle $\eta$:
$$r(\eta) = a(1 - \cos\eta)$$
Differentiate: $dr = a\sin\eta \, d\eta$.
Substitute:
$$\sqrt{\frac{a(1-\cos\eta)}{2a - a(1-\cos\eta)}} (a\sin\eta d\eta) = \tan\left(\frac{\eta}{2}\right) [2a\sin(\eta/2)\cos(\eta/2)] d\eta = 2a\sin^2(\eta/2) d\eta = a(1 - \cos\eta) d\eta$$
Integrate from $t = 0$ ($\eta = 0$) to time $t$:
$$\int_0^\eta a(1 - \cos\eta') d\eta' = \sqrt{\frac{G M_{\rm tot}}{a}} \int_0^t dt' \implies \boxed{ t(\eta) = \sqrt{\frac{a^3}{G M_{\rm tot}}} (\eta - \sin\eta) }$$
The relative radial velocity $v(t) = dr/dt$ is:
$$\boxed{ v(\eta) = \frac{dr/d\eta}{dt/d\eta} = \sqrt{\frac{G M_{\rm tot}}{a}} \frac{\sin\eta}{1 - \cos\eta} }$$

### Step 4 - The Dimensionless Ratio & Mass Calculation
Combine $v, t$, and $r$ into the dimensionless timing observable:
$$\boxed{ \frac{v t}{r} = \frac{\sin\eta \, (\eta - \sin\eta)}{(1 - \cos\eta)^2} }$$
Observational parameters today ($t = t_0 = 13.8\,\mathrm{Gyr} = 4.35 \times 10^{17}\,\mathrm{s}$):
- Separation: $r = 780\,\mathrm{kpc} = 2.407 \times 10^{24}\,\mathrm{cm}$.
- Approach velocity: $v = -123\,\mathrm{km\,s^{-1}} = -1.23 \times 10^7\,\mathrm{cm\,s^{-1}}$.
Compute the LHS:
$$\frac{v t_0}{r} = \frac{(-1.23 \times 10^7) \times (4.35 \times 10^{17})}{2.407 \times 10^{24}} \approx -2.22$$
Solving the transcendental equation $\frac{\sin\eta(\eta-\sin\eta)}{(1-\cos\eta)^2} = -2.22$ numerically yields:
$$\eta \approx 4.35\,\mathrm{rad} \approx 249^\circ \quad (\pi < \eta < 2\pi, \text{ confirming approach after turnaround})$$
Solve for the semi-major axis $a$:
$$a = \frac{r}{1 - \cos\eta} = \frac{780\,\mathrm{kpc}}{1 - \cos(4.35)} = \frac{780}{1 - (-0.358)} \approx 574\,\mathrm{kpc}$$
Solve for total dynamical mass $M_{\rm tot}$:
$$\boxed{ M_{\rm tot} = \frac{a^3}{G t_0^2} (\eta - \sin\eta)^2 \approx (4.3 \pm 0.6) \times 10^{12} \, M_\odot }$$
Because the total baryonic mass of MW + M31 in stars and gas is only $M_{\rm bar} \approx 1.6 \times 10^{11}\,M_\odot$, dark matter constitutes $\approx 96\%$ of the total mass of the Local Group!

---

## 9. Derivation IX - Self-Regulated AGN Feedback Blowout, Momentum-Driven vs Energy-Driven Limits

### Textbook Citation & Source
- Primary Literature - Silk & Rees 1998, A&A, 331, L1 and King, A. 2003, ApJ, 596, L27 and Fabian, A. C. 2012, ARA&A, 50, 455.
- Textbooks - Mo, van den Bosch & White, Section 14.4, pages 660-668.

### Step 1 - Accretion Radiation Pressure
During its quasar phase, a supermassive black hole accretes gas near its Eddington limit:
$$L_{\rm Edd} = \frac{4\pi G M_\bullet m_p c}{\sigma_T}$$
The outward radial momentum thrust delivered by the absorbed and scattered radiation field is:
$$\dot{P}_{\rm rad} = \frac{L_{\rm Edd}}{c} = \frac{4\pi G M_\bullet m_p}{\sigma_T}$$

### Step 2 - Bulge Potential and Gas Binding Force
Model the host galaxy bulge as a singular isothermal sphere with stellar velocity dispersion $\sigma$:
$$\rho(r) = \frac{\sigma^2}{2\pi G r^2}, \qquad M_{\rm tot}(r) = \frac{2\sigma^2 r}{G}$$
Let $f_{\rm gas} \equiv M_{\rm gas} / M_{\rm tot} \approx \Omega_b / \Omega_m \approx 0.17$ be the gas mass fraction. The gas mass inside radius $r$ is $M_{\rm gas}(r) = f_{\rm gas} \frac{2\sigma^2 r}{G}$.
The gravitational force holding this gas shell in the bulge potential is:
$$F_{\rm grav} = \frac{G M_{\rm tot}(r) M_{\rm gas}(r)}{r^2} = \frac{G \left(\frac{2\sigma^2 r}{G}\right) \left(f_{\rm gas}\frac{2\sigma^2 r}{G}\right)}{r^2} = \frac{4 f_{\rm gas} \sigma^4}{G}$$
Remarkably, $r$ cancels identically: the binding weight of an isothermal gas reservoir is **spatially constant**.

### Step 3 - Momentum-Driven Blowout ($M_\bullet \propto \sigma^4$)
When the outflowing shocked gas cools rapidly via inverse Compton scattering against the intense quasar radiation field, the wind loses thermal energy and acts as a **momentum-conserving snowplow**.
Accretion continues until radiation momentum thrust balances the weight of the gas:
$$\dot{P}_{\rm rad} = F_{\rm grav} \implies \frac{4\pi G M_\bullet m_p}{\sigma_T} = \frac{4 f_{\rm gas} \sigma^4}{G}$$
Solving explicitly for the blowout mass $M_\bullet$:
$$\boxed{ M_\bullet = \left( \frac{f_{\rm gas} \sigma_T}{\pi G^2 m_p} \right) \sigma^4 \propto \sigma^4 }$$
Substituting physical constants ($f_{\rm gas} \approx 0.17, \sigma_T = 6.65 \times 10^{-25}\,\mathrm{cm}^2, m_p = 1.67 \times 10^{-24}\,\mathrm{g}$):
$$M_\bullet \approx 1.5 \times 10^8 \, M_\odot \left(\frac{\sigma}{200\,\mathrm{km\,s^{-1}}}\right)^4$$
This matches the normalization and slope of the empirical $M_\bullet - \sigma$ relation (Ferrarese & Merritt 2000) closely.

### Step 4 - Energy-Driven Blowout ($M_\bullet \propto \sigma^5$)
At large radii ($r > 1\,\mathrm{kpc}$), the gas density drops and the shocked outflow cannot cool radiatively within a dynamical time. The bubble expands adiabatically, conserving its kinetic energy:
$$\dot{E}_{\rm wind} = \frac{1}{2} \dot{M}_w v_w^2 \approx \frac{1}{2} \left(\frac{v_w}{c}\right) L_{\rm Edd} \approx \frac{1}{2} \eta L_{\rm Edd} \propto M_\bullet$$
The rate of energy required to lift the gas shell out of the bulge on a dynamical time $t_{\rm dyn} = r/\sigma$ is:
$$\dot{E}_{\rm req} \sim \frac{E_{\rm bind}}{t_{\rm dyn}} \sim \frac{M_{\rm gas} \sigma^2}{r / \sigma} \sim \frac{(f_{\rm gas}\sigma^2 r / G) \sigma^2}{r / \sigma} \sim \frac{f_{\rm gas} \sigma^5}{G}$$
Equating $\dot{E}_{\rm wind} \sim \dot{E}_{\rm req}$ yields:
$$\boxed{ M_\bullet \propto \sigma^5 }$$
The observed empirical slope $\beta \approx 4.4 - 5.0$ (Kormendy & Ho 2013. McConnell & Ma 2013) lies directly between the momentum-driven ($\beta = 4$) and energy-driven ($\beta = 5$) theoretical limits.

---

## 10. Derivation X - Schmidt-Kennicutt Law Derivation from Gravitational Jeans Instability

### Textbook Citation & Source
- Primary Literature - Schmidt, M. 1959, ApJ, 129, 243 and Kennicutt, R. C. 1998, ApJ, 498, 541.
- Textbooks - Mo, van den Bosch & White, Section 9.5, pages 415-425.

### Step 1 - 3D Volumetric Star Formation Formulation
In a self-gravitating gas cloud, star formation proceeds on the characteristic timescale of gravitational collapse, the **free-fall time** $t_{\rm ff}$:
$$\dot{\rho}_* = \epsilon_{\rm SF} \frac{\rho_{\rm gas}}{t_{\rm ff}}$$
where $\epsilon_{\rm SF} \approx 0.01 - 0.02$ is the dimensionless star formation efficiency per free-fall time.
The free-fall time of a sphere of gas with uniform density $\rho_{\rm gas}$ is derived from Newtonian gravitational collapse:
$$\frac{d^2 r}{dt^2} = -\frac{G M}{r^2} \implies t_{\rm ff} = \sqrt{\frac{3\pi}{32 G \rho_{\rm gas}}} \propto \rho_{\rm gas}^{-1/2}$$
Substitute $t_{\rm ff}$ into the volumetric star formation rate:
$$\dot{\rho}_* = \epsilon_{\rm SF} \sqrt{\frac{32 G}{3\pi}} \, \rho_{\rm gas}^{3/2} \propto \rho_{\rm gas}^{1.5}$$

### Step 2 - Vertical Projection to Surface Density
Consider a disk of gas in vertical hydrostatic equilibrium with vertical velocity dispersion $\sigma_g$.
The scale height $H$ is:
$$H \approx \frac{\sigma_g^2}{\pi G \Sigma_{\rm gas}}$$
The midplane volume density relates to the surface density via:
$$\rho_{\rm gas} \approx \frac{\Sigma_{\rm gas}}{2H} \approx \frac{\pi G \Sigma_{\rm gas}^2}{2\sigma_g^2}$$
Integrating the star formation rate through the disk thickness $2H$:
$$\Sigma_{\rm SFR} = \int_{-H}^H \dot{\rho}_* \, dz \approx 2H \dot{\rho}_* \propto H \rho_{\rm gas}^{1.5}$$
If the disk scale height is roughly uniform across the star-forming zone or dominated by the stellar disk potential ($H \approx \text{const}$):
$$\Sigma_{\rm SFR} \propto \left(\frac{\Sigma_{\rm gas}}{2H}\right)^{1.5} \cdot 2H \propto \Sigma_{\rm gas}^{1.5}$$
$$\boxed{ \Sigma_{\rm SFR} \propto \Sigma_{\rm gas}^{1.5} }$$
This ab initio gravitational collapse derivation matches Kennicutt's (1998) empirical result $\Sigma_{\rm SFR} \propto \Sigma_{\rm gas}^{1.40 \pm 0.15}$ within $1\sigma$.

### Step 3 - Global Orbital Frequency Formulation
Alternatively, large-scale star formation is triggered by spiral density waves compressing gas once per galactic orbit. The relevant timescale is the **orbital period** $t_{\rm orb} = 2\pi / \Omega = 2\pi R / v_{\rm circ}$:
$$\boxed{ \Sigma_{\rm SFR} = 0.017 \, \frac{\Sigma_{\rm gas}}{t_{\rm orb}} = 0.017 \, \Sigma_{\rm gas} \, \frac{\Omega}{2\pi} }$$
This demonstrates that normal galaxies convert approximately $1.7\%$ of their cold gas mass into stars per galactic revolution.

---

## 11. Derivation XI - Isothermal Dark Matter Halo and Cluster Hot Gas Hydrostatic Equilibrium

### Textbook Citation & Source
- Textbooks - Binney & Tremaine, *Galactic Dynamics*, Section 4.3 and Mo, van den Bosch & White, Section 8.2, pages 340-350.

### Step 1 - Singular Isothermal Sphere Dark Halo
Spiral galaxy rotation curves are observed to remain asymptotically flat out to the largest measured HI radii: $v_c(r) \to v_{\rm flat} = \text{constant}$.
Centrifugal balance requires:
$$\frac{v_{\rm flat}^2}{r} = \frac{G M(r)}{r^2} \implies M(r) = \frac{v_{\rm flat}^2 r}{G}$$
The total mass enclosed grows linearly with radius ($M \propto r$), implying that total mass diverges if the halo is not truncated.
Differentiating to obtain the 3D density profile:
$$\rho_{\rm DM}(r) = \frac{1}{4\pi r^2} \frac{dM}{dr} = \frac{1}{4\pi r^2} \frac{d}{dr}\left(\frac{v_{\rm flat}^2 r}{G}\right) = \frac{v_{\rm flat}^2}{4\pi G r^2}$$
$$\boxed{ \rho(r) \propto r^{-2} }$$
This is the **singular isothermal sphere**, proving that flat rotation curves require an extended non-luminous dark halo whose density falls as $r^{-2}$.

### Step 2 - Hydrostatic Equilibrium in Cluster Hot Intracluster Medium
In rich galaxy clusters (e.g. Coma, Virgo), the hot X-ray plasma ($T_X \sim 10^7 - 10^8\,\mathrm{K}$) is in hydrostatic equilibrium within the cluster's total gravitational potential $\Phi(r)$:
$$\frac{dP_{\rm gas}}{dr} = - \rho_{\rm gas}(r) \frac{d\Phi}{dr} = - \frac{G M(<r) \rho_{\rm gas}(r)}{r^2}$$
where $M(<r)$ is the total gravitating mass (dark matter + hot gas + galaxies).
Model the intracluster medium as an ideal gas:
$$P_{\rm gas}(r) = \frac{\rho_{\rm gas}(r) k_B T_X(r)}{\mu m_p}$$
where $\mu \approx 0.6$ is the mean molecular weight for a fully ionized primordial plasma.
Differentiate $P_{\rm gas}$ with respect to $r$:
$$\frac{dP_{\rm gas}}{dr} = \frac{k_B}{\mu m_p} \left[ T_X \frac{d\rho_{\rm gas}}{dr} + \rho_{\rm gas} \frac{dT_X}{dr} \right] = \frac{\rho_{\rm gas} k_B T_X}{\mu m_p} \left[ \frac{d\ln\rho_{\rm gas}}{dr} + \frac{d\ln T_X}{dr} \right]$$
Substitute into the hydrostatic equation:
$$\frac{\rho_{\rm gas} k_B T_X}{\mu m_p r} \left[ \frac{d\ln\rho_{\rm gas}}{d\ln r} + \frac{d\ln T_X}{d\ln r} \right] = - \frac{G M(<r) \rho_{\rm gas}}{r^2}$$
Divide both sides by $\rho_{\rm gas}$ and solve explicitly for the enclosed dynamical mass:
$$\boxed{ M(<r) = - \frac{k_B T_X(r) \, r}{G \mu m_p} \left[ \frac{d\ln\rho_{\rm gas}}{d\ln r} + \frac{d\ln T_X}{d\ln r} \right] }$$

### Step 3 - The $\beta$-Model Solution
For an isothermal gas profile ($T_X = \text{const} \implies d\ln T_X / d\ln r = 0$) following Cavaliere & Fusco-Femiano's (1976) $\beta$-model:
$$\rho_{\rm gas}(r) = \rho_0 \left[ 1 + \left(\frac{r}{r_c}\right)^2 \right]^{-3\beta / 2}$$
The logarithmic density gradient is:
$$\frac{d\ln\rho_{\rm gas}}{d\ln r} = r \frac{d}{dr} \left[ -\frac{3\beta}{2} \ln\left(1 + \frac{r^2}{r_c^2}\right) \right] = - \frac{3\beta r^2}{r^2 + r_c^2}$$
Substitute into the hydrostatic mass formula:
$$\boxed{ M(<r) = \frac{3\beta k_B T_X}{G \mu m_p} \frac{r^3}{r^2 + r_c^2} }$$
At large radii ($r \gg r_c$), $M(<r) \to \frac{3\beta k_B T_X}{G \mu m_p} r \propto r$, reproducing the isothermal halo potential and providing independent, pristine confirmation of dark matter in clusters.

---

## 12. Derivation XII - Simple Closed-Box Chemical Evolution and the Alpha-Fe Clock

### Textbook Citation & Source
- Primary Literature - Tinsley, B. M. 1980, Fund. Cosmic Phys., 5, 287 and Thomas, Maraston & Bender 2003, MNRAS, 339, 897.
- Textbooks - Mo, van den Bosch & White, Chapter 10, pages 460-475.

### Step 1 - The Classical Closed-Box Model
Consider an isolated system with constant total baryonic mass:
$$M_{\rm tot} = M_g(t) + M_*(t) = \text{constant} \implies dM_g = - dM_*$$
Let $Z \equiv M_Z / M_g$ be the metallicity of the gas.
Under the **Instantaneous Recycling Approximation (IRA)**:
1. Massive stars die instantaneously, returning a mass fraction $R$ of unprocessed and enriched gas.
2. The mass of newly synthesized metals returned per unit mass of long-lived stars is the yield $y_Z$.
The conservation of metal mass in the interstellar gas gives:
$$dM_Z = d(Z M_g) = M_g dZ + Z dM_g = - Z dM_*' + y_Z dM_*$$
where $dM_* = (1 - R) dM_*'$ is the net mass locked into long-lived stars.
Substitute $dM_g = - dM_*$:
$$M_g dZ - Z dM_* = - Z dM_* + y_Z dM_* \implies M_g dZ = y_Z dM_* = - y_Z dM_g$$
Divide by $M_g$:
$$dZ = - y_Z \frac{dM_g}{M_g}$$
Integrate from initial gas fraction $\mu_g \equiv M_g / M_{\rm tot} = 1$ with initial metallicity $Z(0) = Z_0$:
$$\boxed{ Z(t) = Z_0 - y_Z \ln\left(\frac{M_g(t)}{M_{\rm tot}}\right) = Z_0 + y_Z \ln\left(\frac{1}{\mu_g}\right) }$$

### Step 2 - The $[\alpha/\text{Fe}]$ Chemical Clock Differential Equations
Alpha-elements ($\mathrm{O}, \mathrm{Mg}, \mathrm{Si}$) and iron-peak elements ($\mathrm{Fe}$) are synthesized on two radically different astrophysical timescales:
1. **Core-Collapse Supernovae (CCSN, Types II, Ib, Ic)**: Massive stars ($M \ge 8\,M_\odot$), lifetimes $\tau_{\rm CCSN} \lesssim 30\,\mathrm{Myr} \approx \text{instantaneous}$. High alpha yield, low iron yield ($y_\alpha^{\rm CCSN} \gg y_{\rm Fe}^{\rm CCSN}$).
2. **Thermonuclear Supernovae (Type Ia)**: White dwarfs in binaries exceeding Chandrasekhar limit, explosion delay time distribution $\Psi(\tau) \propto \tau^{-1}$ starting at $\tau_{\rm min} \sim 40-100\,\mathrm{Myr}$ with median delay $\tau_{\rm Ia} \approx 1\,\mathrm{Gyr}$. Massive iron yield, negligible alpha ($y_{\rm Fe}^{\rm Ia} \gg y_\alpha^{\rm Ia}$).

The differential enrichment equations for gas mass $M_\alpha$ and $M_{\rm Fe}$ are:
$$\frac{d M_\alpha}{dt} = - Z_\alpha \psi(t) + y_\alpha^{\rm CCSN} (1 - R) \psi(t)$$
$$\frac{d M_{\rm Fe}}{dt} = - Z_{\rm Fe} \psi(t) + y_{\rm Fe}^{\rm CCSN} (1 - R) \psi(t) + \int_0^t \psi(t - \tau) y_{\rm Fe}^{\rm Ia} \Psi(\tau) d\tau$$
where $\psi(t)$ is the star formation rate.

### Step 3 - Asymptotic Regimes & The Knee
- **Regime 1: Early Starburst ($t < \tau_{\rm Ia} \approx 1\,\mathrm{Gyr}$)**:
  Type Ia explosions have not begun ($\Psi(\tau) \approx 0$). Enrichment is purely driven by core-collapse supernovae:
  $$\frac{dM_\alpha / dt}{dM_{\rm Fe} / dt} = \frac{y_\alpha^{\rm CCSN}}{y_{\rm Fe}^{\rm CCSN}} = \text{constant}$$
  $$\boxed{ [\alpha/\text{Fe}]_{\rm plateau} \approx +0.35 \text{ to } +0.45\,\mathrm{dex} }$$
- **Regime 2: Extended Star Formation ($t > \tau_{\rm Ia} \approx 1\,\mathrm{Gyr}$)**:
  Type Ia supernovae detonate, injecting massive amounts of iron without corresponding alpha elements.
  $$\frac{d[\alpha/\text{Fe}]}{d[\text{Fe}/\text{H}]} < 0$$
  This abrupt inflection creates the **chemical knee**.
- **Consequence**:
  Massive elliptical galaxies exhibit supersolar $[\alpha/\text{Fe}] \approx +0.2$ to $+0.35$, proving that their star formation was quenched within a rapid burst duration $\Delta t_{\rm SF} \lesssim 0.5 - 1.0\,\mathrm{Gyr}$ at high redshift. Low-mass galaxies and the Milky Way disk formed stars over $> 5 - 10\,\mathrm{Gyr}$, allowing SN Ia to drive $[\alpha/\text{Fe}]$ down to solar values ($[\alpha/\text{Fe}] \approx 0$).

---

## 13. Derivation XIII - Wolf et al. (2010) Anisotropy-Independent Mass Estimator for Dispersion-Supported Galaxies

### Textbook Citation & Source
- Primary Literature - Wolf, J., et al. 2010, MNRAS, 406, 1220 and Walker et al. 2009, ApJ, 704, 1274.
- Textbooks - Binney & Tremaine, *Galactic Dynamics*, Section 4.8.

### Step 1 - The Spherical Jeans Equation
For a pressure-supported, spherically symmetric stellar system with 3D tracer density $\nu(r)$, radial velocity dispersion $\sigma_r(r)$, and velocity anisotropy $\beta(r) \equiv 1 - \sigma_\theta^2/\sigma_r^2$:
$$\frac{d}{dr}\left( \nu \sigma_r^2 \right) + \frac{2\beta(r)}{r} \nu \sigma_r^2 = - \frac{G \nu(r) M(r)}{r^2}$$

### Step 2 - The Integrated Virial Identity
Multiply the radial Jeans equation by $r^3$ and integrate from $r = 0$ to $\infty$:
$$\int_0^\infty r^3 \frac{d}{dr}\left(\nu\sigma_r^2\right) dr + \int_0^\infty 2\beta(r) r^2 \nu\sigma_r^2 dr = - \int_0^\infty G \nu(r) M(r) r dr$$
Integrate the first term by parts:
$$\int_0^\infty r^3 \frac{d}{dr}\left(\nu\sigma_r^2\right) dr = \left[ r^3 \nu\sigma_r^2 \right]_0^\infty - 3\int_0^\infty r^2 \nu\sigma_r^2 dr$$
Assuming $\nu\sigma_r^2$ falls faster than $r^{-3}$ at infinity and is non-singular at the origin, the boundary term vanishes identically:
$$-3\int_0^\infty r^2 \nu\sigma_r^2 dr + \int_0^\infty 2\beta(r) r^2 \nu\sigma_r^2 dr = - \int_0^\infty G \nu(r) M(r) r dr$$
Combine terms:
$$\int_0^\infty [3 - 2\beta(r)] r^2 \nu \sigma_r^2 dr = \int_0^\infty G \nu(r) M(r) r dr$$
Recall that the luminosity-weighted projected velocity dispersion $\langle \sigma_{\rm LOS}^2 \rangle$ satisfies:
$$L_{\rm tot} \langle \sigma_{\rm LOS}^2 \rangle = \frac{4\pi}{3} \int_0^\infty \nu(r) \left[ \sigma_r^2 + 2\sigma_\theta^2 \right] r^2 dr = \frac{4\pi}{3} \int_0^\infty [3 - 2\beta(r)] r^2 \nu \sigma_r^2 dr$$
Substituting this yields the exact global virial identity:
$$L_{\rm tot} \langle \sigma_{\rm LOS}^2 \rangle = \frac{4\pi}{3} \int_0^\infty G \nu(r) M(r) r dr$$

### Step 3 - Anisotropy-Independence at the 3D Half-Light Radius
Wolf et al. (2010) performed a Taylor series expansion of $M(r)$ about the 3D deprojected half-light radius $r_{1/2}$ (the sphere enclosing half the total stellar light).
At $r = r_{1/2}$, the logarithmic density slope of typical stellar tracers is $d\ln\nu/d\ln r \approx -3$. Wolf et al. demonstrated that the first-order variation of enclosed mass with respect to anisotropy vanishes identically:
$$\left. \frac{\partial M(r)}{\partial \beta} \right|_{r = r_{1/2}} = 0$$
Evaluating the integral leads to the **Wolf Mass Estimator**:
$$\boxed{ M_{1/2} \equiv M(< r_{1/2}) = \frac{3 \, \langle \sigma_{\rm LOS}^2 \rangle \, r_{1/2}}{G} }$$
For all standard stellar density profiles (King, Plummer, Sersic, Hernquist), the 3D half-light radius relates to the 2D projected circularized effective radius $R_e$ by the geometric relation $r_{1/2} \approx \frac{4}{3} R_e$.
Substituting $r_{1/2} = \frac{4}{3} R_e$:
$$\boxed{ M_{1/2} \approx \frac{4 \, \langle \sigma_{\rm LOS}^2 \rangle \, R_e}{G} }$$
This equation allows astrophysicists to determine the true dynamical mass enclosed within $R_e$ in dwarf spheroidal and ultra-faint galaxies to an accuracy better than $10\%$, completely independent of the unknown stellar velocity anisotropy $\beta(r)$!

