import {Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ContentComponent} from './pages/content/content.component';
import {AnalyticsComponent} from './pages/analytics/analytics.component';
import {CommentsComponent} from './pages/comments/comments.component';
import {VideosComponent} from './pages/content/videos/videos.component';
import {PlaylistsComponent} from './pages/content/playlists/playlists.component';
import {PostsComponent} from './pages/content/posts/posts.component';

export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
  ,
  {
    path: 'content',
    component: ContentComponent,
    children: [
      {
        path: 'videos',
        component: VideosComponent,
      },
      {
        path: 'playlists',
        component: PlaylistsComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      }
    ]
  }
  ,
  {
    path: 'analytics',
    component: AnalyticsComponent
  }
  ,
  {
    path: 'comments',
    component: CommentsComponent
  }
];
