import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { DrawingService } from './drawing.service';

const insertIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await DrawingService.insertIntoDB(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Data Created Successfully',
      data: result,
    });
  }
);

const getAllData: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await DrawingService.getAllData();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All data Retrived Successfully',
      data: result,
    });
  }
);

const getSingleData: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await DrawingService.getSingleData(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single data Retrived Successfully',
      data: result,
    });
  }
);

const updateById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const result = await DrawingService.updateById(id, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Data Updated Successfully',
      data: result,
    });
  }
);

const deleteById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await DrawingService.deleteById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Data Deleted Successfully',
      data: result,
    });
  }
);

export const DrawingController = {
  getSingleData,
  insertIntoDB,
  getAllData,
  deleteById,
  updateById,
};
