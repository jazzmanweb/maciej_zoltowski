import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {removeFirstCharIfExist, removeLastCharIfExist} from '../../utils/string.utils';
import {tap} from 'rxjs/internal/operators/tap';
import {HttpGetRequestInterface} from '../model/interfaces/http-get-request.interface';
import {HttpGetPaginationModel} from '../model/models/http-get-pagination.model';

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

    public get<T>(request: HttpGetRequestInterface): Observable<T> {
        return this.http.get<T>(this.getUrl(request.path), {
            params: request.params,
        })
            .pipe(
                tap(() => console.log(request.path)),
                tap((x) => console.log(x)),
                catchError(this.handleError),
            );
    }

    public getPage<T>(request: HttpGetRequestInterface): Observable<HttpGetPaginationModel<T>> {
        return this.http.get<T>(this.getUrl(request.path), {
            params: request.params,
            observe: 'response',
        })
            .pipe(
                tap(() => console.log(request.path)),
                tap((x) => console.log(x)),
                catchError(this.handleError),
                map((response: HttpResponse<T>) => new HttpGetPaginationModel({
                    body: response.body,
                    page: request.params.page,
                    limit: request.params.limit,
                    total: response.headers.get('X-Total-Count'),
                }))
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
