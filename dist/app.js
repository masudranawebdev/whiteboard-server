"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import config from '../src/config/index'
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
//using cors
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send({
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Welcome to packnshift server',
        data: {
            message: 'How can i help you sir?',
        },
    });
});
//sitemap generate end
//import route
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const sitemap_controller_1 = __importDefault(require("./app/modules/sitemap/sitemap.controller"));
const apiHandleNotFound_1 = __importDefault(require("./app/middlewares/apiHandleNotFound"));
const http_status_1 = __importDefault(require("http-status"));
const generateSlug_1 = require("./helpers/generateSlug");
//add custom api route
app.use('/api/v1', routes_1.default);
app.use('/', sitemap_controller_1.default);
const slug = (0, generateSlug_1.createSlug)("আমার সোনার বাসা বাড়ি #");
console.log(slug);
//global error handler
app.use(globalErrorHandler_1.default);
// handle not found
app.use(apiHandleNotFound_1.default);
exports.default = app;
