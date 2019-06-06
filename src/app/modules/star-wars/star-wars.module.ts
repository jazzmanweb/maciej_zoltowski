import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {StarWarsListComponent} from './components/star-wars-list/star-wars-list.component';
import {SharedModule} from '../../common/shared/shared.module';
import {StarWarsService} from './store/star-wars.service';
import {StarWarsRoutingModule} from './star-wars-routing.module';
import {StarWarsEditComponent} from './components/star-wars-edit/star-wars-edit.component';

@NgModule({
    declarations: [
        StarWarsListComponent,
        StarWarsEditComponent,
    ],
    imports: [
        SharedModule,
        StarWarsRoutingModule,
    ],
    providers: [
        StarWarsService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StarWarsModule {

}
