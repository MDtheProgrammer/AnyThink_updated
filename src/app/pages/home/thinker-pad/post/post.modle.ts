export class Post{
    public title : string;
    public content: string;
    public imgPath: string;
    public hashtags: string;

    constructor(title: string, content: string, imgPath: string, hashtags: string){
        this.title = title;
        this.content = content;
        this.imgPath = imgPath;
        this.hashtags = hashtags;
    }

}