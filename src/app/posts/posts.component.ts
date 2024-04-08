import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/posts.interface';
import { ApiService } from '../api.service';
import { User } from '../interfaces/users.interface';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts!: Post[];

  users!: User[];

  newPostTitle = '';

  newPostBody = ''; 

  newPostAuthor = '';

  showContainer : boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
    this.apiService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  addNewPost() {
    this.posts = [
      { body: this.newPostBody,
        title: this.newPostTitle,
        userId: 20,
        id: 102,
      },
      ...this.posts
    ];
    this.users= [
      {name: this.newPostAuthor,
        id: 102,
        username: 'string',
        email: 'string',
      },
      ...this.users
    ];
  };

  toggleContainer() {
    this.showContainer =!this.showContainer;
  }
  
}
