import * as mongoose from 'mongoose';
import { Model, Document, Schema } from 'mongoose';
import { User as UserInterface } from '../interfaces';

const userSchema: Schema = new Schema({
    id: String,
    name: String,
    avatar: String,
    provider: String,
});

const User: Model<UserInterface> = mongoose.model<UserInterface>('User', userSchema);

export default User;
