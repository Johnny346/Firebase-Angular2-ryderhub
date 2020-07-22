import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../apiservice.service';
@Component({
  selector: 'app-uploadinvoice',
  templateUrl: './uploadinvoice.component.html',
  styleUrls: ['./uploadinvoice.component.css']
})
export class UploadinvoiceComponent implements OnInit {
public person;
public firstName;
public response;
public status;
public message;
selectedFiles: File[];
constructor( public apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem('ryderID');
  }
  UploadFiles(file){
    var form_data = new FormData(); 
    
    let ryderID = this.firstName;

    console.log("file name "+ file_data);
    console.log("ryderid is : "+ ryderID); 
    var fileName = new File(["foo"], ryderID, {type: "application/pdf",});
    form_data.append('file[]',fileName);  
    //form_data.append('file[]', fileName);
    var file_data =  form_data.getAll(file);
    if(this.selectedFiles.length === 0){
      console.log("no files selected ");
      return;
    }
    if (this.selectedFiles.length > 0) {
      for (const row of this.selectedFiles) {
        form_data.append('file[]', row);
        
      }
     }
     form_data.forEach( key => {
      console.log("upload file: ", key);
     })  
     
     this.apiService.postInvoiceFiles(form_data).subscribe((data: {}) => {
      this.response = data;
      this.status = this.response.status;
      this.message = this.response.message;
      console.log("show status", this.status);
      console.log("show message", this.message);
    })
  }
  onFileSelected(event) {
    this.selectedFiles = event.target.files;
    for (let i = 0; i < event.target.files; i++) {
      this.selectedFiles.push(event.target.files[i]);
    }
  }

}

interface response {
  status: string;
  message: string;
}