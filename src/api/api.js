import searchItunes from "./searchItunes.mjs";

async function test() {
    
    const result1 = await searchItunes("adele")
    console.log("Adele:", result1)

    const result2 = await searchItunes("metallica")
    console.log("Metallica:", result2)
}

test()