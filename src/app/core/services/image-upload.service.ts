import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageUploadService {

    upload(e: any) {
        // if (e.target.files) {
        //     let reader = new FileReader();
        //     reader.readAsDataURL(e.target.files[0]);

        //     reader.onload = (event: any) => {
        //         return event.target.result

        //     }
        //     r
        // }

        // return;
    }

}



/*
   <img [src]='url' >
   <input type='file' (change)="yourhandlerfunction($event)"

*/