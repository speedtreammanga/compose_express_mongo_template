import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IBooksModel
 * @extends {Document}
 */
export interface IBookModel extends Document {
    uri: string;
    title: string;
    img: string;
    description: string;
    isbn: string;
    release_date: Date;
    reviews: string;
    stars: number;
    read: boolean;
    deleted: boolean;
}

const BookSchema: Schema = new Schema({
    uri: {
        type: String,
        unique: true
    },
    title: String,
    img: String,
    description: String,
    isbn: String,
    release_date: Date,
    reviews: String,
    stars: Number,
    read: Boolean,
    deleted: Boolean
}, {
    collection: 'bookmodel',
    versionKey: false
}).pre('save', async function (next: NextFunction): Promise < void > {
    const book: any = this; // tslint:disable-line
    try {
        next();
    } catch (error) {
        return next(error);
    }
});

export default connections.db.model<IBookModel>('IBookModel', BookSchema);