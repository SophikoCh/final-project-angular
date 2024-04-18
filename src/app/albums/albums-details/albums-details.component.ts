import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumDetails } from 'src/app/interfaces/albums-detail.interface';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.scss']
})
export class AlbumsDetailsComponent implements OnInit {
  allAlbumDetails: AlbumDetails[] = [];

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((response) => {
      this.allAlbumDetails = response;
    });

    this.route.params.subscribe((params) => {
      const albumId = params['id'];
      this.albumsService
        .getAlbumDetailsById(albumId)
        .subscribe((albumDetails) => {
          this.allAlbumDetails = albumDetails;
        });
    });
  }
}
