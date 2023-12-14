import { DeleteResult } from '../../../interface/common';
import { IDrawing } from './drawing.interface';
import { Drawing } from './drawing.model';

const insertIntoDB = async (data: IDrawing): Promise<IDrawing> => {
  const result = await Drawing.create(data);
  return result;
};

const getAllData = async (): Promise<IDrawing[]> => {
  const result = await Drawing.find({});
  return result;
};

const getSingleData = async (id: string): Promise<IDrawing | null> => {
  const result = await Drawing.findById(id);
  return result;
};

const updateById = async (
  id: string,
  payload: Partial<IDrawing>
): Promise<IDrawing | null> => {
  const filter = { _id: id };
  const update = { ...payload };
  const options = { new: true };
  const result = await Drawing.findOneAndUpdate(filter, update, options);
  return result;
};

const deleteById = async (id: string): Promise<DeleteResult> => {
  const result = await Drawing.deleteOne({ _id: id });
  return result;
};

export const DrawingService = {
  getSingleData,
  insertIntoDB,
  getAllData,
  deleteById,
  updateById,
};
