import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { MessagesComponent } from "./pages/messages/messages.component";
import { ExploreComponent } from "./pages/explore/explore.component";
import { PostComponent } from "./pages/home/thinker-pad/post/post.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { LoginComponent } from "./pages/login/login.component";
import { ChatListComponent } from "./pages/messages/chat-list/chat-list.component";
import { EMailListComponent } from "./pages/messages/e-mail-list/e-mail-list.component";
import { AuthGaurd } from "./auth/auth.guard";


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, 
    canActivate: [AuthGaurd],
    children: [
      {path: ':toOpt', component: PostComponent},
      {path: '', component: PostComponent}
    ]},
    {path: 'messages', component: MessagesComponent, children: [
      {path: 'email', component: EMailListComponent}, 
      {path: 'chats', component: ChatListComponent}, 
      {path: '', component: ChatListComponent}, 
    ]},
    {path: 'explore', component: ExploreComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', component: HomeComponent}
  ];
  
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRoutingModule{

}