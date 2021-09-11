import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  topHeadingDisplay : any = [];

  constructor(private _newsservice:NewsapiservicesService) { }

  ngOnInit(): void {

    this._newsservice.topHeading().subscribe((res) => {
       console.log(res);
      this.topHeadingDisplay = res.articles;
    })

  }

  


}
