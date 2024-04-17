import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.scss']
})
export class AlbumsDetailsComponent implements OnInit {
  id!: number;
  title!: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);
  }

}
