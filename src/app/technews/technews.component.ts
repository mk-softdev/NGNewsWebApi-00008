import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  techNewsDisplay:any = [];

  constructor(private _technews:NewsapiservicesService) { }

  ngOnInit(): void {
    this._technews.techNews().subscribe((res)=>{
      console.log(res);
      this.techNewsDisplay = res.articles;
    })
  }

}
