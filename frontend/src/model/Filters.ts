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
    1?: boolean;
    1.5?: boolean;
    2?: boolean;
    2.5?: boolean;
    3?: boolean;
    3.5?: boolean;
    4?: boolean;
    4.5?: boolean;
    5?: boolean;
}  

export const initFilters: Filters = {};

export const DEFAULT_IS_PUBLIC = "julkaistu";

export interface Filters{
    limit?: number
    customRule?: string
    maxDistance?: number
    cacheTypes?: CacheTypes
    size?: CacheSize
    nameContains?: string
    description?: string
    difficulty?: Difficulty
    terrain?: Array<string>
    isPublic?: string
    publicSince?: string
    publicUntil?: string
    attributesSelectType?: string
    attributes?: Array<string>
    centerPoint?: LatLng
}
