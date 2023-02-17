export interface Geocache{
    referenceCode: string;
    name: string;
    placedDate: string;
    publishedDate: string;
    type: string;
    size: string;
    postedCoordinates: {
        latitude: number;
        longitude: number;  
    };
    location: {
        country: string;
        state: string;
    };
    lastVisitedDate: string,
    isPremiumOnly: boolean,
    shortDescription: string,
    longDescription: string,
    hints: string,
}