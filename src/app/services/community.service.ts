import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import { Observable, throwError } from 'rxjs'
//import 'rxjs/Rx';
import { map, catchError } from "rxjs/operators";
import { Storage } from '@ionic/storage';
import { FileTransferObject } from '@ionic-native/file-transfer/ngx';





@Injectable()
export class CommunityService {
    http:Http;
    baseUrl: String;

    constructor(http: Http, private storage: Storage) {
        this.http = http;
        //this.baseUrl = "http://10.0.2.2:49168/api"
        this.baseUrl = "http://localhost:49168/api"
        
    }

    getImageList() {
        return this.http.get(this.baseUrl + '/ImageUpload/Files/').pipe(map((e: Response) => e.json()), catchError((e: Response) => throwError(e)));
        

    }

    getImageBaseUrls() {
        return this.http.get(this.baseUrl + "/ImageUpload/BaseUrls/1").pipe(map((e: Response) => e.json()), catchError((e: Response) => throwError(e)));


    }

    getCommunity(id) {
        return this.http.get(this.baseUrl + '/Community/' + id).pipe(map((e:Response) => e.json()),catchError((e:Response)=>throwError(e)));
        
    }

    getCommunities(user: string) {
        return this.http.get(this.baseUrl + '/Community/User/' + user + '/').pipe(map((e: Response) => e.json()), catchError((e: Response) => throwError(e)));
        
    }

    getNewsList(id) {
        return this.http.get(this.baseUrl + '/News/Community/' + id + '/User/' + 'akp1412attherategmailddotcom').pipe(map((e: Response) => e.json()), catchError((e: Response) => throwError(e)));
        
    }

    getNewsDetail(id,User) {
        return this.http.get(this.baseUrl + '/News/News/' + id + '/User/' + User + '/' ).pipe(map((e: Response) => e.json()), catchError((e: Response) => throwError(e)));
        
    }

    postDelete(imgKey) {
        

        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });
        

        return this.http.post(this.baseUrl + '/ImageUpload/Delete/' + imgKey + '/', imgKey, requestOptions).pipe(map((e: Response) => e.json()), catchError((e: Response) => throwError(e)));


    }

    postAddToAlbum(strAlbum,imgKey) {


        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });


        return this.http.post(this.baseUrl + '/ImageUpload/AddToAlbum/' +strAlbum + '/' + imgKey + '/', imgKey, requestOptions).pipe(map((e: Response) => e.json()), catchError((e: Response) => throwError(e)));


    }
}
 