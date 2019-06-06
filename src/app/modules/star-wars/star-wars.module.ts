import {NgModule} from '@angular/core';
import {StarWarsListComponent} from './components/star-wars-list/star-wars-list.component';
import {ListViewComponent} from '../../list-view/list-view.component';

@NgModule({
    declarations: [
        ListViewComponent,
        StarWarsListComponent,
    ]
})
export class StarWarsModule {

}
