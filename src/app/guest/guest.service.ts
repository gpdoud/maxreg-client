import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from './guest.class';

const url = 'http://localhost:56290/api';

@Injectable
({
  providedIn: 'root'
})
export class ServiceService 
{

  list(): Observable<Guest[]>
  {
    return this.http.get(`${url}/guests`) as Observable<Guest[]>;
    
  }
  get(id:string): Observable<Guest>
  {
    return this.http.get(`${url}/guests/${id}`) as Observable<Guest>;
    
  }
  create(guest:Guest): Observable<any>
  {
    return this.http.post(`${url}/guests`, guest) as Observable<any>;
  }

  change(guest:Guest): Observable<any>
  {
    return this.http.put(`${url}/guests/${guest.id}`, guest) as Observable<any>;
  }

  remove(guest:Guest): Observable<any>
  {
    return this.http.delete(`${url}/guests/${guest.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
