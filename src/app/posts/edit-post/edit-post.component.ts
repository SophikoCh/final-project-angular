import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  id!: number;
  post: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    const postId = +(this.route.snapshot.paramMap.get('id') || 0);  // Convert to number
    this.apiService.getPostById(postId).subscribe(
      data => {
        this.post = data;
      },
      error => {
        if (error.status === 404) {
          console.error('Post not found:', error);
          // Handle the 404 error, e.g., redirect or show a message to the user
        } else {
          console.error('Error fetching post:', error);
        }
      }
    );
  }
}
