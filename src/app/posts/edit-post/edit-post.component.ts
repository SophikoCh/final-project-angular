import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  id!: number;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = +(this.route.snapshot.params['postId'] || 0);
  }

}
