import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
   constructor(private _http: HttpClient){
    }

    authors(){
       return this._http.get('/authors');
    }

    by(id){
        return this._http.get('/by/'+id);
    }

    create(name){
        console.log(name);
        return this._http.post('/create', name);
    }

    edit(id, newTask){
        return this._http.post('/edit/'+id, newTask);
    }

    deleteByID(id){
        return this._http.delete('/delete/'+id);
    }
}
