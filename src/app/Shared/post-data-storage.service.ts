import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import { PostContentService } from "./post-contents.service";
import { exhaustMap, take, tap } from "rxjs/operators";
import { Post } from "../pages/home/thinker-pad/post/post.modle";
import { AuthService } from "../auth/auth..service";

@Injectable({ providedIn: 'root'})

export class PostDataStorageService{
    constructor(private http: HttpClient, private postContentService: PostContentService, private authService: AuthService){}

    storePost(){
        const posts = this.postContentService.getPosts();
        this.http.put('https://anythink-24536-default-rtdb.firebaseio.com/posts.json', posts)
        .subscribe(response => {
            console.log(response);
        })
    }

    fetchPosts(){
        console.log('Fetching is on');  
            return this.http.get<Post[]>(
                'https://anythink-24536-default-rtdb.firebaseio.com/posts.json', 
            ).pipe(
        tap(posts => {
            this.postContentService.setPosts(posts);
        }));
    }
}