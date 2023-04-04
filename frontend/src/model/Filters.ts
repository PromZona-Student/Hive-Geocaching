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

export const initFilters: Filters = {};

export interface Filters{
    limit?: number
    customRule?: string
    maxDistance?: number
    cacheTypes?: CacheTypes
    size?: Array<string>
    nameContains?: string
    description?: string
    difficulty?: Array<string>
    terrain?: Array<string>
    isPublic?: string
    publicSince?: string
    publicUntil?: string
    attributesSelectType?: string
    attributes?: Array<string>
    centerPoint?: LatLng
}