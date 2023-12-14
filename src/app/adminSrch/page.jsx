'use client'
import SearchBar from "@/search/instructor/SearchBar";
import SearchResultList from "@/search/instructor/SearchResultList";
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