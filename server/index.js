"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.static("build"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
});
app.listen(PORT, () => {
    console.log(`Server Running on: ${PORT}`);
});
