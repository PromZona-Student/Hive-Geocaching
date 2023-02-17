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

export function generateGeoCaches(amount: number) {
    const geocaches: Array<Geocache> = [];

    for (let i = 0; i < amount; i++) {
        const placedDate = randomDate((new Date(1999, 2)).getTime(), Date.now());
        const cache: Geocache = {
            referenceCode: randomId(6),
            name: randomSentence(3),
            placedDate: placedDate.toISOString(),
            publishedDate: placedDate.toISOString(),
            type: "GeocachingHq",
            size: "Other",
            postedCoordinates: {
                latitude: randomNumInRange(60.085318, 68.542486),
                longitude: randomNumInRange(21.243898, 31.436180)
            },
            location: {
                country: "Finland",
                state: "Tampere"
            },
            lastVisitedDate: placedDate.toISOString(),
            isPremiumOnly: randomBool(),
            shortDescription: randomSentence(3) + " " + "kätkö",
            longDescription: randomSentence(6) + " " + "kätkö",
            hints: randomSentence(4),
        }
        geocaches.push(cache);
    }
    return geocaches;
}



/**
const filePath = path.join(process.cwd(), "..", "src", "data", "geocaches.json");
fs.writeFile(filePath, JSON.stringify(geocaches), {
    encoding: "utf8",
}, (err: Error) => {
    if(err){
        console.log("error writing to file");
        console.log(err);
    }
    else{
        console.log(`Wrote ${amount} geocaches`)
    }
})**/