'use client'

import SearchBar from "@/search/courses/SearchBar";
import SearchResultList from "@/search/courses/SearchResultList";
import { useState } from "react";

export default function Search() {
  const [results, setResults] = useState([])
  return (
    <>
      <SearchBar  setResults={setResults}/>
      <SearchResultList results={results}/>
    </>
  );
}