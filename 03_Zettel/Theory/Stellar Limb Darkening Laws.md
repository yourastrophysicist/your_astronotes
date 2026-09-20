---
layout: "default"
title: "Stellar Limb Darkening Laws"
---
# Stellar Limb Darkening Laws

Limb darkening describes the decrease in observed stellar specific intensity from the disk center toward the limb, caused by the temperature gradient in the stellar atmosphere.

## Physical Mechanism
Optical depth along a ray inclined at angle $\theta$ to the surface normal is:
$$\tau_\lambda = \int \kappa_\lambda \rho \, \frac{dz}{\cos \theta} = \frac{\tau_{\text{vertical}}}{\mu}, \quad \mu = \cos \theta$$
An observer looking at the center ($\mu = 1$) sees into deeper, hotter atmospheric layers ($T_1$). Looking toward the limb ($\mu \to 0$), the line of sight samples higher, cooler layers ($T_0 < T_1$), producing lower specific intensity $I_\lambda(\mu) < I_\lambda(1)$.

## Analytical Parameterizations

### 1. Linear Law (Schwarzschild 1906)
$$\frac{I(\mu)}{I(1)} = 1 - u (1 - \mu)$$

### 2. Quadratic Law (Kopal 1950)
The standard choice for optical transit modeling:
$$\frac{I(\mu)}{I(1)} = 1 - u_1 (1 - \mu) - u_2 (1 - \mu)^2$$
Physical requirements for monotonically decreasing, positive intensity:
$$u_1 + u_2 < 1, \quad u_1 > 0, \quad u_1 + 2 u_2 > 0$$

### 3. Square-Root Law (Diaz-Cordoves & Gimenez 1992)
Optimal for cool stars in the infrared:
$$\frac{I(\mu)}{I(1)} = 1 - v_1 (1 - \mu) - v_2 (1 - \sqrt{\mu})$$

### 4. Non-Linear 4-Parameter Law (Claret 2000)
$$\frac{I(\mu)}{I(1)} = 1 - \sum_{k=1}^4 c_k (1 - \mu^{k/2})$$

## Related Notes
- [[Limb Darkening Computation with ldtk]]
- [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]]



## Linked References

- [[Limb Darkening Computation with ldtk]]
- [[Transit Modeling with batman]]
- [[Exoplanet Transit Geometry and Impact Parameter]]
- [[Mandel-Agol analytical transit light curve model]]
- [[Transit Depth and Ingress-Egress Timescales]]
- [[Astrophysics_Laboratory_2_MOC]]


