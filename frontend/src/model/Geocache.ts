export interface Geocache{

    referenceCode: string;
    name: string;
    placedDate: string;
    publishedDate: string;
    type: GeoCacheType;
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
    distance?: number;
}

//Map only fetches minimal information for showing the cache on the map. Details are fetched only when clicking a cache
export interface GeocacheMapDetails{
    referenceCode: string;
    postedCoordinates: {
        latitude: number;
        longitude: number;
    }
    type: GeoCacheType
}

export type GeoCacheType = keyof typeof GeoCacheMapIconUrls;

export const defaultMapIconUrl = "/katko2.gif";
export const defaultGeoCacheTypeIconUrl = "/cacheT.gif";

export const GeoCacheMapIconUrls = {
    peruskätkö: "/katko2.gif",
    multikätkö: "/katko0.gif",
    mysteerikätkö: "/katko3.gif",
    geolodju: "/katko5.gif",
    geokohde: "/katko8.gif",
    whereigokätkö: "/katko1.gif",
    virtuaalikätkö: "/katko4.gif",
    webcamkätkö: "/katko7.gif",
    tapahtuma: "/katko6.gif",
    megatapahtuma: "/katko6.gif",
    siivoustapahtuma: "/katko6.gif",
    yhteisöjuhla: "/katko6.gif",
};

export const GeoCacheTypeIconUrls = {
    peruskätkö: "/cacheT.gif",
    multikätkö: "/cacheM.gif",
    mysteerikätkö: "/cacheU.gif",
    geolodju: "/cacheB.gif",
    geokohde: "/cacheR.gif",
    whereigokätkö: "/cacheWh.gif",
    virtuaalikätkö: "/cacheV.gif",
    webcamkätkö: "/cacheW.gif",
    tapahtuma: "/cacheE.gif",
    megatapahtuma: "/cacheME.gif",
    siivoustapahtuma: "/cacheE.gif",
    yhteisöjuhla: "/3653.gif",
};