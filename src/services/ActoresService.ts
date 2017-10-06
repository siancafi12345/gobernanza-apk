import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
  
export class ActoresService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    getActores() {
        var url = 'http://localhost:8000/Mains/apiMapas';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}