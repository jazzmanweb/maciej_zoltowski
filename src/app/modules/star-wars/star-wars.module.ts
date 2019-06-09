import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {StarWarsListComponent} from './components/star-wars-list/star-wars-list.component';
import {SharedModule} from '../../common/shared/shared.module';
import {StarWarsService} from './store/star-wars.service';

@NgModule({
    declarations: [
        StarWarsListComponent,
    ],
    imports: [
        SharedModule,
    ],
    providers: [
        StarWarsService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StarWarsModule {

}
