"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3001;
//create instance of server
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("hello worlddd");
});
app.listen(PORT, () => {
    console.log("server listening on port http://localhost:" + PORT);
});
exports.default = app;
