---
layout: default
title: "Coded Mask"
---

If there is nothing between a detector and the source,
	the detector cannot spatially distinguish the direction of the incoming photons
		and no image is formed

By using an aperture (**mask**) it is possible to select the incoming light rays
	and create an image of the source — this is the **pinhole camera** principle

<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.26.56.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.26.56" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
---

A **coded mask** is like a chessboard
	where some parts absorb radiation
		and some others let the radiation reach the detector
	it is less sensitive than a [Mechanical Collimator](../../02_Zettel/Theory/Mechanical Collimator.html)
		but it allows to generate images
			reducing the problem of **source confusion**
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.27.29.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.27.29" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
Examples:
	**INTEGRAL** has the instrument IBIS/ISGRI
		hosting three coded masks covering $3~\text{keV}$–$10~\text{MeV}$ energy range
			with a CdTe detector ($Z_{Cd} = 48$ and $Z_{Te} = 52$)
	**Swift** has the instrument BAT
		with one coded mask covering $15$–$200~\text{keV}$
			and a CdZnTe detector

---

## How it works

The result on the detector is not a real image of the field-of-view,
	but a **pattern**:
		the flux of incoming photons is spatially modulated according to a mathematical sequence
			and the pattern is a **convolution** of the photon flux with the mask

Therefore, in order to restore the real image it is necessary to apply the **deconvolution process**

If $D$ is the shadowgram projected by the mask onto the detector,
	$B$ is the background signal,
		$M$ is the array describing the mask (1 for open pixels, 0 for closed pixels),
			and $S$ is the observed region of the sky:
$$D = S \otimes M + B$$

Deconvolving means searching for a decoding array $G$ such that:
$$M \otimes G = \delta$$

where $\delta$ is the Dirac function.
The reconstructed image of the sky is:
$$S' = D \otimes G = S \otimes M \otimes G + B \otimes G = S \otimes \delta + B \otimes G = S + B \otimes G$$

where $B \otimes G$ is the background to be subtracted
