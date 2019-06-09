import {RouterModule, Routes} from '@angular/router';
import {StarWarsListComponent} from './components/star-wars-list/star-wars-list.component';
import {NgModule} from '@angular/core';
import {StarWarsEditComponent} from './components/star-wars-edit/star-wars-edit.component';
import {ViewModeEnum} from '../../common/shared/model/enums/viev-mode.enum';

export const ROUTES: Routes = [
    {
        path: 'star-wars',
        children: [
            {
                path: '',
                component: StarWarsListComponent,
            },
            {
                path: 'create',
                component: StarWarsEditComponent,
                data: {viewMode: ViewModeEnum.CREATE},
            },
            {
                path: ':id/edit',
                component: StarWarsEditComponent,
                data: {viewMode: ViewModeEnum.EDIT},
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
    ],
    exports: [
        RouterModule,
    ],
})
export class StarWarsRoutingModule {
}
