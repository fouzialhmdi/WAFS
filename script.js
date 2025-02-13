async function getData() {
    const url = "https://icanhazdadjoke.com/";
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message)
    }

    }

    // Bron MDN: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // Bron ChatGPT: prompt: "Ik heb de volgende code om een api te fetchen van MDN. Wat is de volgende stap om de data te tonen op mijn eigen pagina?  async function getData() {
    // const url = "https://example.org/products.json";
    //try {
    //const response = await fetch(url);
    //if (!response.ok) {
    //throw new Error(`Response status: ${response.status}`);} 
    // const json = await response.json();"
