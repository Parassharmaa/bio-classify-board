import { Bio, Update_Bio } from '../../models/bio.model';
import { BioService } from '../../service/bio.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'bio-card',
  templateUrl: './bio-card.component.html',
  styleUrls: ['./bio-card.component.css']
})
export class BioCardComponent implements OnInit {

  public pre_data : Bio;
  private post_data : Update_Bio;
  public selectedTarget : string = "";
  public inputTarget : string = "";
  public saving : boolean = false;
  constructor(private bioapi: BioService, private http: Http) { }

  ngOnInit() {
    this.load_data()
  }

  load_data() {
  	this.bioapi.getBio()
      .subscribe(data => this.pre_data = data)
  }

  update_data() {
    if (this.selectedTarget.trim() !== "" || this.inputTarget.trim() !== "") {
      this.saving = true;
        this.post_data = {
          "bio": this.pre_data.bio,
          "user_id": this.pre_data.user_id,
          "target": this.selectedTarget.toLowerCase() || this.inputTarget.toLowerCase()
        }
        this.bioapi.updateBio(this.post_data)
          .subscribe(data => {
                this.pre_data = null;
                this.load_data();
                this.saving = false;
                this.selectedTarget = "";
                this.inputTarget = "";
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
    }
  }
}
