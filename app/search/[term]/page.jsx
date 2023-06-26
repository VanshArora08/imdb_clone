import Results from '@/components/Results';
import React from 'react'

export default async function page({params}) {
    const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${params.term}`)
    // console.log();
    if(!res.ok){
        throw new Error("Error fetching data");
    }
    const data=await res.json();
    // console.log(data)
    const results=data.results;

  return (
    <div>
        {results && results.length===0 && (<h1 className="text-2xl text-center mx-auto mt-32">No results found</h1>)}
      {results && (<Results results={results}/>)}
    </div>
  )
}
