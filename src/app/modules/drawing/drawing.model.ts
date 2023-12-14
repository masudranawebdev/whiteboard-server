import { Schema, model } from 'mongoose';
import { DrawingModel, IDrawing } from './drawing.interface';

const drawingSchema = new Schema<IDrawing, DrawingModel>({
  lines: [
    {
      type: { type: String, enum: ['line'], required: true },
      points: [{ x: Number, y: Number }],
      color: String,
      strokeWidth: Number,
    },
  ],
  shapes: [
    {
      type: { type: String, enum: ['rectangle', 'circle'], required: true },
      position: { x: Number, y: Number },
      width: Number,
      height: Number,
      color: String,
    },
  ],
  textAnnotations: [
    {
      type: { type: String, enum: ['text'], required: true },
      content: String,
      position: { x: Number, y: Number },
      color: String,
      fontSize: Number,
    },
  ],
});

export const Drawing = model<IDrawing, DrawingModel>('Drawing', drawingSchema);
