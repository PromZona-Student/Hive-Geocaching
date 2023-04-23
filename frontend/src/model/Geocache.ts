export interface Geocache{

    referenceCode: string;
    name: string;
    isMeeting: boolean;
    placedDate: string;
    publishedDate: string;
    type: string;
    size: string;
    postedCoordinates: { //coordinates not sent from backend if the user doesn't have permission to view them
        latitude?: number;
        longitude?: number;  
    };
    lastVisitedDate: string,
    isPremiumOnly: boolean,
    shortDescription: string,
    longDescription: string,
    hints: string,
    location: {
        country: string;
        countryId: number;
        state: string;
        stateId: number;
    };
    ownerAlias: string;
    difficulty: number;
    terrain: number;
}

//Map only fetches minimal information for showing the cache on the map. Details are fetched only when clicking a cache
export interface GeocacheMapDetails{
    referenceCode: string;
    postedCoordinates: {
        latitude: number;
        longitude: number;
    }
}