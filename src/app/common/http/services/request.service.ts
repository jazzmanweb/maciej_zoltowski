import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {removeFirstCharIfExist, removeLastCharIfExist} from '../../utils/string.utils';
import {tap} from 'rxjs/internal/operators/tap';

@Injectable()
export class RequestService {
    public httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
        }),
    };

    constructor(private http: HttpClient,
                @Inject('api') private api: string) {
    }

    public get<T>(path): Observable<T> {
        return this.http.jsonp<T>(this.getUrl(path), 'callback')
            .pipe(
                tap((x) => console.log(x)),
                catchError(this.handleError)
            );
    }

    private getUrl(path: string): string {
        return removeLastCharIfExist(this.api, '/')
            + '/'
            + removeFirstCharIfExist(path, '/');
    }

    private handleError(error: HttpErrorResponse) {
        console.error(error);
        return throwError('something went wrong');
    }
}
