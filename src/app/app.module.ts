import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavigationLineTemplateComponent } from './components/navigation-bar/navigation-line-template/navigation-line-template.component';
import { CompanyLogoComponent } from './components/navigation-bar/company-logo/company-logo.component';
import { AppRoutingModule } from './app-routing.module';

// PAGES

  // Home component
import { HomeComponent } from './pages/home/home.component';
import { CreateOptionsBarComponent } from './pages/home/thinker-pad/create-options-bar/create-options-bar.component';
import { CreateBarTemplateComponent } from './pages/home/thinker-pad/create-options-bar/create-bar-template/create-bar-template.component';
import { PostComponent } from './pages/home/thinker-pad/post/post.component';
import { ThinkerPadComponent } from './pages/home/thinker-pad/thinker-pad.component';
import { SearchBarComponent } from './pages/home/search-bar/search-bar.component';
import { ContentTemplateComponent } from './pages/home/content/content-template/content-template.component';
import { ContentComponent } from './pages/home/content/content.component';

  // Explore component
import { ExploreComponent } from './pages/explore/explore.component';
import { ExploreContentComponent } from './pages/explore/explore-content/explore-content.component';
import { ExploreCardComponent } from './pages/explore/explore-card/explore-card.component';
import { ExploreSearchBarComponent } from './pages/explore/explore-search-bar/explore-search-bar.component';

  //  Messages Component
import { MessagesComponent } from './pages/messages/messages.component';
import { MessageListColumnComponent } from './pages/messages/message-list-column/message-list-column.component';
import { MessageTypingColumnComponent } from './pages/messages/message-typing-column/message-typing-column.component';
import { MessageSearchBarComponent } from './pages/messages/message-search-bar/message-search-bar.component';

  // Profile component
import { ProfileComponent } from './pages/profile/profile.component';
  // Login component
import { LoginComponent } from './pages/login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilePageCardComponent } from './components/profile-page-card/profile-page-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostContentService } from './Shared/post-contents.service';
import { EMailListComponent } from './pages/messages/e-mail-list/e-mail-list.component';
import { ChatListComponent } from './pages/messages/chat-list/chat-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostDataStorageService } from './Shared/post-data-storage.service';
import { AuthInterceptorService } from './auth/auth.interceptor.sevice';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NavigationLineTemplateComponent,
    CompanyLogoComponent,
    HomeComponent,
    MessagesComponent,
    ExploreComponent,
    ThinkerPadComponent,
    CreateOptionsBarComponent,
    CreateBarTemplateComponent,
    PostComponent,
    SearchBarComponent,
    ContentComponent,
    ContentTemplateComponent,
    ExploreContentComponent,
    ExploreCardComponent,
    ExploreSearchBarComponent,
    MessageListColumnComponent,
    MessageTypingColumnComponent,
    MessageSearchBarComponent,
    ProfileComponent, 
    LoginComponent, ProfilePageCardComponent, EMailListComponent, ChatListComponent
  ],
  imports: [BrowserModule, FontAwesomeModule,HttpClientModule , NgbModule, ReactiveFormsModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [PostContentService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
