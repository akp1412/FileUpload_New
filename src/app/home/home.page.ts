import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, Datetime } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CommunityService } from '../../app/services/community.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { GalleryPage } from '../gallery/gallery.page';
import { MasterDetailService } from '../../app/services/masterdetail.service';
import { Base64 } from '@ionic-native/base64/ngx';
import { ViewChild } from '@angular/core';
import { Slides, Slide } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

interface CameraDetail {
    filename: string;
    json_metadata: string;
}

interface CameraExifDetail {
    aperture: string;
    datetime: string;
    exposureTime: string;
    flash: string;
    focalLength: string;
    gpsAltitude: string;
    gpsAltitudeRef: string;
    gpsDateStamp: string;
    gpsLatitude: string;
    gpsLatitudeRef: string;
    gpsLongitude: string;
    gpsLongitudeRef: string;
    gpsProcessingMethod: string;
    gpsTimestamp: string;
    iso: string;
    make: string;
    model: string;
    orientation: string;
    whiteBalance: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
    @ViewChild(Slides) slides: Slides;
    @ViewChild(Slide) slide: Slide;

    imgSource: any;
    imageURI: any;
    imageFileName: any;
    loader: any;
    public photos: any;
    public base64Image: string;
    imageDetail;
    objImageList: any;
    rowNum;
    colNum;
    newImgArray: any = [];
    slidesMoving: boolean;
    slidesHeight: any;
    slideIndex: any = 0;
    blnLoadingDismissed: boolean = false;
    slideOpts = {
        autoHeight: 'true'
    };

    constructor(public navCtrl: NavController,
        private transfer: FileTransfer,
        private camera: Camera,
        private file: File,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        public httpClient: Http,
        private communityService: CommunityService,
        private photoViewer: PhotoViewer,
        public alertController: AlertController,
        private imagePicker: ImagePicker,
        private masterDetailService: MasterDetailService,
        private route: ActivatedRoute, private storage: Storage
        ) { }

    public images: Array<string>;
    private cntImagetoLoad: any = 0;
    private grid: Array<Array<string>>;
    private localGrid: Array<Array<string>>;
    private grid_W1: Array<Array<string>>;
    private grid_W2: Array<Array<string>>;
    private grid_W3: Array<Array<string>>;
    private grid_W4: Array<Array<string>>;
    private grid_M1: Array<Array<string>>;
    private grid_M2: Array<Array<string>>;
    private grid_M3: Array<Array<string>>;
    private grid_Y1: Array<Array<string>>;
    private grid_Y2: Array<Array<string>>;
    private grid_Y3: Array<Array<string>>;
    private grid_Y4: Array<Array<string>>;

    ngOnInit() {
        this.slideIndex = 0;
        this.presentAlertMultipleButtons();
        //this.getImageList();

        //this.storage.get('serviceVersion').then(val => {
        //    if (val != null) {
        //        console.log(val);
        //        if (val === "P") {
        //            this.communityService.baseUrl = "https://azcommunityrestapi20181209100659.azurewebsites.net/api";
                    
        //        } else if (val === "A") {
        //            this.communityService.baseUrl = "http://10.0.2.2:49168/api";
        //        } else if (val === "B") {
        //            this.communityService.baseUrl = "http://localhost:49168/api";
        //        }
        //        this.presentLoading();
        //        this.getImageList();
        //    }
        //    else {
        //        this.communityService.baseUrl = "https://azcommunityrestapi20181209100659.azurewebsites.net/api";
        //        this.presentLoading();
        //        this.getImageList();
        //    }
        //});


        this.storage.get('imgPerRow').then(val => {
            if (val != null) {
                console.log(val);
                this.masterDetailService.setImgGridCols(parseInt(val));
                
            }
            else {
                //this.navCtrl.navigateForward('login');
            }
        });

        this.storage.get('rowsPerPage').then(val => {
            if (val != null) {
                console.log(val);
                this.masterDetailService.setImgGridRows(parseInt(val));
                
            }
            else {
                //this.navCtrl.navigateForward('login');
            }
        });

       
        
        
    }
    
    async presentImageSOurceOptions() {
        const alert = await this.alertController.create({
            header: 'Input Required!',
            message: 'Please select image source',
            buttons: [
                {
                    text: 'Camera',
                    handler: () => {
                        // this.navCtrl.navigateForward('add_news');
                        
                        this.getImage();
                        console.log('Camera Selected');

                    }
                }, {
                    text: 'Library',
                    handler: () => {
                        // this.navCtrl.navigateForward('add_news');
                        this.LoadImagePicker()
                        console.log('Image Picker Selected');

                    }
                },{
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {

                        console.log('Upload Cancelled');
                    }
                }
            ]
        });



        await alert.present();
    }

