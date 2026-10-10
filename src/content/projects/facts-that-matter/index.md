---
title: "Facts That Matter"
summary: "Poster paper at ISWC 2020: a BERT-based model that ranks facts about an entity by how relevant they are to a natural-language query."
date: "2020-09-01"
period: "ISWC 2020"
featured: true
rank: 4
draft: false
tags:
- Research
- NLP
- BERT
- Knowledge graphs
repoUrl: https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries/tree/master/main
---

## The question

When someone asks about an entity, such as a person, a company or a place, a knowledge graph can return hundreds of facts about it. Which ones actually answer the question?

## The approach

A BERT-based neural model that ranks predicate–object pairs by how relevant they are to a natural-language query. Rankings were evaluated with NDCG.

This was my research at Rutgers, published as a poster paper at the International Semantic Web Conference (ISWC) in 2020. Years later, knowledge graphs show up again in my work at AWS ([one access model across three data stores](/projects/access-controlled-analytics-api)).

## In the repo

- [`main/`](https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries/tree/master/main): the models. These are the [pointwise](https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries/blob/master/main/pointWiseBertWithTraining.py) and [pairwise](https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries/blob/master/main/pairWiseBertWithTraining.py) BERT rankers, plus [BiLSTM](https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries/blob/master/main/bilstm_model.py) and [BERT without fine-tuning](https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries/blob/master/main/bert_without_fine_tuning.py) for comparison.
- [`data/`](https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries/tree/master/data): the fact-ranking dataset with relevance targets.
- [`utils/`](https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries/tree/master/utils): preprocessing, the train/test split and plots.
- [The notebook](https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries/blob/master/FinalDraft_Reduced_Dataset_factRankingModelRowWise.ipynb): the final experiment end to end.
- [README](https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries#readme): the citation for the ISWC 2020 paper.
