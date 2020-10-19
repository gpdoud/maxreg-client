import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendee } from './attendee.class';

const url = 'http://localhost:56290/api';

@Injectable
  ({
    providedIn: 'root'
  })
export class AttendeeService 
{

  list(): Observable<Event[]> {
    return this.http.get(`${url}/events`) as Observable<Event[]>;

  }
  get(id: string): Observable<Attendee> {
    return this.http.get(`${url}/attendees/${id}`) as Observable<Attendee>;

  }
  create(attendee: Attendee): Observable<any> {
    return this.http.post(`${url}/attendees`, attendee) as Observable<any>;
  }

  change(attendee: Attendee): Observable<any> {
    return this.http.put(`${url}/attendees/${attendee.id}`, attendee) as Observable<any>;
  }

  remove(attendee: Attendee): Observable<any> {
    return this.http.delete(`${url}/attendees/${attendee.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
