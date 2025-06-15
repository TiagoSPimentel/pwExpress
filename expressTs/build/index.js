"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3333;
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.listen(PORT, function () {
    console.log("Express app iniciada em http://localhost:".concat(PORT, "."));
});
