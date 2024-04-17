import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PostsComponent } from './posts/posts.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

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
    path: 'posts/:postId',
    component: EditPostComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
