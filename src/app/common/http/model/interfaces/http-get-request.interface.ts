import {HttpRequestInterface} from './http-request.interface';

export interface HttpGetRequestInterface extends HttpRequestInterface {
    params?: Record<string, string | string[]>;
}
