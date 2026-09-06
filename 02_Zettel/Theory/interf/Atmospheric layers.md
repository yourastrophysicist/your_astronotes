---
layout: default
title: "Atmospheric layers"
---

the Earth's atmosphere is a vertical stack of layers with very different physical properties. each one matters differently for astronomy.

## the layers from the ground up

| layer | altitude | $T$ profile | mass fraction | astronomical role |
|---|---|---|---|---|
| **troposphere** | 0 to 10-15 km | decreases with height | $\sim 80\%$ | most of the seeing, most of the weather, most of the H$_2$O |
| **stratosphere** | 12 to 50 km | increases (ozone heating) | $\sim 19\%$ | ozone layer cuts off UV ($\lambda < 300$ nm) |
| **mesosphere** | 50 to 85 km | decreases | tiny | Na layer at $\sim 90$ km used by laser guide stars |
| **thermosphere** | 85 to 600 km | rises sharply (UV-EUV from Sun) | tiny | aurorae, ionosphere |
| **exosphere** | $> 600$ km | very thin | negligible | escape regime |

## scale height and pressure profile

in hydrostatic equilibrium with an isothermal atmosphere, pressure decreases exponentially:
$$P(z) = P_0 \exp(-z/H), \quad H = \frac{k_BT}{\mu g}$$

with mean molecular mass $\mu \approx 29$ amu and $T \approx 250$ K (rough average):
$$H \approx 8\,\text{km}$$

so for every $\sim 8$ km of altitude, the air pressure (and roughly the column density) drops by $1/e$. doubles the importance of going up:
- sea level (0 m): $P = 1013$ hPa, $X = 1.0$ at zenith.
- Mauna Kea (4200 m): $P \approx 615$ hPa, $X \approx 0.6$ at zenith.
- airborne (12 km): $P \approx 200$ hPa.
- balloon (35 km): $P \approx 5$ hPa.
- space ($> 600$ km): $P \approx 0$.

## the ionosphere

the upper atmosphere ($> 60$ km) contains free electrons produced by solar UV and X-ray ionisation. it reflects radio waves with $\lambda > 30$ m, which is why long-wavelength radio astronomy from the ground requires careful frequency choice (e.g. LOFAR low band at $\sim 30$ MHz works only when the F-layer plasma frequency is below the observing frequency).

the ionosphere also introduces phase delays that distort wide-field radio interferometry, especially at low frequencies. ionospheric calibration is a major part of LOFAR/SKA-Low data reduction.

## why high mountain tops

an observatory at $4200$ m sits above $\sim 40\%$ of the atmosphere by mass and **most of the troposphere's water vapour and turbulence**. the simultaneous gains:
- transparency improves (less H$_2$O in the NIR + sub-mm).
- extinction drops (less Rayleigh + Mie path).
- seeing improves (less turbulent air column).
- sky brightness drops (less airglow scatter).
- thermal sky drops (cooler ambient).

practical pre-2020 list: Mauna Kea ($4200$ m), Cerro Paranal ($2600$ m), Cerro Pachón ($2700$ m), La Palma ($2400$ m), San Pedro Mártir ($2800$ m), Cerro Tololo ($2200$ m). future ELTs: Cerro Armazones ($3000$ m), Maunakea-South.

## see also

- [Earth atmosphere for observations](../../../02_Zettel/Theory/Earth atmosphere for observations.md)
- [Atmospheric transparency windows](../../../02_Zettel/Theory/interf/Atmospheric transparency windows.md)
- [Atmospheric extinction](../../../02_Zettel/Theory/interf/Atmospheric extinction.md)
- [Atmospheric seeing](../../../02_Zettel/Theory/interf/Atmospheric seeing.md)
- [Sky brightness](../../../02_Zettel/Theory/Sky brightness.md)
- [Adaptive optics overview](../../../02_Zettel/Theory/interf/Adaptive optics overview.md)
