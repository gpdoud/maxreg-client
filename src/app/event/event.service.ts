import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event.class';

const url = 'http://localhost:56290/api/';

@Injectable
({
  providedIn: 'root'
})
export class EventService 
{
  list(): Observable<Event[]>
  {
    return this.http.get(`${url}/events`) as Observable<Event[]>;
    
  }
  get(id:string): Observable<Event>
  {
    return this.http.get(`${url}/events/${id}`) as Observable<Event>;
    
  }
  create(event:Event): Observable<any>
  {
    return this.http.post(`${url}/events`, event) as Observable<any>;
  }

  change(event:Event): Observable<any>
  {
    return this.http.put(`${url}/events/${event.id}`, event) as Observable<any>;
  }

  remove(event:Event): Observable<any>
  {
    return this.http.delete(`${url}/events/${event.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
