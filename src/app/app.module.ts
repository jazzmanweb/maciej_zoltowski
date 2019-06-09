import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {StarWarsModule} from './modules/star-wars/star-wars.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StarWarsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
