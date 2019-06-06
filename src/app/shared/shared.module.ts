import {NgModule} from '@angular/core';
import {ListViewComponent} from './components/list-view/list-view.component';
import {ListViewTableComponent} from './components/list-view/table/list-view-table.component';
import {ListViewSearchComponent} from './components/list-view/search/list-view-search.component';
import {ListViewPaginationComponent} from './components/list-view/table/pagination/list-view-pagination.component';
import {CommonModule} from '@angular/common';

const COMPONENTS = {
    INTERNAL: [
        ListViewPaginationComponent,
        ListViewTableComponent,
        ListViewSearchComponent,
    ],
    EXTERNAL: [
        ListViewComponent,
    ]
};

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        COMPONENTS.EXTERNAL,
        COMPONENTS.INTERNAL,
    ],
    exports: [
        COMPONENTS.EXTERNAL,
    ]
})
export class SharedModule {

}
