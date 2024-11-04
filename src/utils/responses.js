import { StatusCodes } from "http-status-codes";

export const errorResponse = (error) => {
    console.log(error);
    if(error.status) {
        return res.status(error.status).json({
            message: error.message,
            success: false
        });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Internal server error',
        success: false
    });
}

export const successResponse = (data, statusCode, message) => {
    return res.status(statusCode).json({
        success: true,
        data,
        message
    });
}