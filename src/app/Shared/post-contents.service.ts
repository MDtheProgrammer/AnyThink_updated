import { Injectable } from "@angular/core";
import { Post } from "../pages/home/thinker-pad/post/post.modle";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root'})

export class PostContentService{
    postsChanged = new Subject<Post[]>();
    
    
    private posts: Post[] = [];

    setPosts(posts: Post[]){
        this.posts = posts;
        this.postsChanged.next(this.posts.slice());
        console.log(this.posts);
    }

    getPosts(){
        return this.posts.slice();
    }

    getPost(index: number){
        return this.posts[index];
    }

    addPost(post: Post){
        this.posts.push(post);
        this.postsChanged.next(this.posts.slice());
    }

    updatePost(index: number, newPost: Post){
        this.posts[index] = newPost;
        this.postsChanged.next(this.posts.slice());
    }

    deletePost(index: number){
        this.posts.splice(index, 1);this.postsChanged.next(this.posts.slice());
    }
}