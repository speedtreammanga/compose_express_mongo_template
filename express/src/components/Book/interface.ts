import { IBookModel } from './model';

/**
 * @export
 * @interface IBookService
 */
export interface IBookService {

    /**
     * @param {number} skip
     * @param {numer} count
     * @returns {Promise<IBookModel[]>}
     * @memberof IBookService
     */
    findAll(skip?: number, limit?: number): Promise<IBookModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IBookModel>}
     * @memberof IBookService
     */
    findOne(code: string): Promise<IBookModel>;

    /**
     * @param {IBookModel} IBookModel
     * @returns {Promise<IBookModel>}
     * @memberof IBookService
     */
    insert(IBookModel: IBookModel): Promise<IBookModel>;

    /**
     * @param {string} id
     * @returns {Promise<IBookModel>}
     * @memberof IBookService
     */
    remove(id: string): Promise<IBookModel>;
}