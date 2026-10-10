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
repoUrl: https://github.com/AtharvaParanjpe/NLPProject/tree/main/Final
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

A [second repository](https://github.com/AtharvaParanjpe/NLP_project/tree/main/NLP%20Project/semeval-2020-task-7-dataset) holds the task dataset, with its own data preparation and model scripts.

## In the repo

- [`Final/`](https://github.com/AtharvaParanjpe/NLPProject/tree/main/Final): all the code for both subtasks.
- Baselines: [`task1baseline.py`](https://github.com/AtharvaParanjpe/NLPProject/blob/main/Final/task1baseline.py) (humor score) and [`task2baseline.py`](https://github.com/AtharvaParanjpe/NLPProject/blob/main/Final/task2baseline.py) (funnier of two edits).
- Siamese networks: [on the training data](https://github.com/AtharvaParanjpe/NLPProject/blob/main/Final/Siamese_on_data_1_Task1.py) and [with the dev data merged in](https://github.com/AtharvaParanjpe/NLPProject/blob/main/Final/Siamese_with_merged_dev_data.py).
- [`zeroShot.py`](https://github.com/AtharvaParanjpe/NLPProject/blob/main/Final/zeroShot.py): the zero-shot attempt.
- [`subtask-1/`](https://github.com/AtharvaParanjpe/NLPProject/tree/main/Final/subtask-1) and [`subtask-2/`](https://github.com/AtharvaParanjpe/NLPProject/tree/main/Final/subtask-2): the data splits for each subtask.
