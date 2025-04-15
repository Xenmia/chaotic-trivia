"use client";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { TriviaQuestion, TriviaResponse } from "../intefaces/trivia";
import Trivia from "../components/Trivia";

const TriviaPage = () => {
  const [trivia, setTrivia] = useState<TriviaQuestion[] | null>(null);

  useEffect(() => {
    async function fetchTrivia(): Promise<TriviaResponse | undefined> {
      try {
        const results = await fetch(
          "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy"
        );
        if (!results.ok) {
          throw new Error("Failed to fetch");
        }
        const data: TriviaResponse = await results.json();
        return data;
      } catch (error) {
        console.error("Fetching error:", error);
      }
    }

    fetchTrivia().then((data) => {
      if (data) {
        setTrivia(data.results);
      }
    });
  }, []);

  return trivia ? <Trivia trivia={trivia}></Trivia> : <Loading></Loading>;
};

export default TriviaPage;
