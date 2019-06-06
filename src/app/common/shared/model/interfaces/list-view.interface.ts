export interface ListViewInterface<T> {
    header?: string;
    field?: keyof T;
    show?: boolean;
    sortable?: boolean;
}
