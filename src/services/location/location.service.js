import camelize from "camelize";
 
export const locationRequest = async (searchTerm) => {
    const res = await fetch(`http://localhost:5001/mealstogo-96a1f/us-central1/geocode?city=${searchTerm}`);
    return await res.json();
};

export const locationTransform = (result) => {
    console.log(result)
    const formattedResults = camelize(result);
    const { geometry = {} } = formattedResults.results[0];
    const { lat, lng } = geometry.location;
    
    return { lat, lng, viewport: geometry.viewport };
};