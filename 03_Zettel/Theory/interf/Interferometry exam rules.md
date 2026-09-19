---
layout: "default"
title: "Interferometry exam rules"
---
# Interferometry, exam rules

the **Astronomical Interferometry** exam at U Padua is **oral**, conducted by Prof. Mauro D'Onofrio, in the office of the Department of Physics and Astronomy. for me, scheduled **Wednesday 3 June 2026** in the summer session.

## format

a typical D'Onofrio oral interferometry exam:

1. **opening question**: usually a broad invitation to pick a topic — "tell me about an interferometry technique you find interesting" or "what is the principle of aperture synthesis?". expect 5-10 minutes of student-led explanation
2. **derivations and equations**: D'Onofrio likes to see *physical reasoning written on paper or board*. expect: derive the angular resolution from the diffraction limit, write down Van Cittert-Zernike, sketch a (u, v) plot, walk through the CLEAN algorithm
3. **specific instrument**: pick an interferometer (VLTI, CHARA, ALMA, VLA, EHT) and describe its architecture, baselines, science capabilities
4. **science application**: a question linking technique to results — what was the first stellar diameter measurement, how does GRAVITY image S-stars, how did EHT image M87
5. **wrap-up**: a question on the future or current frontier — SKA, ngVLA, Darwin

## scope

everything in [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html) is fair game, but the exam emphasizes:

- **physics fundamentals**: Young's experiment, plane waves, Huygens, fringe visibility — block 1-2
- **the central theorem**: Van Cittert-Zernike, why visibility = Fourier transform of brightness
- **aperture synthesis**: (u, v) plane, Earth-rotation synthesis, dirty image, CLEAN
- **the atmosphere**: Kolmogorov turbulence, Fried parameter, isoplanatic patch, AO concept
- **at least one optical and one radio instrument** in detail (VLTI + ALMA is the classic pairing)
- **at least one famous result**: stellar diameters, GRAVITY S-stars, EHT M87

less emphasis on:

- exotic techniques (intensity interferometry historical, hypertelescope future)
- detailed calibration recipes (mostly graduate-research-level)
- specific software (CASA, AIPS) — it is good to mention them but no need to know every command

## what to bring

- pen and paper (the office may not have a board)
- printed [Interferometry equation sheet](Interferometry%20equation%20sheet.html)
- mental sketch of: a (u, v) plot, the dirty beam, the Airy pattern, the speckle pattern
- two or three illustrative numbers: angular resolution of VLTI ($\sim 1$ mas), of ALMA ($\sim 30$ mas), of EHT ($\sim 20$ μas), of HST ($\sim 0.05''$)

## how to study (oral exam)

ORAL exam = retrieval, not memorization of equations. four habits:

1. **explain out loud**: simulate the oral by speaking the explanation, ideally to another person or to a recorder. silently re-reading does not work
2. **draw**: every concept should be paired with a sketch. (u, v) plot, fringe pattern, Airy disk, dirty beam, CLEAN iteration
3. **link to instruments**: every theoretical concept tied to a real instrument. e.g. "this is why VLTI uses delay lines"
4. **prepare a 5-minute opener**: pick a favourite topic (mine: aperture synthesis + APSYNSIM) and rehearse a confident 5-min explanation. opens the exam strong

## the danger list

things that have killed past exam attempts:

1. **confusing visibility amplitude and phase**: amplitude is what you measure directly, phase is what closure phase recovers. mixing them up loses easy points
2. **misstating Van Cittert-Zernike**: it is the **brightness distribution → visibility** Fourier transform, not the reverse
3. **forgetting the role of the atmosphere**: in optical it randomizes phases, in radio it mostly affects amplitude (and sometimes phase at high frequency)
4. **calling CLEAN "fitting"**: it is *iterative point-source subtraction*, not parameter fitting
5. **being vague about resolution**: $\theta \approx \lambda/B$ should come instantly with a numerical example. for $\lambda = 1$ mm and $B = 10$ km: $\theta \approx 0.02''$ — that is ALMA's typical resolution

## the best-case opener

a confident first answer to the inevitable broad question. mine: "I'd like to talk about **aperture synthesis as the engine of modern high-resolution astrophysics**, starting from Young's two-slit experiment, going through Van Cittert-Zernike, the (u, v) plane, and ending with how CLEAN and self-calibration recover an image. along the way I'll show how VLTI and ALMA implement these ideas, and finish with the EHT M87 result."

three minutes of structured talk demonstrates I have the complete mental map. D'Onofrio will then probe specific points.

## see also

- [Interferometry course intro](Interferometry%20course%20intro.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)
- [Interferometry equation sheet](Interferometry%20equation%20sheet.html)
- Exams summer 2026 master plan

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Interferometry%20course%20intro.html" class="backlink-item">Interferometry course intro</a></li>
    <li class="backlink-item-wrap"><a href="../Interferometry%20equation%20sheet.html" class="backlink-item">Interferometry equation sheet</a></li>
    <li class="backlink-item-wrap"><a href="Interferometry%20course%20intro.html" class="backlink-item">Interferometry course intro</a></li>
    <li class="backlink-item-wrap"><a href="Interferometry%20equation%20sheet.html" class="backlink-item">Interferometry equation sheet</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
  </ul>
</div>

