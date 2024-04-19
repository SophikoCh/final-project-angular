import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Comment } from 'src/app/interfaces/comment.interface';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  id!: number;
  post: any;


  newComment: Comment = {
    postId: 101,
    id: 0,
    name: '',
    email: '',
    body: ''
  };

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    const postId = +(this.route.snapshot.paramMap.get('id') || 0);  // Convert to number
    this.apiService.getPostById(postId).subscribe(
      data => {
        this.post = data;
        if (!this.post.comments) {
          this.post.comments = [];  // Initialize comments array if it doesn't exist
        }
        this.fetchComments(postId);  // Fetch comments after fetching post
      },
      error => {
        console.error('Error fetching post:', error);
      }
    );
  }
  updatePost(): void {
    if (this.post) {
      this.apiService.updatePost(this.post).subscribe(
        updatedPost => {
          console.log('Post updated successfully:', updatedPost);
        },
        error => {
          console.error('Error updating post:', error);
        }
      );
    }
  }
  fetchComments(postId: number): void {
    this.apiService.getCommentsByPostId(postId).subscribe(
      comments => {
        if (this.post) {
          this.post.comments = comments;
        }
      },
      error => {
        console.error('Error fetching comments:', error);
      }
    );
  }
  addComment(): void {
    if (this.post && this.newComment.name && this.newComment.body) {
      const newComment: Comment = {
        postId: this.post.id,
        name: this.newComment.name,
        email: this.newComment.email,
        body: this.newComment.body,
        id: this.post.comments ? this.post.comments.length + 1 : 1,
      };

      if (this.post.comments) {
        this.post.comments = [newComment, ...this.post.comments];
      } else {
        this.post.comments = [newComment];
      }

      // Clear the new comment form
      this.newComment.name = '';
      this.newComment.email = '';
      this.newComment.body = '';
    }
  }
}
