import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private apiurl2 = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor(
    private http: HttpClient) { }

    
}

