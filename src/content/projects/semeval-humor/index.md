---
title: "Can a model tell which headline is funnier?"
summary: "SemEval-2020 Task 7: rating how funny a news headline becomes after a one-word edit, and picking the funnier of two edits. Siamese networks, a baseline and a zero-shot attempt."
date: "2021-05-01"
period: "Rutgers · 2021"
featured: true
rank: 6
draft: false
tags:
- NLP
- Deep learning
- Python
repoUrl: https://github.com/AtharvaParanjpe/NLPProject
---

## The task

SemEval-2020 Task 7 takes real news headlines and changes a single word to make them funny. Then it asks two questions:

1. **How funny is the edited headline?** Predict a humor score.
2. **Which of two edits is funnier?** Pick the winner.

Humor depends on context, surprise and world knowledge, which makes this hard for language models.

## What I built

- Baselines for both subtasks, as a point of comparison.
- **Siamese networks** that read the original and edited headlines side by side. Several variants were trained, including one on the merged training and dev data.
- Dense models for the second subtask.
- A **zero-shot** attempt that uses no task-specific training at all.

A [second repository](https://github.com/AtharvaParanjpe/NLP_project) holds the task dataset.
