import {PaginationInterface} from '../interfaces/pagination.interface';

export class PaginationModel implements PaginationInterface {
    public page: number;
    public limit: number;
    public total: number;
    public isFirst: boolean;
    public isLast: boolean;

    constructor(options?: Partial<PaginationInterface>) {
        options = options || {};
        this.page = options.page || null;
        this.limit = options.limit || null;
        this.total = options.total || null;
        this.isFirst = options.isFirst || options.page === 1;
        this.isLast = options.isLast || options.page === Math.ceil(this.total / (this.limit || 1));
    }
}
