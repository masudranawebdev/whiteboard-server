"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewHead = void 0;
const mongoose_1 = require("mongoose");
const ReviewHeadSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.ReviewHead = (0, mongoose_1.model)('ReviewHead', ReviewHeadSchema);
