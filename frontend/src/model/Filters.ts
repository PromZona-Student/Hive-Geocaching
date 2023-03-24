import { LatLng } from "leaflet";

export interface CacheTypes {
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