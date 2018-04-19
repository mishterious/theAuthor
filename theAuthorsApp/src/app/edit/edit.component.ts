import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  _id: any;
  author: any;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    // this.authorByID(this._id);
    this.author = { name: " " };
    this._route.params.subscribe((params: Params) => this._id = params['id']);
  }

  edit(_id) {
    console.log(_id);
    console.log(this.author.name)
    console.log(this.author)
    let tempObservable = this._httpService.edit(_id, this.author)
    tempObservable.subscribe(data => {
      this.author = data;
    });
    this._router.navigate(['/all']);  
  }
}
