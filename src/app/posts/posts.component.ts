import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/posts.interface';
import { ApiService } from '../services/api.service';
import { User } from '../interfaces/users.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  users: User[] = [];

  newPostTitle = '';

  newPostBody = '';

  newPostAuthor = '';

  showContainer: boolean = false;
  Post: any;




  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
    this.apiService.getUsers().subscribe((users) => {
      this.users = users;
    });

  }

  getUserById(userId: number): string {
    if (this.users && this.users.length > 0) {
      const user = this.users.find((user) => user.id === userId);
      return user ? user.name || '' : '';
    }
    return '';
  }



  addNewPost() {
    const newPost: Post = {
      body: this.newPostBody,
      title: this.newPostTitle,
      userId: this.users.length + 1,
      id: this.posts.length + 1,
    };
    this.posts = [newPost, ...this.posts];
    const newAuthor: User = {
      name: this.newPostAuthor,
      id: this.users.length + 1,
      username: this.newPostAuthor,
    };

    this.users = [newAuthor, ...this.users];

    this.newPostTitle = '';
    this.newPostBody = '';
    this.newPostAuthor = '';
  }


  toggleContainer() {
    this.showContainer = !this.showContainer;
  }

}
