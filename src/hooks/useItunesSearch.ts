import { useState, useEffect } from "react"
import searchItunes from "../api/searchItunes"
import type { ItunesResult } from "../api/searchItunes"

export default function useItunesSearch(initialQuery: string = "") {

    const [query, setQuery] = useState(initialQuery)
    const [results, setResults] = useState<ItunesResult[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        if (!query) return

        async function load() {
            try {
                setLoading(true)
                const data = await searchItunes(query)
                console.log("RAW DATA:", data)
                setResults(data.results ?? [])
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        } 

        load()
    }, [query])

    return {
        query,
        setQuery,
        results,
        loading
    }
}