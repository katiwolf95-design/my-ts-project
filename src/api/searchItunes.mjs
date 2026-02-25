export default async function searchItunes(term) {
    const url = `https://itunes.apple.com/search?term=${term}`

    const response = await fetch(url)
    const data = await response.json()

    return data
}