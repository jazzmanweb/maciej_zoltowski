import {ListViewInterface} from '../interfaces/list-view.interface';

export class ListViewModel implements ListViewInterface {
    public header: string;
    public field: string;
    public show: boolean;

    constructor(options?: Partial<ListViewInterface>) {
        options = options || {};
        this.header = options.header || null;
        this.field = options.field || null;
        this.show = options.show || null;
    }
}
