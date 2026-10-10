---
title: "Checking a suicide-risk model for bias"
summary: "Research at the Rutgers School of Social Work: does a model that flags suicide risk work equally well for men and women? Built on synthetic patient records."
date: "2021-08-01"
period: "Rutgers · 2020 — 2021"
featured: true
rank: 5
draft: false
tags:
- Research
- Fairness
- Python
- scikit-learn
repoUrl: https://github.com/AtharvaParanjpe/GenderBias/tree/master
---

## The question

If a model learns to flag patients at risk of suicide, does it work equally well for everyone? Or does it miss more people of one gender, race or region?

I worked on this as a research assistant at the Rutgers School of Social Work.

## The data

[Synthea's SyntheticMass](https://synthea.mitre.org/) data: realistic but fully synthetic patient records, so no real patient's privacy is at risk.

- The records span 8 CSV files of patients and their visits. Because the data was large, it was split into 12 parts and filtered part by part.
- Visits mentioning self-harm or suicide marked a patient as a positive example. A random sample of other patients served as negatives.
- For each positive patient, I also recorded their earlier visits, to see which factors came before a high-risk visit.

## The method

To test for gender bias, I split the data into male and female patients and balanced the two groups with SMOTE. I then trained three models on each group: linear regression, logistic regression and a support vector machine. For each one I compared the error profile (true and false positive and negative rates, accuracy and AUC) between the groups.

A model can look accurate overall while failing one group far more often than another. Comparing the error rates per group is how you catch that.

## In the repo

- [README](https://github.com/AtharvaParanjpe/GenderBias#readme): the full write-up of the data preparation, models and metrics.
- [`buildDataset.py`](https://github.com/AtharvaParanjpe/GenderBias/blob/master/buildDataset.py): filters visits and builds the positive and negative examples.
- [`dataBalancer.py`](https://github.com/AtharvaParanjpe/GenderBias/blob/master/dataBalancer.py): balances the male and female groups.
- [`model.py`](https://github.com/AtharvaParanjpe/GenderBias/blob/master/model.py) and [`comparisonModel.py`](https://github.com/AtharvaParanjpe/GenderBias/blob/master/comparisonModel.py): train the three models and compare their error rates per group.
- [`Statistical Graphs/`](https://github.com/AtharvaParanjpe/GenderBias/tree/master/Statistical%20Graphs) and [`Comparison Images/`](https://github.com/AtharvaParanjpe/GenderBias/tree/master/Comparison%20Images): the resulting charts.
