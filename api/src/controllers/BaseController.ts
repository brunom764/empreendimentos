import { Response } from 'express';

export default class BaseController {
    handleResponse(res: Response, data: any): Response {
        return res.json(data);
    }
  
    handleError(res: Response, error: Error): Response {
        return res.status(500).json({ error: error.message });
    }
}