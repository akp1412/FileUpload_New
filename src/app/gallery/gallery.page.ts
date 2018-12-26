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
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


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
    private strAlbum: string = "";
    varComId;
    displaySource; string;
    hasAlbum: boolean = false;
    firstSlideIndex: any = 0;
    blnAutoSlideChange: boolean = false;
    noOfSLides: any = 11;
    slidePadding: any = 5;
    

    constructor(private navCtrl: NavController,
        private photoViewer: PhotoViewer,
        private route: ActivatedRoute,
        private masterDetailService: MasterDetailService,
        public loadingCtrl: LoadingController,
        private communityService: CommunityService,
        public alertController: AlertController,
        public toastCtrl: ToastController,
        private popoverCtrl: PopoverController,
        private socialSharing: SocialSharing) {
        
        
         
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

    slideChanged() {
        this.closeLists();
        let currentIndex;
        this.slides.getPreviousIndex().then(prevInd => {
            this.slides.getActiveIndex().then(val => {
                currentIndex = val;
                if (this.objImage[this.firstSlideIndex + val].imgAlbum === '') {
                    this.hasAlbum = false;
                    this.strAlbum = this.objImage[this.firstSlideIndex + val].imgMonth + "-" + this.objImage[this.firstSlideIndex + val].imgYear;
                } else {
                    this.hasAlbum = true;
                    this.strAlbum = this.objImage[this.firstSlideIndex + val].imgAlbum;
                }

                if (this.imgUrls[val].loaded === "0") {
                    this.presentLoading();
                }
                console.log("current Index:" + val);
                this.reloadMore(val, prevInd);
            });
        });
        

    }
 
    reloadMore(currIndex, prevIndex) {

        //let startIndex;
        //let endIndex;
        //let startIndex_flush;
        //let endIndex_flush;
        //if (currIndex < 5) {
        //    let startIndex = 0
        //}
        //else {
        //    startIndex = currIndex - 5;
        //}

        //if (this.objImage.length > currIndex + 5) {
        //    endIndex = currIndex + 5;
        //}
        //else {
        //    endIndex = this.objImage.length - 1;
        //}

        //for (let i = startIndex; i <= endIndex; i++) {
        //    if (this.imgUrls[i].imgUrl === '' || this.imgUrls[i].imgUrl === 'assets/icon/Unloaded.png') {
        //        this.imgUrls[i].loaded = "0";
        //        this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.objImage[i].imgParentUrl;
        //    }
        //}

        //if (startIndex <= 5) {
        //    startIndex_flush = 0
        //} else {
        //    startIndex_flush = startIndex - 5
        //}

        //if (endIndex + 5 >= this.objImage.length ) {
        //    endIndex_flush = this.objImage.length-1
        //} else {
        //    endIndex_flush = endIndex + 5
        //}

        //for (let i = startIndex_flush; i < startIndex; i++) {
        //    this.imgUrls[i].imgUrl = 'assets/icon/Unloaded.png';
        //    this.imgUrls[i].loaded = "0";
        //}

        //for (let i = endIndex+1; i <= endIndex_flush; i++) {
        //    this.imgUrls[i].imgUrl = 'assets/icon/Unloaded.png';
        //    this.imgUrls[i].loaded = "0";
        //}


        //////////////////////////////////////////////////////////////////////////
        //if (this.blnAutoSlideChange) {
        //    this.blnAutoSlideChange = false;
        //} else {

            if (this.objImage.length > 11) {
                if (currIndex > this.slidePadding && prevIndex <= this.slidePadding) {
                    for (let i = 0; i < currIndex - this.slidePadding; i++) {
                        if (this.firstSlideIndex + this.noOfSLides < this.objImage.length) {
                            let newUrl = {
                                "imgUrl": this.masterDetailService.getParentBase() + this.objImage[this.firstSlideIndex + 11].imgParentUrl,
                                "loaded": "0"
                            }
                            this.imgUrls.shift();
                            this.imgUrls.push(newUrl);

                            this.firstSlideIndex = this.firstSlideIndex + 1;
                            //this.blnAutoSlideChange = true;
                            this.slideTo(currIndex - i - 1);
                        }
                    }
                    
                } else if (currIndex < this.slidePadding && prevIndex >= this.slidePadding) {
                    for (let i = 0; i < this.slidePadding-currIndex; i++) {
                        if (this.firstSlideIndex > 0) {
                            let newUrl = {
                                "imgUrl": this.masterDetailService.getParentBase() + this.objImage[this.firstSlideIndex - 1].imgParentUrl,
                                "loaded": "0"
                            }
                            this.imgUrls.unshift(newUrl);
                            this.imgUrls.pop();
                            this.firstSlideIndex = this.firstSlideIndex - 1;
                            //this.blnAutoSlideChange = true;
                            this.slideTo(currIndex + i + 1);
                        }
                    }
                    
                }
            //}
        }
        

        //this.imgUrls.
    }


    slideTo(index) {
        
        if (this.objImage[this.firstSlideIndex + index].imgAlbum != '') {
            this.hasAlbum = true;
        }
        console.log('pushed to:' + index);
        
        this.slides.slideTo(index,0,false);
    }

    removeFromAlbum() {
        this.AddToAlbum("APP");
    }

    AddToAlbum(strAlbum) {
        this.presentLoading();

        this.slides.getActiveIndex().then(val => {
            this.communityService.postAddToAlbum(strAlbum, this.objImage[this.firstSlideIndex + val].imgName).subscribe(resp=> {
                console.log(resp);
                this.setAlbumVals(resp, val);
                
                this.masterDetailService.setImgAlbum(this.objImage[this.firstSlideIndex + val].imgName,resp);
                this.loadingCtrl.dismiss();
                this.presentToast('Added to Album');
            }, err => {
                this.loadingCtrl.dismiss();
                this.presentToast('Failed Adding to Album');
            });
            
        });

        
    }

    setAlbumVals(resp, val) {
        //this.objImage[val].imgUrl = resp.imgUrl;
        this.objImage[this.firstSlideIndex + val].imgParentUrl =  resp.imgParentUrl;
        this.objImage[this.firstSlideIndex + val].imgAlbum = resp.imgAlbum;
        if (resp.imgAlbum === '') {
            this.hasAlbum = false;
        } else {
            this.hasAlbum = true;
        }
        this.imgUrls[val].imgUrl = this.masterDetailService.getParentBase() + resp.imgParentUrl;
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
                            this.communityService.postDelete(this.objImage[this.firstSlideIndex+ val].imgName.replace(".png", ".jpg")).subscribe(resp => {
                                console.log(resp);
                                this.objImage[val].imgUrl = 'assets/icon/imgDeleted.jpg';
                                this.imgUrls[val].imgUrl = 'assets/icon/imgDeleted.jpg';
                                this.masterDetailService.setImgDeleted(this.objImage[this.firstSlideIndex + val].imgName);
                                
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
                if (this.masterDetailService.getListShowAlbum()) {
                    this.objImage = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() &&  p.imgYear === this.masterDetailService.getImgFilterYear() && p.imgMonth === this.masterDetailService.getImgFilterMonth()));
                } else {
                    this.objImage = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === this.masterDetailService.getImgFilterYear() && p.imgMonth === this.masterDetailService.getImgFilterMonth()));
                }                
            } else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.objImage = this.masterDetailService.getImages().filter(p => (p.imgAlbum === this.masterDetailService.getCurrAlbum() && p.imgYear === this.masterDetailService.getImgFilterYear() && p.imgMonth === this.masterDetailService.getImgFilterMonth()));
            }            
        } else {
            if (this.masterDetailService.getListMode() === "GENERAL") {
                this.objImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter());
            }else if (this.masterDetailService.getListMode() === "GALLERY") {
                if (this.masterDetailService.getY4Filter() === '') {
                    if (this.masterDetailService.getListShowAlbum()) {
                        this.objImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter());
                    } else {
                        this.objImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter() && p.imgAlbum === '');
                    }
                    
                } else {
                    if (this.masterDetailService.getListShowAlbum()) {
                        this.objImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter()  && p.imgYear === this.masterDetailService.getY4Filter());
                    } else {
                        this.objImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === this.masterDetailService.getY4Filter());
                    }
                    
                }
            } else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.objImage = this.masterDetailService.getImages().filter(p => p.imgAlbum === this.masterDetailService.getCurrAlbum());
            }

            
        }
        
        ////////this.imgUrls = Array(this.objImage.length);
        ////////for (let i = 0; i <= this.objImage.length-1; i++) {
        ////////    this.imgUrls[i] = {
        ////////        "imgUrl": "",
        ////////        "loaded": "0"
        ////////    }
        ////////}
        ////////let currIndex = this.masterDetailService.getIndex();
        ////////let startIndex;
        ////////let endIndex;
        ////////if (currIndex <= 4) {
        ////////    startIndex = 0;
        ////////}
        ////////else {
        ////////    startIndex = currIndex - 5;
        ////////}

        ////////if (this.objImage.length > currIndex + 5) {
        ////////    endIndex = currIndex + 5;
        ////////}
        ////////else {
        ////////    endIndex = this.objImage.length - 1;
        ////////}

        ////////if (this.imgUrls[currIndex].imgUrl === '') {
        ////////    this.imgUrls[currIndex].imgUrl = this.masterDetailService.getParentBase() + this.objImage[currIndex].imgParentUrl;
        ////////}

        ////////for (let i = startIndex; i <= endIndex; i++) {
        ////////    if (this.imgUrls[i].imgUrl === '') {
        ////////        this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.objImage[i].imgParentUrl;
        ////////    }
            
        ////////}
        
        ////////this.slideTo(currIndex);
        ////////this.loadingCtrl.dismiss();
        //////////this.socialSharing.sh

        let slideCount;
        
        if (this.objImage.length >= this.noOfSLides) {
            slideCount = this.noOfSLides;
        } else {
            slideCount = this.objImage.length;
        }
        this.imgUrls = Array(slideCount);
        for (let i = 0; i <= slideCount - 1; i++) {
            this.imgUrls[i] = {
                "imgUrl": "",
                "loaded": "0"
            }
        }

        let currIndex = this.masterDetailService.getIndex();
        
        if (this.objImage.length <= this.noOfSLides) {
            this.firstSlideIndex = 0
            for (let i = 0; i <= slideCount - 1; i++) {
                this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.objImage[this.firstSlideIndex + i].imgParentUrl;
            }
        } else {
            
            if (currIndex <= this.slidePadding) {
                this.firstSlideIndex = 0;
                for (let i = 0; i <= slideCount - 1; i++) {
                    this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.objImage[this.firstSlideIndex + i].imgParentUrl;
                }
            } else if ((currIndex + this.slidePadding) >= this.objImage.length) {
                this.firstSlideIndex = this.objImage.length - slideCount;
                for (let i = 0; i <= slideCount - 1; i++) {
                    this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.objImage[this.firstSlideIndex + i].imgParentUrl;
                }
            } else {
                this.firstSlideIndex = currIndex - this.slidePadding;
                for (let i = 0; i <= slideCount - 1; i++) {
                    this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.objImage[this.firstSlideIndex + i].imgParentUrl;
                }
            }
            
        }
        //this.imgUrls.p
       
        //let startIndex;
        //let endIndex;
        //if (currIndex <= 4) {
        //    startIndex = 0;
        //}
        //else {
        //    startIndex = currIndex - 5;
        //}

        //if (this.objImage.length > currIndex + 5) {
        //    endIndex = currIndex + 5;
        //}
        //else {
        //    endIndex = this.objImage.length - 1;
        //}

        //if (this.imgUrls[currIndex].imgUrl === '') {
        //    this.imgUrls[currIndex].imgUrl = this.masterDetailService.getParentBase() + this.objImage[currIndex].imgParentUrl;
        //}

        //for (let i = startIndex; i <= endIndex; i++) {
        //    if (this.imgUrls[i].imgUrl === '') {
        //        this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.objImage[i].imgParentUrl;
        //    }

        //}

        this.slideTo(currIndex - this.firstSlideIndex);
        this.loadingCtrl.dismiss();
        //this.socialSharing.sh
    }

    loadImage(imgUrl) {

        this.slides.getActiveIndex().then(val => {
            this.photoViewer.show(this.objImage[this.firstSlideIndex + val].imgParentUrl);
            console.log(this.objImage[this.firstSlideIndex + val].imgParentUrl);
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

    share() {


        this.slides.getActiveIndex().then(val => {
            //this.photoViewer.show(this.objImage[val].imgParentUrl);
            //console.log(this.objImage[val].imgParentUrl);

            this.socialSharing.share("Shared from my Gallery", "Awesome Image", this.masterDetailService.getParentBase() + this.objImage[val].imgParentUrl)
                .then((entries) => {
                    console.log('success ' + JSON.stringify(entries));
                })
                .catch((error) => {
                    alert('error ' + JSON.stringify(error));
                });
        });

        
    }

    clickMainFAB(container) {
        let message = 'Clicked open social menu';
        //this.insertLog(message);
        this.toggleLists(container);
    }

    toggleLists(container) {
        var fabButton = document.getElementById(container).querySelector('ion-fab-button');
        var fabLists = document.getElementById(container).querySelectorAll('ion-fab-list');
        fabButton.activated = !fabButton.activated;
        for (var i = 0; i < fabLists.length; i++) {
            fabLists[i].activated = !fabLists[i].activated;
        }
    }

    closeLists() {
        var fabs = document.querySelectorAll('ion-fab');
        for (var i = 0; i < fabs.length; i++) {
            fabs[i].activated = false;
        }
    }

    insertAfter(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    }

    insertLog(message) {
        console.log(message);
        var el = document.querySelector('#log');
        const oldHTML = el.innerHTML;
        el.innerHTML = oldHTML + '\n' + message;
    }

    add() {
        var newEle = document.createElement('f');
        var ref = document.querySelector('f');
        this.insertAfter(newEle, ref);
        this.insertLog('add');
    }
}






