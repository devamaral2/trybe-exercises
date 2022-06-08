"use strict";
// ./models/connection.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise")); // instalar mysql2 e dotenv
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = promise_1.default.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'books_api'
});
