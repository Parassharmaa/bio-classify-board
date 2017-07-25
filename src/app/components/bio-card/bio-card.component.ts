import { Bio, Update_Bio } from '../../models/bio.model';
import { BioService } from '../../service/bio.service';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'bio-card',
  templateUrl: './bio-card.component.html',
  styleUrls: ['./bio-card.component.css']
})
export class BioCardComponent implements OnInit, OnDestroy{

  pre_data : Bio;

  constructor(private bioapi: BioService) {

  }

  ngOnDestroy() {
    this.load_data()
  }

  load_data() {
  	this.bioapi.getBio()
      .subscribe(data => this.pre_data = data);
  }

  update_data() {
    return 0;
  }
}
