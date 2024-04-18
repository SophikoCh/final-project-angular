import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PostsComponent } from './posts/posts.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsDetailsComponent } from './albums/albums-details/albums-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainPage',
    pathMatch: 'full'
  },
  {
    path: 'mainPage',
    component: MainPageComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts/:id',
    component: EditPostComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'albums/:id',
    component: AlbumsDetailsComponent,
  },
  {
    path:'todos',
    component: TodosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
