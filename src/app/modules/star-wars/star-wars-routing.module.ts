import {RouterModule, Routes} from '@angular/router';
import {StarWarsListComponent} from './components/star-wars-list/star-wars-list.component';
import {NgModule} from '@angular/core';
import {StarWarsEditComponent} from './components/star-wars-edit/star-wars-edit.component';

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
            },
            {
                path: ':id/edit',
                component: StarWarsEditComponent,
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
