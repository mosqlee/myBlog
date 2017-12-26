import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Blog } from '../../blog';
@Injectable()
export class BlogService {
    private blogUrl = 'api/blogs';
    constructor(public http: Http) {

    }
    getBlogs(): Promise<Blog[]> {
        return this.http.get(this.blogUrl)
            .toPromise()
            .then(response => response.json() as Blog[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}
