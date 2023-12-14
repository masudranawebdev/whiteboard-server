import { Model } from 'mongoose';


type Point ={
  x: number;
  y: number;
}

type Line ={
  type: 'line';
  points: Point[];
  color?: string;
  strokeWidth?: number;
}

type Shape ={
  type: 'rectangle' | 'circle';
  position: Point;
  width?: number;
  height?: number;
  color?: string;
}

type TextAnnotation ={
  type: 'text';
  content: string;
  position: Point;
  color?: string;
  fontSize?: number;
}

export type IDrawing = {
  lines: Line[];
  shapes: Shape[];
  textAnnotations: TextAnnotation[];
}


export type DrawingModel = Model<IDrawing, Record<string, unknown>>;
