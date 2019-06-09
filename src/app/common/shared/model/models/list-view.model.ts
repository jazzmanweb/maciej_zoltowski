import {ListViewInterface} from '../interfaces/list-view.interface';

export class ListViewModel<T> implements ListViewInterface<T> {
    public header: string;
    public field: keyof T;
    public show: boolean;
    public sortable: boolean;

    constructor(options?: Partial<ListViewInterface<T>>) {
        options = options || {};
        this.header = options.header || '';
        this.field = options.field || null;
        this.show = options.show !== false;
        this.sortable = options.sortable === true;
    }
}
