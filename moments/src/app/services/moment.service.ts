import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private apiUrl = 'http://localhost:3333/moments';

  constructor(private http: HttpClient) {}

  getMoments(): Observable<Moment[]> {
    return this.http.get<Moment[]>(this.apiUrl);
  }
}
