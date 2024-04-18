import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumDetails } from '../interfaces/albums-detail.interface';
import { Album } from '../interfaces/albums.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private apiurl2 = 'https://jsonplaceholder.typicode.com/albums/1/photos';

  constructor(private http: HttpClient) { }

  
  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbumDetailsById(id: number): Observable<AlbumDetails[]> {
    return this.http.get<AlbumDetails[]>(`${this.apiurl2}`);
  }

  getAlbumsTitle(): Observable<Album[]> {
    return this.http.get<Album[]>(` ${this.apiUrl}`);
  }
}
