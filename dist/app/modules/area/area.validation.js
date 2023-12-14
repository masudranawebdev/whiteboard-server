"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        location: zod_1.z.array(zod_1.z.string({ required_error: 'Location is Required!' })),
    }),
});
exports.AreaValidation = {
    createZodSchema,
};
