import { useState, useEffect } from "react"
import useItunesSearch from "../hooks/useItunesSearch"


export default function ItunesSearch() {

    const [input, setInput] = useState("")

    const { setQuery, results, loading } = useItunesSearch()


    //API call reagiert auf query
    /* useEffect(() => {
        async function load() {
            //console.log("EFFECT RUNS, query:", query)
            setLoading(true)

            try {
                const data = await searchItunes(query)
                console.log("DATA:", data)
                console.log("IS ARRAY:", Array.isArray(data))

                setResults(data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        if (query) load()
        
    }, [query])  */    //Das ist Dependency Array

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setQuery(input.trim())
    }

    console.log("RESULTS:", results)
    
    return (
        <div style={{ padding: 20 }}>

            <h2>iTunes Search</h2>

            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Artist or song..."
                />

                <button type="submit">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}

            <ul>
                {Array.isArray(results) &&
                    results.map((item, i) => (
                        <li key={item.trackId ?? i}>
                            {item.artistName} – {item.trackName}
                            {item.previewUrl && 
                                <audio controls src={item.previewUrl} />
                            }
                        </li>
                ))}
            </ul>
            
        </div>
    )
}