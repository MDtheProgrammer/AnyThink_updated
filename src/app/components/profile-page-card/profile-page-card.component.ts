import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostContentService } from 'src/app/Shared/post-contents.service';
import { Post } from 'src/app/pages/home/thinker-pad/post/post.modle';

@Component({
  selector: 'app-profile-page-card',
  templateUrl: './profile-page-card.component.html',
  styleUrls: ['./profile-page-card.component.css']
})
export class ProfilePageCardComponent implements OnInit{
  @Input() postCard!: Post;

  // imgPath = new Promise((resolve, reject) => {
  //   resolve(() => {return this.postCard.imgPath});
  //   reject( () => {return "https://random.imagecdn.app/500/150"});
  // })
  
  ngOnInit(){
  }
}
