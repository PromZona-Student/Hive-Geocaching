import { Geocache } from "../../../frontend/src/model/Geocache";
import { randomBytes } from "crypto";
import seedrandom from "seedrandom";
import fs from "fs"
import path from "path"

seedrandom("geoCacheRandomSeed123", { global: true });

const words = ["Harvinainen", "Virallinen", "Outo", "Hauska", "Metsä", "Luonto"]

function randomNumInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function randomIntInRange(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomDate(startDate: number, endDate: number) {
    return new Date(randomIntInRange(startDate, endDate));
}

function randomBool() {
    return Math.random() > 0.5 ? true : false;
}

function randomSentence(length: number) {
    let list = [];
    for (let i = 0; i < length; i++) {
        list.push(words[randomIntInRange(0, words.length)])
    };
    return list.join(" ").trim();
}

function randomId(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
    }
    return result;
}

export function generateGeoCaches(amount: number, isCache: boolean) {
    const geocaches: Array<Geocache> = [];

    if (isCache) {
        // Specific cache has been temporarily added for testing
        const placedDate = new Date();
        placedDate.setMinutes(placedDate.getMinutes() - 58);
        const cache1: Geocache = {

            referenceCode: "abc123",
            name: "Testikätkö",
            isMeeting: false,
            placedDate: placedDate.toISOString(),
            publishedDate: placedDate.toISOString(),
            type: "Multikätkö",
            size: "Joku",
            postedCoordinates: {
                latitude: randomNumInRange(60.085318, 68.542486),
                longitude: randomNumInRange(21.243898, 31.436180)
            },
            lastVisitedDate: placedDate.toISOString(),
            isPremiumOnly: false,
            shortDescription: "Description",
            longDescription: "Description",
            hints: "Ei vihjeitä",
            location: {
                country: "Finland",
                countryId: 1,
                state: "Pirkanmaa",
                stateId: 50,
            },
            ownerAlias: "user_1",
            difficulty: 3,
            terrain: 2
        }

        geocaches.push(cache1);

        const placedDate2 = new Date();
        placedDate2.setMinutes(placedDate2.getMinutes() - 15);
        const cache2: Geocache = {

            referenceCode: "zyx",
            name: "Esimerkkikätkö",
            isMeeting: false,
            placedDate: placedDate2.toISOString(),
            publishedDate: placedDate2.toISOString(),
            type: "Multikätkö",
            size: "Joku",
            postedCoordinates: {
                latitude: randomNumInRange(60.085318, 68.542486),
                longitude: randomNumInRange(21.243898, 31.436180)
            },
            lastVisitedDate: placedDate2.toISOString(),
            isPremiumOnly: false,
            shortDescription: "Description",
            longDescription: "Description",
            hints: "Ei vihjeitä",
            location: {
                country: "Finland",
                countryId: 1,
                state: "Pirkanmaa",
                stateId: 50,
            },
            ownerAlias: "user_2",
            difficulty: 2,
            terrain: 5
        }

        geocaches.push(cache2);
    } else {
        // Specific meeting has been temporarily added for testing
        const placedDate = new Date();
        placedDate.setMinutes(placedDate.getMinutes() - 58);
        const meeting1: Geocache = {

            referenceCode: "M-abc321",
            name: "Esimerkkimiitti",
            isMeeting: true,
            placedDate: placedDate.toISOString(),
            publishedDate: placedDate.toISOString(),
            type: "Tapahtuma",
            size: "Joku",
            postedCoordinates: {
                latitude: randomNumInRange(60.085318, 68.542486),
                longitude: randomNumInRange(21.243898, 31.436180)
            },
            lastVisitedDate: placedDate.toISOString(),
            isPremiumOnly: false,
            shortDescription: "Description",
            longDescription: "Description",
            hints: "Ei vihjeitä",
            location: {
                country: "Finland",
                countryId: 1,
                state: "Pirkanmaa",
                stateId: 50,
            },
            ownerAlias: "user_1",
            difficulty: 3,
            terrain: 2
        }

        geocaches.push(meeting1);

        const placedDate2 = new Date();
        placedDate2.setMinutes(placedDate2.getMinutes() - 15);
        const meeting2: Geocache = {

            referenceCode: "zyx",
            name: "Testikokous",
            isMeeting: false,
            placedDate: placedDate2.toISOString(),
            publishedDate: placedDate2.toISOString(),
            type: "Tapahtuma",
            size: "Joku",
            postedCoordinates: {
                latitude: randomNumInRange(60.085318, 68.542486),
                longitude: randomNumInRange(21.243898, 31.436180)
            },
            lastVisitedDate: placedDate2.toISOString(),
            isPremiumOnly: false,
            shortDescription: "Description",
            longDescription: "Description",
            hints: "Ei vihjeitä",
            location: {
                country: "Finland",
                countryId: 1,
                state: "Pirkanmaa",
                stateId: 50,
            },
            ownerAlias: "user_2",
            difficulty: 2,
            terrain: 5
        }
        geocaches.push(meeting2);
    }

    for (let i = 0; i < amount; i++) {
        const placedDate = randomDate((new Date(1999, 2)).getTime(), Date.now());
        let cacheName = `Geocache ${i}`;
        if(!isCache) cacheName = `Miitti ${i}`;
        let cacheType = "GeocachingHq";
        if(!isCache) cacheType = "Tapahtuma";
        const cache: Geocache = {
            referenceCode: randomId(6),
            name: cacheName,
            isMeeting: !isCache,
            placedDate: placedDate.toISOString(),
            publishedDate: placedDate.toISOString(),
            type: cacheType,
            size: "Other",
            postedCoordinates: {
                latitude: randomNumInRange(60.085318, 68.542486),
                longitude: randomNumInRange(21.243898, 31.436180)
            },
            lastVisitedDate: placedDate.toISOString(),
            isPremiumOnly: randomBool(),
            shortDescription: "This is the geocache's description",
            longDescription: "This is the geocache's description",
            hints: "Ei vihjeitä",
            location: {
                country: "Finland",
                countryId: 1,
                state: "Pirkanmaa",
                stateId: 50,
            },
            ownerAlias: "user_" + randomIntInRange(3, 90),
            difficulty: randomIntInRange(1, 5),
            terrain: randomIntInRange(1, 5)
        }
        geocaches.push(cache);
    }

    return geocaches;
}
