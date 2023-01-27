"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = 3001;
const server = http_1.default.createServer();
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
