import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {removeFirstCharIfExist, removeLastCharIfExist} from '../../utils/string.utils';
import {HttpGetRequestInterface} from '../model/interfaces/http-get-request.interface';
import {HttpGetPaginationModel} from '../model/models/http-get-pagination.model';

@Injectable()
export class RequestService {
    constructor(private http: HttpClient,
                @Inject('api') private api: string) {
    }

    public get<T>(request: HttpGetRequestInterface): Observable<T> {
        return this.http.get<T>(this.getUrl(request.path), {
            params: request.params,
        })
            .pipe(
                catchError(this.handleError),
            );
    }

    public getPage<T>(request: HttpGetRequestInterface): Observable<HttpGetPaginationModel<T>> {
        return this.http.get<T>(this.getUrl(request.path), {
            params: request.params,
            observe: 'response',
        })
            .pipe(
                catchError(this.handleError),
                map((response: HttpResponse<T>) => new HttpGetPaginationModel({
                    body: response.body,
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
        return throwError('Something went wrong');
    }
}
