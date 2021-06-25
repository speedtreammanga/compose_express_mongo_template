import BookService from './service';
import { HttpError } from '../../config/error';
import { IBookModel } from './model';
import { NextFunction, Request, Response } from 'express';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { skip, take } = req.params
        const books: IBookModel[] = await BookService.findAll(Number(skip) || 0, Number(take) || 0);

        res.status(200).json(books);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const book: IBookModel = await BookService.findOne(req.params.id);

        res.status(200).json(book);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { uri } = req.body
        
        const book: IBookModel = await BookService.insert(req.body);

        res.status(201).json(book);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const book: IBookModel = await BookService.remove(req.params.id);

        res.status(200).json(book);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}