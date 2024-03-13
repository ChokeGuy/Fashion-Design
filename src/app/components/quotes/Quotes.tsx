"use client";
import { useGetQuotesQuery } from "@/lib/features/quotes/quotesApiSlice";
import { useState } from "react";
import styles from "./Quotes.module.css";

const options = [5, 10, 20, 30];

export const Quotes = () => {
  const [numberOfQuotes] = useState(10);
  // Using a query hook automatically fetches data and returns query values
  const { isError, isLoading, isSuccess } = useGetQuotesQuery(numberOfQuotes);

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return <div>Hello Quotes!</div>;
  }

  return null;
};
