import camelize from 'camelize';

export const restaurantsRequest = async(location) => {
    const res = await fetch(`http://localhost:5001/mealstogo-96a1f/us-central1/placesNearby?location=${location}`);
    return await res.json();
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelize(mappedResults);
};
