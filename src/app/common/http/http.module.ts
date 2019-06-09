import {ModuleWithProviders, NgModule} from '@angular/core';
import {RequestService} from './services/request.service';
import {CommonModule} from '@angular/common';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        HttpClientJsonpModule,
    ]
})
export class HttpModule {
    public static forRoot(api: string): ModuleWithProviders {
        return {
            ngModule: HttpModule,
            providers: [
                {
                    provide: 'api',
                    useValue: api || '',
                },
                RequestService,
            ]
        };
    }
}
