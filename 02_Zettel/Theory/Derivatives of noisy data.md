---
layout: default
title: "Derivatives of noisy data"
---

# Derivatives of noisy data

finite-difference derivatives **amplify noise**. if my data has measurement uncertainty $\sigma$, a forward-difference derivative has uncertainty $\sigma/h$, which is *huge* when $h$ is small. naively differentiating noisy time series gives a useless result.

## the math of why this is bad

suppose true $y = f(x) + \eta$ with $\eta$ noise of std $\sigma$. forward difference:

$$y'_i = \frac{y_{i+1} - y_i}{h} = \frac{f_{i+1} - f_i}{h} + \frac{\eta_{i+1} - \eta_i}{h}$$

the noise in the numerator has std $\sqrt{2}\sigma$ (independent), so the noise in the derivative estimate is $\sqrt{2}\sigma/h$. for $h \ll 1$, this completely dominates the actual derivative signal.

worse: as I shrink $h$ to *reduce truncation error*, the noise *grows*. there is no good $h$ — the U-shape from clean-data finite differences becomes a "bad-everywhere" curve.

## three escape routes

### 1. smooth first, then differentiate

apply a smoothing filter to the data, *then* compute finite differences on the smoothed version:

```python
from scipy.ndimage import gaussian_filter1d

y_smooth = gaussian_filter1d(y, sigma=3)
y_prime = np.gradient(y_smooth, x)
```

the smoothing kernel width $\sigma$ should be roughly the noise correlation length, or the smallest physical scale I want to resolve. tuning is heuristic: too small and the noise wins, too large and I smear out real features.

### 2. fit a smooth model, then differentiate analytically

if the data follows a known functional form, fit it (least squares or curve_fit), then differentiate the analytic model:

```python
from scipy.optimize import curve_fit

def model(x, a, b, c):
    return a * np.exp(-b * x) + c

popt, _ = curve_fit(model, x, y, sigma=sigma_y)

def model_derivative(x, a, b, c):
    return -a * b * np.exp(-b * x)

y_prime = model_derivative(x, *popt)
```

this works when I have a physical model. when I don't, fall back to non-parametric smoothing.

### 3. cubic spline through the data

fit a cubic spline that has built-in $C^2$ smoothness. its analytic derivative is well-defined:

```python
from scipy.interpolate import CubicSpline

cs = CubicSpline(x, y)
y_prime = cs(x, 1)              # first derivative at data points
y_double_prime = cs(x, 2)       # second derivative
```

for noisy data, prefer the **smoothing spline** that does not pass exactly through the data:

```python
from scipy.interpolate import UnivariateSpline

spl = UnivariateSpline(x, y, w=1/sigma_y**2, s=len(x))
y_prime = spl.derivative()(x)
```

the smoothing parameter `s` controls the tradeoff: $s = 0$ is exact interpolation (overfits noise), $s \to \infty$ is a polynomial fit. setting $s \approx N$ (number of points) is a reasonable default.

### 4. Savitzky-Golay filter

a more sophisticated smoothing-and-differentiating filter. fits a low-degree polynomial in a sliding window, evaluates it (or its derivative) at the center. less aggressive than Gaussian smoothing for sharp features:

```python
from scipy.signal import savgol_filter

y_prime = savgol_filter(y, window_length=11, polyorder=3, deriv=1, delta=h)
```

`window_length` (must be odd) sets the smoothing scale, `polyorder` the polynomial degree (3 is usually fine), `deriv=1` returns the first derivative, `delta` is the spacing.

popular for spectroscopy and pulse-processing where preserving peak shape matters.

## the optimal step-size question becomes a window-size question

instead of "what is $h$", I ask "how wide is my smoothing kernel" or "what is my fit complexity." the principle is the same: balance the signal-to-noise ratio against the loss of true features.

## verification

after differentiating noisy data, **always plot the original data, the smoothed version, and the derivative side by side**. if the derivative looks "ringy" or has wild oscillations the smoothed function does not have, the smoothing is undershooting. if the derivative is too flat, the smoothing is over-shooting.

## astrophysics use cases

- **light curves**: differentiating to get $\dot F$ (e.g. for finding flare onsets) requires smoothing the photometric time series first
- **velocity from position-time data** (e.g. proper motions over a short baseline)
- **temperature gradients in stellar atmospheres** from observed line strengths
- **time-resolved spectroscopy**: $dE/dt$ for transients and ToO targets
- **rotation curves**: the central derivative $dv/dr$ is highly sensitive, smoothing essential for robust dynamical mass estimation

## the lesson

never differentiate noisy data directly. **smoothing is the default**. the only question is what smoothing tool, calibrated to the noise structure of the data.

## see also

- [Forward backward and central differences](../../02_Zettel/Theory/Forward backward and central differences.html)
- [Cubic spline interpolation](../../02_Zettel/Theory/Cubic spline interpolation.html)
- [Linear least squares](../../02_Zettel/Theory/Linear least squares.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
