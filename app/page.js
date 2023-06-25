// import React from 'react'
// import { Children } from 'react/cjs/react.production.min'
import Results from "@/components/Results"
const API_KEY=process.env.TMDB_API_KEY

const Home = async ({searchParams} ) => {
  const genre= searchParams.genre || "fetchTrending"
  const res= await fetch(`https://api.themoviedb.org/3/${genre==="fetchTopRated"?"movie/top_rated":"trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,{next:{revalidate:10000 }})

  if(!res.ok){
    throw new Error("failed to fetch data")
  }
  
  const data= await res.json()
  const results=data.results;

  return (
    <div>
      <Results results={results}/>
    </div>
  ) 
}

export default Home
