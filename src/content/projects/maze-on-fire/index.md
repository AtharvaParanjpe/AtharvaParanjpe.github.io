---
title: "Escaping a maze that's on fire"
summary: "Search algorithms for a maze where fire spreads every turn: plain depth-first search, then a version that tracks the fire and avoids it."
date: "2019-10-01"
period: "Rutgers · 2019"
draft: false
tags:
- Algorithms
- Search
- Python
repoUrl: https://github.com/AtharvaParanjpe/AI-Project/tree/master
---

The first project for CS520 (Intro to AI) at Rutgers. The agent has to get from start to goal through a maze. In the harder version, the maze is on fire, and the fire spreads as the agent moves.

The repository has two solvers: a simple depth-first search, and a version that tracks the spreading fire and plans around it.

## In the repo

- [Simple DFS](https://github.com/AtharvaParanjpe/AI-Project/blob/master/Assignment1_CS-520_Part4_Simple_DFS.py): the baseline solver.
- [With fire tracking](https://github.com/AtharvaParanjpe/AI-Project/blob/master/Assignment1_CS-520_Part4_With_Fire_Tracking.py): the solver that plans around the fire.
- [Parts 1 and 2](https://github.com/AtharvaParanjpe/AI-Project/blob/master/Assignment1_CS-520_Part1%262.py): the earlier parts of the assignment.
- [`Final_Merged.py`](https://github.com/AtharvaParanjpe/AI-Project/blob/master/Final_Merged.py): everything combined.
