import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class FacultyService {

    private readonly facultyList = 'assets/data/faculty.json';
    public _faculties: any;

    constructor(private http: Http) { }
    /**
     * Get Faculty List
     */
    public getFaculties(): Observable<any> {
        if (!this._faculties) {
            this._faculties = this.http.get(`${this.facultyList}`)
                .map((resp: Response) => resp.json())
                .publishReplay(1)
                .refCount();
        }
        return this._faculties;
    }

}

