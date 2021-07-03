import { FieldErrorEntity } from './FieldErrorEntity'

export interface ErrorEntity{
    errorCode?: number;
    message?: String;
    path?: String;
    timestamp?: Date;
    fieldErrors?: Array<FieldErrorEntity>
}