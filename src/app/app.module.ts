import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {StarWarsModule} from './modules/star-wars/star-wars.module';
import {HttpModule} from './common/http/http.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule.forRoot('http://localhost:3000'),
        StarWarsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
