---
layout: default
title: "Grazing incidence"
---

X-rays telescopes are different from the optical ones
	because of **the wavelength of the incident photons**

For example, the energy of $1~keV$ corresponds to a radiation of $12.4~\mathring{A}$  
	that can pass through the mirror and/or be absorbed by the mirror.
		therefore, a trick must be applied in order to focus X-ray photons.

According to Snell's Law of the refraction,
	when a light ray passes through from a medium with a refractive index $n_1$ to a medium with refractive index $n_2$, the direction of propagation changes:
$$n_1~\text{sin}~\alpha_i=n_2~\text{sin}~\alpha_r$$
In particular, when $n_1<n_2$ we have $a_r<a_i$ 
	if we invert this this should be $n_1>n_2$ and we have $a_r>a_i$ 
What happens when $a_r=90°$ ?
	we can define the **critical angle**:
$$\alpha_c=\text{arcsin}\frac{n_2}{n_1}$$

<img src="{{ "/assets/images/Screenshot%202026-04-06%20at%2017.43.21.png" | relative_url }}" alt="Screenshot 2026-04-06 at 17.43.21" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
<font color="#bfbfbf">(left) The effect of refraction: i and r indicate incidence and refraction, respectively. (center) The case of glass to water. (right) The case of the critical angle.</font> 

Beyond the critical angle, the light ray is **reflected**.

Therefore, taking into account that X-ray Telescopes are in space and that vacuum has refractive index $n_1=1$
	it means that mirrors for X-rays must be coated with materials having $n_2<1$.

The X-ray refractive index may be written in the form:
$$n=1-\delta+i\beta$$ 
where the real part (with $\delta \sim 10^{-5} - 10^{-4}$) accounts for the **refraction effect** 
	and the imaginary part (with $\beta \sim 10^{-6}-10^{-5}$) is related to the X-ray [Photoelectric absorption](../../02_Zettel/Theory/Photoelectric absorption.html) 

The $\delta$ and $\beta$ parameters represent the optical constants of the material.

X-rays barely bend when passing through materials
	because the refractive index $\delta$ is extremely small ($\sim 10^{-5}$)             

If you tried to build a lens,
	the bending would be so weak 
		that the focal point ends up tens of meters away
			which is too far for a single spacecraft.
  Making the lens thicker to compensate does not help either,
	  because the X-rays would simply be absorbed before passing through due to the large [absorption coefficient](../../02_Zettel/Theory/Photoelectric absorption.html) 
		So lenses are completely ruled out.

  The only option is mirrors, 
	  but even there, $\delta$ being so small means a mirror at normal incidence reflects almost nothing
  The solution is to hit the mirror at an extremely shallow angle, known as [grazing incidence](../../02_Zettel/Theory/Grazing incidence.html)
	  where total external reflection becomes possible

**This is why X-ray telescopes look fundamentally different from optical ones**,
	the geometry is entirely dictated by the need to keep photons nearly parallel to the mirror surface   

In X-ray astronomy it is commonly used $\theta_c$ which is complementary to critical angle $\alpha_c$
	since the imaginary part is much smaller than the real one, we can assume that $n \approx 1 - \delta$, therefore:                                           $$\sin\alpha_c = \cos\theta_c = n_2 \approx 1 - \delta$$
Because of the small value of $\delta$, also $\theta_c$ is small so that we can apply the approximation: $$\cos\theta_c \approx 1 - \frac{\theta_c^2}{2} = 1 - \delta$$$$\theta_c \approx \sqrt{2\delta} \quad \text{in radians units}$$$$\theta_c \approx 81\sqrt{\delta} \quad \text{in degrees units}$$
  The parameter $\delta$ is given by the following formula:                             $$\delta = \frac{\rho~A_0~r_e~\lambda^2~f_1}{2\pi~W_m}$$   where
        $\rho$ is the density of the material 
        $A_0$ is the Avogadro's number                      
        $r_e$ is the classical electron radius
        $\lambda$ is the incident wavelength  
        $f_1$ is the first atomic scattering coefficient, corresponding to the number of scattering electrons per atom                         
        $W_m$ is the molar weight of the reflecting material

  Given that at very high energies $f_1$ is almost equal to the atomic number $Z$, we can write:                                                                    $$\theta_c \propto \frac{\sqrt{\rho}}{E}$$
  that is, the critical angle is proportional to the square root of the material density and the atomic number,  and inversely proportional to the photon energy                                                                                                                                                                                 
  To increase $\theta_c$ we have to increase the material density
	therefore, high-$Z$ materials are used as coating layers for X-ray mirrors on top of lighter supporting plates, for example:
	- tungsten ($Z_W = 74$), 
	- iridium ($Z_{Ir} = 77$), 
	- platinum ($Z_{Pt} = 78$), 
	- or gold ($Z_{Au} = 79$)                                                                       over glass or nickel ($Z_{Ni} = 28$)                                                    
	
  The density of platinum is $\rho_{Pt} = 21.4~\text{g cm}^{-3}$, so that                         $\theta_c \sim 0°.16$ at $30~\text{keV}$                                                   
  $\theta_c \sim 0°.47$ at $10~\text{keV}$                                                                           $\theta_c \sim 3°.87$ at $1~\text{keV}$                                                                             
  
  For a fixed incident angle,
	  only photons below a certain cut-off energy can be reflected

  It must be noticed that in addition to [Photoelectric absorption](../../02_Zettel/Theory/Photoelectric absorption.html)
	  the impossibility to obtain a perfectly smooth surface must be taken into account 
		micro-roughness of the mirror surface causes scattering that increases as the incidence angle of radiation increases
			(remind that $1~\text{nm} = 1.24~\text{keV}$)

  **In conclusion, only a near-total reflection is really possible** 