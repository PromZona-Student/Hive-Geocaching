import { LatLng } from "leaflet";

export interface CacheTypes {
    peruskätkö?: boolean;
    multikätkö?: boolean;
    mysteerikätkö?: boolean;
    geolodju?: boolean;
    geokohde?: boolean;
    whereigokätkö?: boolean;
    virtuaalikätkö?: boolean;
    webcamkätkö?: boolean;
    tapahtuma?: boolean;
    megatapahtuma?: boolean;
    siivoustapahtuma?: boolean;
    yhteisöjuhla?: boolean;
    vainOmiaMerkittyjäSisältäenMysteerit?: boolean;
    vainOmiaMerkittyjäSisältäenMultit?: boolean;
    vainRatkaistutMysteerit?: boolean;
    vainRatkaistutMultit?: boolean;
}

export interface CacheSize {
    mikro?: boolean;
    pieni?: boolean;
    normaali?: boolean;
    suuri?: boolean;
    virtuaali?: boolean;
    muu?: boolean;
    tuntematon?: boolean;
}

export interface Difficulty {
    yksi?: boolean;
    puolitoista?: boolean;
    kaksi?: boolean;
    kaksijapuoli?: boolean;
    kolme?: boolean;
    kolmejapuoli?: boolean;
    neljä?: boolean;
    neljäjapuoli?: boolean;
    viisi?: boolean;
}  

// const dif = ["1", "1,5", "2", "2,5", "3", "3,5", "4", "4,5", "5"];

export const initFilters: Filters = {};

export interface Filters{
    limit?: number
    customRule?: string
    maxDistance?: number
    cacheTypes?: CacheTypes
    size?: CacheSize
    nameContains?: string
    description?: string
    difficulty?: Difficulty
    //difficulty?: Array<string>
    terrain?: Array<string>
    isPublic?: string
    publicSince?: string
    publicUntil?: string
    attributesSelectType?: string
    attributes?: Array<string>
    centerPoint?: LatLng
}
