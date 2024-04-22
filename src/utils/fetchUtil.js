async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if(response.ok) return data;
        else {
            console.error('Server error:', data.error.message);
            return null;
        }
    } catch(error) {
        console.error('Fetch error:', error);
        return null;
    }
}

export { getData };