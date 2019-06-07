import {HttpRequestInterface} from './http-request.interface';

export interface HttpPostRequestInterface<T> extends HttpRequestInterface {
    body?: T;
    params?: Record<string, string | string[]>;
}
