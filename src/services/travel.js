
export const fetchUserTravels = async (userId) => {
    try {
        const response = await fetch(`/api/travels/user/${userId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch user travels:', error);
        return [];
    }
};

export const searchTravels = async (filters) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
    });

    const response = await fetch(`/api/travels?${params.toString()}`);
    return await response.json();
};


export const uploadTravelImages = async (files) => {
    const formData = new FormData();
    files.forEach(file => {
        formData.append('images', file);
    });

    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    });
    return await response.json();
};

export const getCoordinates = async (address) => {
    // Интеграция с Geocoding API
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=YOUR_TOKEN`);
    const data = await response.json();
    return data.features[0]?.center || null;
};