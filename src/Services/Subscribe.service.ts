import { EventEmitter } from "@angular/core";

export class SubscribeService {
 
 formEvent: EventEmitter<string> = new EventEmitter<string>;

 onSubscribeClick(message:string,userEmail?:string){
   if(userEmail != undefined){
      userEmail = 'with mail: '+userEmail+'';
   }
   else
   userEmail='';
    alert('Subscribed succesfully from '+message+''+userEmail+'');
 }
}
