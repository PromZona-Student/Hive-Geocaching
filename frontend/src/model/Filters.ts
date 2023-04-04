import { LatLng } from "leaflet";

export interface CacheTypes {
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

export const initFilters: Filters = {};

export interface Filters{
    limit?: number
    customRule?: string
    maxDistance?: number
    cacheTypes?: CacheTypes
    size?: CacheSize
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
