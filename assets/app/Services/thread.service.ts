// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Thread } from '../models/thread';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ThreadService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private threadsUrl = 'http://localhost:3000/api/v1/threads'; 

     getThreads() : Observable<Thread[]> {
         // ...using get request
         return this.http.get(this.threadsUrl)
            // ...and calling .json() on the response to return data
             .map((res:Response) => res.json())
             //...errors if any
             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     getThread() : Observable<Thread[]> {
     	return null;
     }

     addThread(thread: Object): Observable<Thread[]> {
     	let threadString = JSON.stringify(thread);
     	let headers = new Headers({ 'Content-Type': 'application/json'});
     	let options = new RequestOptions({ headers: headers});

     	return this.http.put(`${this.threadsUrl}/$body['id']}`, threadString, options)
     			.map((res:Response) => res.json())
     			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
}