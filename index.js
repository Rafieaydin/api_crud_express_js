"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var client_1 = require("@prisma/client");
var prisma = client_1.PrismaClient;
var app = (0, express_1["default"])();
var port = 3000;



app.listen(port, function () {
    console.log("Example app listening at http://localhost:".concat(port));
});


