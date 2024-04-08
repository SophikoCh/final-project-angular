import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'mainPage',
    pathMatch:'full'
  },
  {
    path:'mainPage',
    component: MainPageComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
