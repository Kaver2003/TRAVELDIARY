export const filterTravels = (travels, searchTerm) => {
    if (!searchTerm) return travels;

    const lowercasedTerm = searchTerm.toLowerCase();

    return travels.filter(travel =>
        travel.title.toLowerCase().includes(lowercasedTerm) ||
        travel.location.toLowerCase().includes(lowercasedTerm) ||
        travel.description.toLowerCase().includes(lowercasedTerm) ||
        travel.heritageSites.some(site =>
            site.toLowerCase().includes(lowercasedTerm)
        ) ||
        travel.placesToVisit.some(place =>
            place.toLowerCase().includes(lowercasedTerm)
        )
    );
};