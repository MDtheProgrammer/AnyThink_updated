import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { faBullhorn, faImage, faLightbulb, faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';
import { PostContentService } from 'src/app/Shared/post-contents.service';
import { PostDataStorageService } from 'src/app/Shared/post-data-storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // icons
    faFaceSmileBeam = faFaceSmileBeam;
    faImage = faImage;
    faSquarePollHorizontal = faSquarePollHorizontal;  
    faLightbulb = faLightbulb;  
    faBullhorn = faBullhorn;

  // code
  postForm!: FormGroup;
  constructor(private postContentService: PostContentService, private postDataStorageService: PostDataStorageService){}

  ngOnInit(){
       this.initForm();
  }
  onSubmitted(){
    this.postContentService.addPost(this.postForm.value);
    this.postDataStorageService.storePost();
  }

  private initForm(){
    let postTitle = '';
    let postContent = '';
    let postImgPath = '';
    let postHashtags = '';
    

    this.postForm = new FormGroup({
      title: new FormControl(postTitle),
      content: new FormControl(postContent),
      imgPath: new FormControl(postImgPath),
      hashtags: new FormControl(postHashtags)
    })
  }
}