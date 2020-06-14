import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-send-file',
  templateUrl: './send-file.component.html',
  styleUrls: ['./send-file.component.scss']
})
export class SendFileComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  fileToUpload: File = null;

  ngOnInit(): void {
  }

  enviarArquivo() {
    const formData = new FormData();
    formData.append('file', this.fileToUpload, 'usuarios.csv');
    this.http.post('./usuario/file', formData)
      .subscribe(() => {
        alert('Arquivo enviado com sucesso!');
      });
  }

  handleFileInput(files) {
    this.fileToUpload = files.item(0);
  }
}
