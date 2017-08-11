import { Document } from 'mongoose';

export interface UserUpdates {
    id?: string;
    name?: string;
    avatar?: string;
    provider?: string;
}

export interface CallbackArguments {
    provider: string;
    successRedirect?: string;
    failureRedirect?: string;
}

export interface User extends Document {
    id: string;
    avatar: string;
    provider: string;
    name: string;
}
