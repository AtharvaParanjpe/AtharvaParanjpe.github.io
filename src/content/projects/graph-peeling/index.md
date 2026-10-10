---
title: "Graph peeling at scale with PySpark"
summary: "Repeatedly strip low-degree vertices from a large graph in batches with PySpark, and watch it happen in a small Flask web app."
date: "2020-12-15"
period: "Rutgers · 2020"
featured: true
rank: 7
draft: false
tags:
- PySpark
- Graphs
- Flask
- Python
repoUrl: https://github.com/AtharvaParanjpe/MDSR-Project/tree/master
---

## The algorithm

Graph peeling finds the dense core of a graph by repeatedly removing its weakest parts. Given a graph *G* and a threshold *k*:

1. Find every vertex with degree ≤ *k*.
2. Remove those vertices' edges from *G*.
3. Repeat until no vertex with degree ≤ *k* remains.

## What I built

- **A PySpark implementation** that peels the graph in batches, for graphs too large to handle in one pass. It records how many nodes are removed at each iteration, and each step is a separate function that's easy to extend.
- **A Flask web app** that takes a graph and a value of *k*, then shows the input and the peeled output, rendered with Plotly and NetworkX.

This was the project for Massive Data Storage and Retrieval at Rutgers.

## In the repo

- [`graphPeel.py`](https://github.com/AtharvaParanjpe/MDSR-Project/blob/master/graphPeel.py): the PySpark peeling algorithm.
- [`app.py`](https://github.com/AtharvaParanjpe/MDSR-Project/blob/master/app.py): the Flask server.
- [`templates/ourPage.html`](https://github.com/AtharvaParanjpe/MDSR-Project/blob/master/templates/ourPage.html): the page that shows the input and output graphs.
- [`sampleInputOutput/`](https://github.com/AtharvaParanjpe/MDSR-Project/tree/master/sampleInputOutput): example runs.
- [README](https://github.com/AtharvaParanjpe/MDSR-Project#readme): how to run it locally.
