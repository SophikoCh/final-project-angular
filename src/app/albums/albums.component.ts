import { Component, OnInit } from '@angular/core';
import { Album } from '../interfaces/albums.interface';
import { AlbumsService } from '../services/albums.service';
import { User } from '../interfaces/users.interface';
import { ApiService } from '../services/api.service';
import { PhotosService } from '../services/photos.service';
import { Photo } from '../interfaces/photos.interface';
import { filter } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: Album[]=[];
  users: User[] = [];
  photos: Photo[] = [];
  id!: number;

  constructor(private albumsService: AlbumsService,
    private apiService: ApiService,
    private photosService: PhotosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
      
    });
    this.apiService.getUsers().subscribe((users) => {
      this.users = users;
    });
    this.photosService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });

    this.id = +(this.route.snapshot.paramMap.get('id')|| 0);
  }
  getUserName(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.name : 'Unknown';
  }

  loadPhotosCount(albumId: number): number {
    return (this.photos as Photo[]).filter((photo: Photo) => photo.albumId === albumId).length;
   
}
}
