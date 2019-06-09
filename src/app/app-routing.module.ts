import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {StarWarsListComponent} from './modules/star-wars/components/star-wars-list/star-wars-list.component';

const routes: Routes = [
    {
        path: '',
        component: StarWarsListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
            useHash: true,
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