    LoadSourceOptions() {
        this.presentImageSOurceOptions();
    }

    async presentAlertMultipleButtons() {
        const alert = await this.alertController.create({
            header: 'Attention!',
            message: 'Please select the environment',
            buttons: [
                {
                    text: 'Android',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        this.communityService.baseUrl = "http://10.0.2.2:49168/api";
                        this.presentLoading();
                        this.getImageList();
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Browser',
                    handler: () => {
                        // this.navCtrl.navigateForward('add_news');
                        this.communityService.baseUrl = "http://localhost:49168/api";
                        this.presentLoading();
                        this.getImageList();
                        console.log('Confirm Okay');

                    }
                }, {
                    text: 'Production',
                    handler: () => {
                        // this.navCtrl.navigateForward('add_news');
                        this.communityService.baseUrl = "https://azcommunityrestapi20181209100659.azurewebsites.net/api";
                        this.presentLoading();
                        this.getImageList();
                        //this.slides.options = this.slideOpts;
                        console.log('Confirm Okay');

                    }
                }
            ]
        });



        await alert.present();
    }

    LoadImage(imgUrl,strFilter){
        
        if (imgUrl === 'assets/icon/more.png') {
            this.setImgFilter(strFilter);
        } else {
            //this.presentLoading();
            let imgName = imgUrl.replace(this.masterDetailService.getThumbBase(), '');
            //let intIndex = this.objImage.findIndex(x => x.imgName === imgName);
            let intIndex = this.masterDetailService.getImages().filter(p => p.period === strFilter).findIndex(x => x.imgName === imgName);
            if (intIndex != -1) {
                this.masterDetailService.setIndex(intIndex);
            } else {
                intIndex = this.getGridIndex(imgUrl, strFilter);
                this.masterDetailService.setIndex(intIndex);
            }
            
            //this.masterDetailService.setImages(this.objImageList.filter(p => p.period === strFilter));
            this.masterDetailService.setFilter(strFilter);
            this.masterDetailService.setListMode("GENERAL");
            this.navCtrl.navigateForward('gallery');
        }
        
        

        //this.photoViewer.show(this.objImageList.filter(p => p.imgUrl === imgUrl)[0].imgParentUrl);
        
    }

    LoadImagePicker() {
        let options = {
            maximumImagesCount: 5,
            quality: 75,
            outputType: 0
        }
        
        this.imagePicker.getPictures(options).then(
            (file_uris) => {
                
                console.log(file_uris);
                this.masterDetailService.setUris(file_uris);
                //this.navCtrl.navigateForward('gallery');
                this.cntImagetoLoad = file_uris.length;
                this.presentLoading();
                for (let i = 0; i < file_uris.length; i++) {
                    
                    
                    this.getBase64String(file_uris[i]);
                    
                    
                }
                //////this.getImageList();
            },(err) => { console.log('uh oh'); }
        );
    }

    getBase64String(imageUri) {
        let fileName = imageUri.split('/').pop();
        let path = imageUri.substring(0, imageUri.lastIndexOf("/") + 1);
        //var window: any;
        //window.resolveLocalFileSystemURI(imageUri, (fileEntry) => {
        //    fileEntry.getMetadata((metadata) => {
        //        console.log("image size : " + metadata.size);
        //        console.log("image date : " + metadata.modificationTime);
        //    });
        //});
        this.file.readAsDataURL(path, fileName)
            .then(base64File => {
                //const cameraDetail = <CameraDetail>JSON.parse(base64File.replace("data:image/jpeg;base64,", ''));

                //const exifData = <CameraExifDetail>JSON.parse(cameraDetail.json_metadata);

                this.base64Image = base64File.replace("data:image/jpeg;base64,",'');
                this.uploadFile();
                
            })
            .catch(() => {
                console.log('Error reading file');
                return '';
            })
        

    }

    setBase(baseResponse) {
        this.masterDetailService.setParentBase(baseResponse.baseParent);
        this.masterDetailService.setThumbBase(baseResponse.baseThumbnail);
    }

