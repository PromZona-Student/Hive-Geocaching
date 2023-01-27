"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.geocacheRouter = void 0;
const express_1 = require("express");
exports.geocacheRouter = (0, express_1.Router)();
const geocaches = [
    {
        id: "GCK25A",
        latitude: 10,
        longitude: 20
    },
    {
        id: "GCK25B",
        latitude: -10,
        longitude: 1
    }
];
exports.geocacheRouter.get("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.json(geocaches);
}));
exports.geocacheRouter.get("/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const geocache = geocaches.find(g => g.id === request.params.id);
    if (geocache) {
        response.json(geocache);
    }
    else {
        response.status(404).send("No geocache found");
    }
}));
