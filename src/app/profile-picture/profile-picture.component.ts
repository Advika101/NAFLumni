import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
  //public uploader: FileUploader;
  public uploader;
  private hasDragOver = false;

  @Input()
  private editmode = false;

  @Input()
  private url = '';

  @Output()
  private urlChange = new EventEmitter();

  // temporary hack function to display the image inline
  handleFileInput(files: FileList) {
    console.log("I am in handlefileInput")
    console.log(files[0]);
    
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      console.log("Result of the file = " + reader.result)
      this.url = reader.result as string;
    }
  }
  
  constructor() {
    this.uploader = new FileUploader({
      url: 'http://localhost:9090/upload',
      disableMultipart: false,
      autoUpload: true
    });
    

    this.uploader.response.subscribe(res => {
      // Upload returns a JSON with the image ID
      this.url = 'http://localhost:9090/get/' + JSON.parse(res).id;
      this.urlChange.emit(this.url);
    });
  }

  public fileOver(e: any): void {
    this.hasDragOver = e;
  }

  ngOnInit() {
  }

}