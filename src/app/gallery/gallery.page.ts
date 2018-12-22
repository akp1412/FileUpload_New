import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController,PopoverController, NavParams, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MasterDetailService } from '../../app/services/masterdetail.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ViewChild } from '@angular/core';
import { Slides } from '@ionic/angular';
import { CommunityService } from '../../app/services/community.service';
import { AlertController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage {
    @ViewChild(Slides) slides: Slides;
    

    public images: Array<string>;
    private grid: Array<Array<string>>;
    private objImage: any;
    private imgUrls: any[];
    varComId;
    displaySource; string;
    hasAlbum: boolean = false;
    

    constructor(private navCtrl: NavController,
        private photoViewer: PhotoViewer,
        private route: ActivatedRoute,
        private masterDetailService: MasterDetailService,
        public loadingCtrl: LoadingController,
        private communityService: CommunityService,
        public alertController: AlertController,
        public toastCtrl: ToastController,
        private popoverCtrl: PopoverController) {
        
        
         
    }

    goback() {
        this.objImage = [];
        this.imgUrls = [];
        this.navCtrl.goBack();
    }

    async presentPopover(ev: any) {
       const popover = await this.popoverCtrl.create({
            component: PopoverPage,
            event: ev,
            translucent: true,
            componentProps: {
                filters: '',
                curr_filter: '',
                source: "ALBUM",
                curr_album: this.masterDetailService.getLastActiveAlbum(),
                albums: this.masterDetailService.getAlbums()
            }
        });
        await popover.present();
        popover.onDidDismiss().then(data => {
            console.log(data.data);
            if (data.data != '') {
                try {
                    this.AddToAlbum(data.data.toString());
                } catch (err) {

                }
                
            }
        });
    }

    slideChanged() {
        let currentIndex;
        this.slides.getActiveIndex().then(val => {
            currentIndex = val;
            if (this.objImage[val].imgAlbum === '') {
                this.hasAlbum = false;
            } else {
                this.hasAlbum = true;
            }

            if (this.imgUrls[val].loaded === "0") {
                this.presentLoading();
            }
            console.log("current Index:" + val);
            this.reloadMore(val);
        });

    }

    async presentLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Busy...',
            duration: 3000
        });
        return await loading.present();
    }

    loaded(imgIndex) {
        this.imgUrls[this.imgUrls.findIndex(p => p.imgUrl === imgIndex)].loaded = "1";
        this.slides.getActiveIndex().then(val => {
            if (this.imgUrls.findIndex(p => p.imgUrl === imgIndex) === val) {
                this.loadingCtrl.dismiss();
            }
        });
    }

    reloadMore(currIndex) {

        let startIndex;
        let endIndex;
        if (currIndex < 5) {
            let startIndex = 0
        }
        else {
            startIndex = currIndex - 5;
        }

        if (this.objImage.length > currIndex + 5) {
            endIndex = currIndex + 5;
        }
        else {
            endIndex = this.objImage.length - 1;
        }

        for (let i = startIndex; i <= endIndex; i++) {
            if (this.imgUrls[i].imgUrl === '') {
                this.imgUrls[i].imgUrl = this.objImage[i].imgParentUrl;
            }
        }
    }


    slideTo(index) {
        
        if (this.objImage[index].imgAlbum != '') {
            this.hasAlbum = true;
        }
        this.slides.slideTo(index);
    }

    removeFromAlbum() {
        this.AddToAlbum("APP");
    }

    AddToAlbum(strAlbum) {
        this.presentLoading();

        this.slides.getActiveIndex().then(val => {
            this.communityService.postAddToAlbum(strAlbum, this.objImage[val].imgName).subscribe(resp=> {
                console.log(resp);
                this.setAlbumVals(resp, val);
                
                this.masterDetailService.setImgAlbum(this.objImage[val].imgName,resp);
                this.loadingCtrl.dismiss();
                this.presentToast('Added to Album');
            }, err => {
                this.loadingCtrl.dismiss();
                this.presentToast('Failed Adding to Album');
            });
            
        });

        
    }

    setAlbumVals(resp, val) {
        this.objImage[val].imgUrl = resp.imgUrl;
        this.objImage[val].imgParentUrl = resp.imgParentUrl;
        this.objImage[val].imgAlbum = resp.imgAlbum;
        if (resp.imgAlbum === '') {
            this.hasAlbum = false;
        } else {
            this.hasAlbum = true;
        }
        this.imgUrls[val].imgUrl = resp.imgParentUrl;
    }

    async presentAlertMultipleButtons() {
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Sure to delete image from Server',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                       console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Delete',
                    handler: () => {
                        this.slides.getActiveIndex().then(val => {
                            this.presentLoading();
                            this.communityService.postDelete(this.objImage[val].imgName.replace(".png", ".jpg")).subscribe(resp => {
                                console.log(resp);
                                this.objImage[val].imgUrl = 'assets/icon/imgDeleted.jpg';
                                this.imgUrls[val].imgUrl = 'assets/icon/imgDeleted.jpg';
                                this.masterDetailService.setImgDeleted(this.objImage[val].imgName);
                                
                                this.loadingCtrl.dismiss();
                                this.presentToast('Image Deleted from Server');
                            });
                        });

                    }
                }
                
            ]
        });



        await alert.present();
    }

    ngOnInit() {

        this.displaySource = this.masterDetailService.getListMode();
        if (this.masterDetailService.getImgFilterMonth() != '' && this.masterDetailService.getImgFilterYear() != '') {
            if (this.masterDetailService.getListMode() === "GENERAL") {
                this.objImage = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() &&  p.imgYear === this.masterDetailService.getImgFilterYear() && p.imgMonth === this.masterDetailService.getImgFilterMonth()));
            }else if (this.masterDetailService.getListMode() === "GALLERY") {
                this.objImage = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === this.masterDetailService.getImgFilterYear() && p.imgMonth === this.masterDetailService.getImgFilterMonth()));
            } else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.objImage = this.masterDetailService.getImages().filter(p => (p.imgAlbum === this.masterDetailService.getCurrAlbum() && p.imgYear === this.masterDetailService.getImgFilterYear() && p.imgMonth === this.masterDetailService.getImgFilterMonth()));
            }
            
        } else {
            if (this.masterDetailService.getListMode() === "GENERAL") {
                this.objImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter());
            }else if (this.masterDetailService.getListMode() === "GALLERY") {
                this.objImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter() && p.imgAlbum === '');
            } else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.objImage = this.masterDetailService.getImages().filter(p => p.imgAlbum === this.masterDetailService.getCurrAlbum());
            }

            
        }
        
        this.imgUrls = Array(this.objImage.length);
        for (let i = 0; i <= this.objImage.length-1; i++) {
            this.imgUrls[i] = {
                "imgUrl": "",
                "loaded": "0"
            }
        }
        let currIndex = this.masterDetailService.getIndex();
        let startIndex;
        let endIndex;
        if (currIndex <= 4) {
            startIndex = 0;
        }
        else {
            startIndex = currIndex - 5;
        }

        if (this.objImage.length > currIndex + 5) {
            endIndex = currIndex + 5;
        }
        else {
            endIndex = this.objImage.length - 1;
        }

        if (this.imgUrls[currIndex].imgUrl === '') {
            this.imgUrls[currIndex].imgUrl = this.objImage[currIndex].imgParentUrl;
        }

        for (let i = startIndex; i <= endIndex; i++) {
            if (this.imgUrls[i].imgUrl === '') {
                this.imgUrls[i].imgUrl = this.objImage[i].imgParentUrl;
            }
            
        }
        
        this.slideTo(currIndex);
        this.loadingCtrl.dismiss();
    }

    loadImage(imgUrl) {

        this.slides.getActiveIndex().then(val => {
            this.photoViewer.show(this.objImage[val].imgParentUrl);
            console.log(this.objImage[val].imgParentUrl);
        });
    }

    deleteImage() {

        this.presentAlertMultipleButtons();
    }

    async presentToast(msg) {
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom'
        });

        //toast.onDidDismiss(() => {
        //    console.log('Dismissed toast');
        //});

        toast.present();
    }

    

    }



