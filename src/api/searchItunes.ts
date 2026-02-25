export type ItunesResult = {
    trackId: number
    artistName: string
    trackName: string
    previewUrl?: string
    artworkUrl100?: string
}

type ItunesResponse = {
    resultCount: number
    results: ItunesResult[]
}

export default async function searchItunes(term: string): Promise<ItunesResponse> {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&limit=20`

    const response = await fetch(url)
    const data: ItunesResponse = await response.json()
console.log("searchItunes.ts DATA:", data)
    return data
}