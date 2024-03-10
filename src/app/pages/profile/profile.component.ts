import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostContentService } from 'src/app/Shared/post-contents.service';
import { PostDataStorageService } from 'src/app/Shared/post-data-storage.service';
import { Post } from 'src/app/pages/home/thinker-pad/post/post.modle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy{
  posts: Post[] = []; 
  subscription: Subscription = new Subscription;

  constructor(private postContentService: PostContentService, private postDataStorageService: PostDataStorageService){}

  ngOnInit() {
      this.onFetchData();
      this.subscription = this.postContentService.postsChanged.subscribe((posts: Post[]) => {
        this.posts = posts;
      }
      );

      this.posts = this.postContentService.getPosts();
  }
  
  onFetchData(){
    this.postDataStorageService.fetchPosts().subscribe();
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
}
