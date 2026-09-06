---
layout: default
title: "Pandas for tabular astrophysics data"
---

# Pandas for tabular astrophysics data

pandas is the python tabular-data library. think of it as numpy with column names, missing-value handling, and row-level operations. for any catalog with multiple columns of different types (RA, Dec, magnitudes, redshift, classification flags), pandas is far more ergonomic than raw numpy.

## the two core objects

- **Series**: a 1D labeled array. like a numpy 1D array with named entries
- **DataFrame**: a 2D table. like a dict of Series, or a numpy 2D array with named columns and indexed rows

## creating dataframes

```python
import pandas as pd

# from a dict
df = pd.DataFrame({
    "ra":  [10.5, 11.2, 12.0],
    "dec": [-45.3, -44.8, -42.1],
    "mag": [18.2, 17.5, 19.1],
})

# from a CSV
df = pd.read_csv("catalog.csv")

# from a FITS table
from astropy.table import Table
df = Table.read("catalog.fits").to_pandas()

# from numpy
df = pd.DataFrame(arr, columns=["a", "b", "c"])
```

## inspection

```python
df.head(5)                # first 5 rows
df.tail(5)                # last 5 rows
df.shape                  # (rows, cols)
df.columns                # column names
df.dtypes                 # types
df.describe()             # summary statistics
df.info()                 # memory usage, dtypes, non-null counts
```

## selecting

```python
df["mag"]                              # one column → Series
df"ra", "dec"                      # multiple columns → DataFrame
df.iloc[0]                             # row by position
df.iloc[0:5]                           # rows 0-4
df.loc[df["mag"] < 18]                 # rows by condition
df.loc[df["mag"] < 18, "ra"]           # column subset of those rows
```

## adding/transforming columns

```python
df["color"] = df["mag_g"] - df["mag_r"]
df["flux"] = 10 ** (-0.4 * df["mag"])
df["bright"] = df["mag"] < 18         # boolean column
```

## groupby (the killer feature)

partition the data by one or more columns, compute aggregates per group:

```python
df.groupby("class")["mag"].mean()             # mean magnitude per class
df.groupby("class").agg({"mag": ["mean", "std"], "ra": "count"})

# bin by redshift
df["z_bin"] = pd.cut(df["z"], bins=10)
df.groupby("z_bin")["mag"].median()
```

## merging catalogs

```python
df_merged = pd.merge(df1, df2, on="object_id", how="inner")    # inner join
df_left = pd.merge(df1, df2, on="object_id", how="left")        # keep all df1
```

## handling missing values

```python
df.isna().sum()                       # count NaN per column
df.dropna()                           # drop rows with any NaN
df.fillna(0)                          # fill NaN with 0
df["mag"] = df["mag"].fillna(df["mag"].median())
```

## time series

```python
df["time"] = pd.to_datetime(df["timestamp"])
df = df.set_index("time")
df.resample("1H").mean()              # hourly averages
```

## save

```python
df.to_csv("processed.csv", index=False)
df.to_parquet("processed.parquet")     # binary, much faster
```

## when pandas is the right tool

- **catalog manipulation**: SDSS, Gaia, exoplanet archive
- **time-series with metadata**: light curves with quality flags
- **mixed types**: classification labels alongside continuous measurements
- **multi-step pipelines**: read → filter → transform → group → save

## when numpy is better

- **pure numerical computation**: integrators, ODE solvers, FFTs
- **homogeneous arrays of floats**: pandas adds overhead
- **GPU/JIT acceleration**: numpy plays better with jax/numba

## astrophysics use cases

- loading a catalog of binary black hole mergers (the exam-template format)
- cross-matching two surveys
- splitting a sample by redshift bin and computing color-magnitude statistics
- aggregating photometric points into nightly averages

## see also

- [Numpy arrays vs Python lists](../../02_Zettel/Theory/Numpy arrays vs Python lists.md)
- [Scipy and astropy quick reference](../../02_Zettel/Theory/Scipy and astropy quick reference.md)
- [Matplotlib plotting essentials](../../02_Zettel/Theory/Matplotlib plotting essentials.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
