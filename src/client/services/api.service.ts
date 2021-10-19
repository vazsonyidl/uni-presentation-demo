import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private readonly http: HttpClient) {
  }

  public get<T = any>(path: string): Observable<T> {
    return this.http.get<T>(path);
  }
}
