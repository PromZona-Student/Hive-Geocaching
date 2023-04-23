import { LatLng } from "leaflet";

export interface Attributes {
    abandonedBuildingNo?: boolean;
    abandonedBuildingYes?: boolean;
    availableNo?: boolean;
    availableYes?: boolean;
    bicyclesNo?: boolean;
    bicyclesYes?: boolean; 
    boatYes?: boolean;
    challengecacheYes?: boolean;
    climbingNo?: boolean;
    climbingYes?: boolean;
    fieldPuzzleNo?: boolean; 
    fieldPuzzleYes?: boolean;
    flashlightYes?: boolean;
    hikeShortNo?: boolean;
    hikeShortYes?: boolean;
    mineYes?: boolean;
    nightNo?: boolean;
    nightYes?: boolean;
    parkingNo?: boolean;
    parkingYes?: boolean;
    parkngrabNo?: boolean;
    parkngrabYes?: boolean;
    powertrailYes?: boolean;
    rappellingYes?: boolean;
    snowshoesYes?: boolean;
    sToolYes?: boolean;
    teamworkNo?: boolean;
    teamworkYes?: boolean;
    treeclimbingNo?: boolean;
    treeclimbingYes?: boolean;
    uVYes?: boolean;
    wadingYes?: boolean;
    winterNo?: boolean;
    winterYes?: boolean;
}

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
    attributes?: Attributes
    centerPoint?: LatLng
}
