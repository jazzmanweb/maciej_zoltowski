import {HttpGetPaginationInterface} from '../interfaces/http-get-pagination.interface';

export class HttpGetPaginationModel<T> implements HttpGetPaginationInterface<T> {
    public total: number;
    public body: T;

    constructor(options?: Partial<HttpGetPaginationInterface<T>>) {
        options = options || {};
        this.total = this.parseInt(options.total);
        this.body = options.body || null;
    }

    private parseInt(value: number | string | string[]): number {
        return typeof value === 'number'
            ? value
            : typeof value === 'string'
                ? parseInt(value, 10)
                : 0;
    }
}
