import {NgModule} from '@angular/core';
import {StarWarsListComponent} from './components/star-wars-list/star-wars-list.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [
        StarWarsListComponent,
    ],
    imports: [
        SharedModule,
    ]
})
export class StarWarsModule {

}
