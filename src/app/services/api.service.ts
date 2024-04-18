import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/posts.interface';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  find(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://jsonplaceholder.typicode.com';


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  };
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  };

  getPostsAndUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts?_expand=user`);
  }

  getPostById(postId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${postId}`);
  }
  updatePost(post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${post.id}`, post);
  }

  getCommentsByPostId(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts/${postId}/comments`);
  }

  addComment(comment: Comment): Observable<Comment> {  // Ensure type is correct here
    const url = `${this.apiUrl}/comments`;
    return this.http.post<Comment>(url, comment);
  }

}
