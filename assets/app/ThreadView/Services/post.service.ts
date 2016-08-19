// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Post } from '../models/post';
import { Thread } from '../../Threads/models/thread';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private postsUrl = 'http://localhost:3000/api/v1/posts';
     private threadsUrl = 'http://localhost:3000/api/v1/threads'; 

     getPosts(id: string) : Observable<Post[]> {
         return this.http.get(`${this.postsUrl}/${id}`)
             .map((res:Response) => res.json())
             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     getThread(id: string) : Observable<Thread[]> {
     	 return this.http.get(`${this.threadsUrl}/${id}`)
              .map((res:Response) => res.json())
              .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     addPost(post: Object): Observable<Post[]> {
     	let postString = JSON.stringify(post);
     	let headers = new Headers({ 'Content-Type': 'application/json'});
     	let options = new RequestOptions({ headers: headers});

     	return this.http.put(this.postsUrl, postString, options)
     			.map((res:Response) => res.json())
     			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
}