    getImageList() {
        console.log(this.getDateTime());
        this.communityService.getImageBaseUrls().subscribe(resp => {
            
            this.setBase(resp);
            this.communityService.getImageList().subscribe(resp => {
                this.masterDetailService.setImages(resp);
                console.log(this.masterDetailService.setImages);

                this.populateGrid("W1");
                this.populateGrid("W2");
                this.populateGrid("W3");
                this.populateGrid("W4");
                this.populateGrid("M1");
                this.populateGrid("M3");
                this.populateGrid("M2");
                this.populateGrid("Y1");
                this.populateGrid("Y2");
                this.populateGrid("Y3");
                this.populateGrid("Y4");
                this.loadingCtrl.dismiss();
            }, err => {
                this.blnLoadingDismissed = true;
                this.loadingCtrl.dismiss();
                this.presentAlertLoadError(err);
            });
        }, err => {
            this.blnLoadingDismissed = true;
            this.loadingCtrl.dismiss();
            this.presentAlertLoadError(err);
            });
        
        //this.objcommunity = this.communityService.getCommunity(id);
        //console.log(this.objcommunity);

    }

    async presentAlertLoadError(strMessage) {
        const alert = await this.alertController.create({
            header: 'Load Error!',
            message: strMessage,
            buttons: [
                 {
                    text: 'OK',
                    handler: () => {
                        
                    }
                }

            ]
        });

        await alert.present();
    }

    getGridIndex(imgUrl,strFilter) {
        let localGrid: any;
        let gridIndex = 0;
        let tempGridName = "grid_" + strFilter;
        localGrid = this[tempGridName];
        for (let i = 0; i < localGrid.length; i++) {
            for (let j = 0; j < localGrid[i].length; j++) {
                if (localGrid[i][j] === imgUrl) {
                    return gridIndex;
                } else {
                    gridIndex++;
                }
            }
        }

    }

    populateGrid(periodFilter) {
         
        let localImgList = this.masterDetailService.getImages().filter(p => p.period === periodFilter);
        let rowCount;
        if (localImgList.length > 20) {
            this.localGrid = Array(5);
            rowCount = 20;
        } else {
            this.localGrid = Array(Math.ceil(localImgList.length / 4));
            rowCount = localImgList.length
        }
        

        this.rowNum = 0;

        for (let i = 0; i < rowCount; i += 4) {
            
            this.localGrid[this.rowNum] = Array(4);

            if (localImgList[i]) {
                this.localGrid[this.rowNum][0] = this.masterDetailService.getThumbBase() +  localImgList[i].imgName;
                //this.createArrayEntry(localImgList[i].imgUrl, localImgList[i].imgParentUrl);
                this.colNum = 0;
            }

            if (localImgList[i + 1]) {
                this.localGrid[this.rowNum][1] = this.masterDetailService.getThumbBase() + localImgList[i + 1].imgName;
                this.colNum = 1;
            }
            else {
                this.localGrid[this.rowNum][1] = "";
            }

            if (localImgList[i + 2]) {
                this.localGrid[this.rowNum][2] = this.masterDetailService.getThumbBase() + localImgList[i + 2].imgName;
                this.colNum = 2;
            }
            else {
                this.localGrid[this.rowNum][2] = "";
            }

            if (localImgList[i + 3]) {
                this.localGrid[this.rowNum][3] = this.masterDetailService.getThumbBase() + localImgList[i + 3].imgName;
                this.colNum = 3;
            }
            else {
                this.localGrid[this.rowNum][3] = "";
            }
            //if (localImgList[i + 4]) {
            //    this.localGrid[this.rowNum][4] = localImgList[i + 4].imgUrl;
            //    this.colNum = 4;
            //}
            //else {
            //    this.localGrid[this.rowNum][4] = "";
            //}

            this.rowNum++;
        }
        if (localImgList.length > 20) {
            this.localGrid[4][3] = 'assets/icon/more.png';
        }
        if (periodFilter === 'W1') {
            this.grid_W1 = [];
            this.grid_W1 = this.localGrid;
        }
        else if (periodFilter === 'W2') { this.grid_W2 = this.localGrid }
        else if (periodFilter === 'W3') { this.grid_W3 = this.localGrid }
        else if (periodFilter === 'W4') { this.grid_W4 = this.localGrid }
        else if (periodFilter === 'M1') { this.grid_M1 = this.localGrid }
        else if (periodFilter === 'M2') { this.grid_M2 = this.localGrid }
        else if (periodFilter === 'M3') { this.grid_M3 = this.localGrid }
        else if (periodFilter === 'Y1') { this.grid_Y1 = this.localGrid }
        else if (periodFilter === 'Y2') { this.grid_Y2 = this.localGrid }
        else if (periodFilter === 'Y3') { this.grid_Y3 = this.localGrid }
        else if (periodFilter === 'Y4') { this.grid_Y4 = this.localGrid }

        this.rowNum--;
    }

