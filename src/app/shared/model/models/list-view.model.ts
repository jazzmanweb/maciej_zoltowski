import {ListViewInterface} from '../interfaces/list-view.interface';

export class ListViewModel implements ListViewInterface {
    public header: string;
    public field: string;
    public show: boolean;
    public sortable: boolean;

    constructor(options?: Partial<ListViewInterface>) {
        options = options || {};
        this.header = options.header || '';
        this.field = options.field || '';
        this.show = options.show !== false;
        this.sortable = options.sortable === true;
    }
}
