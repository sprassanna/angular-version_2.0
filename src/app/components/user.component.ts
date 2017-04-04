import { Component } from '@angular/core';
import {PostService} from '../services/posts.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers:[PostService],
})
export class UserComponent  { 
  
 name:string;
 email:string;
 address:addressType;
 hobbies:string[];
 showHobby:boolean;
 posts : Post[];

  constructor(private postService: PostService){
    this.name = 'Prassanna Subiramaniyan';
    this.email = 'sprassanna@ceiamerica.com';
    this.address = {
          street:'PV Chetty St',
          doorNo:'New 24, Old NO 32',
          town:'Ammapet'
                 };
    this.hobbies = ['Music','Movies','Cricket'];
    this.showHobby=false;
    this.postService.getPosts().subscribe(posts => {
       this.posts = posts;
       console.log(this.posts);
    });
  }

  toggleHobbies(){
  this.showHobby=!(this.showHobby);
}

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

  addHobby(hobby){
    this.hobbies.push(hobby.value);
  }



}


  interface addressType{
    street:string;
    doorNo:string;
    town:string;
     
  }

  interface Post {
    id:number;
    title: string;
    body:string;
  }