    setImgFilter(strFilter) {
        
        this.masterDetailService.setFilter(strFilter);
        if (strFilter === "Y4") {
            //this.loadingCtrl.dismiss();
            this.presentPrompt(strFilter);
        } else {
            this.masterDetailService.setY4Filter("");
            this.presentListLoading();
            //this.masterDetailService.setListMode("GALLERY");
            //this.masterDetailService.setIsDirty(false);
            //this.navCtrl.navigateForward('imglist');
            
        }
        //(this.objImageList.filter(p => p.period === strFilter));
        
    }

    async presentListLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Busy...'
            //,duration: 3000
        });
        //return await loading.present();
        await loading.present().then(val => {
            console.log(val);
            this.masterDetailService.setListMode("GALLERY");
            this.masterDetailService.setIsDirty(false);
            this.navCtrl.navigateForward('imglist');
            //loading.dismiss();
        });
    }

    async presentPrompt(strFilter) {

        let localList = this.masterDetailService.getImages().filter(p => p.period === strFilter);
        let strYears: string = "";
        
        let alertInputOptions: any = [];
        for (let i = 0; i < localList.length; i++) {
            if (strYears.search(localList[i].imgYear + ",") === -1) {
                strYears = strYears + localList[i].imgYear + ",";
                let x = {
                    type: 'radio',
                    label: localList[i].imgYear,
                    name: localList[i].imgYear,
                    value: localList[i].imgYear,
                    checked: i===0?true:false
                };
                alertInputOptions.push(x);
            }
        }
        const alert = await this.alertController.create({
            header: "Too many Images. Please select an Year to refine results",
            inputs: alertInputOptions,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Open',
                    handler: data => {
                        this.masterDetailService.setY4Filter(data);
                        this.presentListLoading();
                        //this.masterDetailService.setListMode("GALLERY");
                        //this.masterDetailService.setIsDirty(false);
                        //this.navCtrl.navigateForward('imglist');
                        //console.log(data);
                        //console.log(data.albumname);
                        //let strAlbum: string = data.albumname;

                        //this.masterDetailService.addAlbum(strAlbum.toUpperCase().replace("-", "_"));
                        //this.Albums = this.masterDetailService.getAlbums().split(",");
                    }
                }
            ]
        });
        await alert.present();
    }

    addToGrid(imgUrl) {
        
        if (this.colNum < 3) {
            this.colNum++;
            this.grid[this.rowNum][this.colNum] = imgUrl;
        }
        else {
            let rowArray = Array(4);
            let x; 
            x = this.grid.push([ "", "", "", ""]);
            this.rowNum++;
            this.colNum = 0;
            this.grid[this.rowNum][this.colNum] = imgUrl;
        }
        
        
    }

    createArrayEntry(imgUrl,parentUrl) {
        let imgEntry = {
            "imgUrl": imgUrl,
            "imgParentUrl": parentUrl
        };

        this.newImgArray.push(imgEntry);
        
    }

    getImage() {
        const options: CameraOptions = {
            quality: 65,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA

        }

        this.camera.getPicture(options).then((imageData) => {

            
            this.presentLoading();
            this.cntImagetoLoad = 1;
            this.getBase64String(imageData);


            //this.file.resolveLocalFilesystemUrl(imageData).then(oneFile => {
            //    this.imageFileName = oneFile.name;
            //    this.file.readAsArrayBuffer(this.file.tempDirectory, oneFile.name).then(realFile=>{
            //        this.imageURI = realFile;
            //        console.log(this.imageFileName);
            //    });
            //});
            
        }, (err) => {
            console.log(err);
            this.presentToast(err);
        });
    }

    async presentLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Busy...'
            //,duration: 3000
        });
        //return await loading.present();
        await loading.present().then(val => {
            if (this.blnLoadingDismissed) {
                this.blnLoadingDismissed = false;
                loading.dismiss();
            }
            console.log(val);
            //loading.dismiss();
        });
    }

    getDateTime() {
        let currentdate = new Date();
        let strMonth: String = currentdate.toISOString().split("T")[0].split("-")[1].padStart(2, "0");
        let strDay: String = currentdate.toISOString().split("T")[0].split("-")[2].padStart(2, "0");

        //let datetime = currentdate.toISOString().split("T")[0].split("-")[0].toString() +
        //    +strMonth +
        //    + currentdate.toISOString().split("T")[0].split("-")[2].padStart(2, "0") + "-"
        //    + currentdate.toISOString().split("T")[1].split(":")[0] +
        //    + currentdate.toISOString().split("T")[1].split(":")[1] +
        //    + currentdate.toISOString().split("T")[1].split(":")[2].split(".")[0]
        //    + "-" + currentdate.toISOString().split("T")[1].split(":")[2].split(".")[1].replace("Z", "");

        let datetime = currentdate.toISOString().split("T")[0].split("-")[0].toString() 
            + currentdate.toISOString().split("T")[0].split("-")[1].padStart(2,"0") 
            + currentdate.toISOString().split("T")[0].split("-")[2].padStart(2, "0") + "-"
            + currentdate.toISOString().split("T")[1].split(":")[0] 
            + currentdate.toISOString().split("T")[1].split(":")[1]  
            + currentdate.toISOString().split("T")[1].split(":")[2].split(".")[0]
            + "-" + currentdate.toISOString().split("T")[1].split(":")[2].split(".")[1].replace("Z","");
        return datetime;
    }

    getDatePart(strPart) {
        var currentdate = new Date();
        if (strPart === "Y") {
            return currentdate.toISOString().split("T")[0].split("-")[0];
        } else if (strPart === "M") {
            return currentdate.toISOString().split("T")[0].split("-")[1]
        }           
       
    }

    uploadFile() {
        

        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });
        const fileTransfer: FileTransferObject = this.transfer.create();

       let picDetail = {
            "imgName": this.getDateTime()  + "-APP.jpg",
            "imgData": this.base64Image
        }

        
        this.httpClient.post(this.communityService.baseUrl+ '/ImageUpload/File/xyz.jpg/', picDetail, requestOptions)
            .subscribe(data => {
                this.base64Image = "";
                console.log(data['_body']);
                this.appendToImgList(JSON.parse(data['_body']));
                this.cntImagetoLoad--;
                if (this.cntImagetoLoad === 0) {
                    this.loadingCtrl.dismiss();
                    this.populateGrid("W1");
                    this.presentToast("Image uploaded successfully");
                    
                }
                
               
             }, error => {
                 console.log(error);
                 this.loadingCtrl.dismiss();
                 this.presentToast(error);
            });

        
    }

    appendToImgList(newImg) {
        let newEntry = {
            "imgName": newImg.imgName,
            //"imgUrl": newImg.imgUrl,
            "imgParentUrl": newImg.imgParentUrl,
            "period": "W1",
            "imgAlbum": "",
            "imgYear": this.getDatePart("Y"),
            "imgMonth": this.getDatePart("M")
        };

        this.masterDetailService.pushImage(newEntry);
        this.populateGrid("W1");
    }

    async presentToast(msg) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });

        //toast.onDidDismiss(() => {
        //    console.log('Dismissed toast');
        //});

        toast.present();
    }

    slideDidChange () {
        this.slidesMoving = false;

        this.slides.getActiveIndex().then(val => {
            let slideIndex: number = val;
            this.slideIndex = val;
            //let currentSlide: Element = this.slides
            //let slideNumbers : number = this.slides.length();
            //if (slideIndex === 1) {
            //    this.slidesHeight = 200;
            //}
        });
        
        
    }

    slideWillChange() {
        this.slidesMoving = true;
    }

    ionViewWillEnter() {
        console.log("ionViewWillEnter");

        if (this.masterDetailService.getFilter() != '' && this.masterDetailService.getIsDirty()) {
            this.presentLoading();
            this.populateGrid(this.masterDetailService.getFilter());
            this.masterDetailService.setIsDirty(false);
            this.loadingCtrl.dismiss();
        }
    }

    async  presentAlertSettings() {
    const alertController = document.querySelector('ion-alert-controller');
    await alertController.componentOnReady();
    const alert = await alertController.create({
        header: 'App Settings',
        inputs: [
            {
                name: 'imgPerRow',
                value: this.masterDetailService.getImgGridCols(),
                placeholder: 'Images per Row'
            },
            {
                name: 'imgRowsPerPage',
                value: this.masterDetailService.getImgGridRows(),
                placeholder: 'Grid rows per page'
            }
        ],
        buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel')
                }
            }, {
                text: 'Ok',
                handler: data => {
                    console.log('Confirm Ok')
                                       
                    this.masterDetailService.setImgGridCols(parseInt(data.imgPerRow));
                    this.masterDetailService.setImgGridRows(parseInt(data.imgRowsPerPage));
                }
            }
        ]
    });
    return await alert.present();
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.ngOnInit();

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.target.complete();
        }, 2000);
    }
}


