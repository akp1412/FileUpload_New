import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController,PopoverController, NavParams, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MasterDetailService } from '../../app/services/masterdetail.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ViewChild } from '@angular/core';
import { Slides, Tabs } from '@ionic/angular';
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
    //private objImage: any;
    private imgUrls: any[];
    private strAlbum: string = "";
    varComId;
    displaySource: string;
    hasAlbum: boolean = false;
    firstSlideIndex: any = 0;
    blnAutoSlideChange: boolean = false;
    noOfSLides: any = 11;
    slidePadding: any = 5;
    blnFirstImage: boolean = false;
    blnShowOptions: boolean = false;

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

        if (this.masterDetailService.getIsDirty() && this.masterDetailService.getListMode() != 'GENERAL') {
            this.presentBackLoading();
        } else {
            //this.masterDetailService.filteredImgList = [];
            this.imgUrls = [];
            this.navCtrl.goBack();
        }
        
    }

    async presentBackLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Applying changes...'
            //,duration: 3000
        });
        await loading.present().then(val => {
            this.masterDetailService.filteredImgList = [];
            this.imgUrls = [];
            this.navCtrl.goBack();
        });
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

    async presentLongLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Busy...'
            //,duration: 3000
        });
        return await loading.present();
    }

    async presentLongishLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Busy...',
            duration: 10000
        });
        return await loading.present();
    }

    loaded(imgIndex) {
        this.imgUrls[imgIndex - this.firstSlideIndex].loaded = "1";
        this.slides.getActiveIndex().then(val => {
            if (this.imgUrls[val].loaded === "1") {
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
                if (this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgAlbum === '') {
                    this.hasAlbum = false;
                    this.strAlbum = this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgMonth + "-" + this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgYear;
                } else {
                    this.hasAlbum = true;
                    this.strAlbum = this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgAlbum + " : " + this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgMonth + "-" + this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgYear;
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

        //if (this.masterDetailService.filteredImgList.length > currIndex + 5) {
        //    endIndex = currIndex + 5;
        //}
        //else {
        //    endIndex = this.masterDetailService.filteredImgList.length - 1;
        //}

        //for (let i = startIndex; i <= endIndex; i++) {
        //    if (this.imgUrls[i].imgUrl === '' || this.imgUrls[i].imgUrl === 'assets/icon/Unloaded.png') {
        //        this.imgUrls[i].loaded = "0";
        //        this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.masterDetailService.filteredImgList[i].imgParentUrl;
        //    }
        //}

        //if (startIndex <= 5) {
        //    startIndex_flush = 0
        //} else {
        //    startIndex_flush = startIndex - 5
        //}

        //if (endIndex + 5 >= this.masterDetailService.filteredImgList.length ) {
        //    endIndex_flush = this.masterDetailService.filteredImgList.length-1
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

            if (this.masterDetailService.filteredImgList.length > this.noOfSLides) {
                if (currIndex > this.slidePadding && prevIndex <= this.slidePadding) {
                    for (let i = 0; i < currIndex - this.slidePadding; i++) {
                        if (this.firstSlideIndex + this.noOfSLides < this.masterDetailService.filteredImgList.length) {
                            let newUrl
                            if (this.masterDetailService.filteredImgList[this.firstSlideIndex + this.noOfSLides].imgParentUrl != 'assets/icon/imgDeleted.jpg') {
                                newUrl = {
                                    "imgUrl": this.masterDetailService.getParentBase() + this.masterDetailService.filteredImgList[this.firstSlideIndex + this.noOfSLides].imgParentUrl,
                                    "loaded": "0",
                                    "index": this.firstSlideIndex + this.noOfSLides
                                }
                            } else {
                                newUrl = {
                                    "imgUrl": this.masterDetailService.filteredImgList[this.firstSlideIndex + this.noOfSLides].imgParentUrl,
                                    "loaded": "0",
                                    "index": this.firstSlideIndex + this.noOfSLides
                                }
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
                            let newUrl;
                            if (this.masterDetailService.filteredImgList[this.firstSlideIndex -1].imgParentUrl != 'assets/icon/imgDeleted.jpg') {
                                newUrl = {
                                    "imgUrl": this.masterDetailService.getParentBase() + this.masterDetailService.filteredImgList[this.firstSlideIndex - 1].imgParentUrl,
                                    "loaded": "0",
                                    "index": this.firstSlideIndex -1
                                }
                            } else {
                                newUrl = {
                                    "imgUrl": this.masterDetailService.filteredImgList[this.firstSlideIndex - 1].imgParentUrl,
                                    "loaded": "0",
                                    "index": this.firstSlideIndex - 1
                                }
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
        
        if (this.masterDetailService.filteredImgList[this.firstSlideIndex + index].imgAlbum != '') {
            this.hasAlbum = true;
        }
        console.log('pushed to:' + index);
        if (this.imgUrls[index].loaded === "0") {
            if (this.blnFirstImage) {
                this.presentLongishLoading();
                this.blnFirstImage = false;
            } else {
                this.presentLoading();
            }
            
        } else {
            this.loadingCtrl.dismiss();
        }
        this.slides.slideTo(index,0,false);
    }

    removeFromAlbum() {
        this.presentAlertRemoveAlbum();
        
    }

    AddToAlbum(strAlbum) {
        this.presentLongLoading();

        this.slides.getActiveIndex().then(val => {
            this.communityService.postAddToAlbum(strAlbum, this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgName).subscribe(resp=> {
                console.log(resp);
                this.setAlbumVals(resp, val);
                
                this.masterDetailService.setImgAlbum(this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgName,resp);
                this.loadingCtrl.dismiss();
                if (strAlbum === "APP") {
                    this.presentToast('Removed from Album');
                } else {
                    this.presentToast('Added to Album');
                }
                
            }, err => {
                this.loadingCtrl.dismiss();
                if (strAlbum === "APP") {
                    this.presentToast('Failed removing from Album');
                } else {
                    this.presentToast('Failed Adding to Album');
                }
                
            });
            
        }, err => {
            this.loadingCtrl.dismiss();
            console.log(err);
            });

        
    }

    setAlbumVals(resp, val) {
        //this.masterDetailService.filteredImgList[val].imgUrl = resp.imgUrl;
        this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgParentUrl =  resp.imgParentUrl;
        this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgAlbum = resp.imgAlbum;
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
                            this.presentLongLoading();
                            this.communityService.postDelete(this.masterDetailService.filteredImgList[this.firstSlideIndex+ val].imgName.replace(".png", ".jpg")).subscribe(resp => {
                                console.log(resp);
                                this.masterDetailService.filteredImgList[val].imgUrl = 'assets/icon/imgDeleted.jpg';
                                this.imgUrls[val].imgUrl = 'assets/icon/imgDeleted.jpg';
                                this.masterDetailService.setImgDeleted(this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgName);
                                
                                this.loadingCtrl.dismiss();
                                this.presentToast('Image Deleted from Server');
                            }, err => {
                                console.log(err);
                                this.loadingCtrl.dismiss();
                                this.presentToast('Image could not be deleted');
                                });
                        });

                    }
                }
                
            ]
        });

        await alert.present();
    }

    async presentAlertRemoveAlbum() {
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Are you sure to remove image from Album',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Remove',
                    handler: () => {
                        this.AddToAlbum("APP");
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
                this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() &&  p.imgYear === this.masterDetailService.getImgFilterYear() && p.imgMonth === this.masterDetailService.getImgFilterMonth()));
            }
            //////else if (this.masterDetailService.getListMode() === "GALLERY") {
            //////    if (this.masterDetailService.getListShowAlbum()) {
            //////        this.eeobjImage = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() &&  p.imgYear === this.masterDetailService.getImgFilterYear() && p.imgMonth === this.masterDetailService.getImgFilterMonth()));
            //////    } else {
            //////        this.eeobjImage = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === this.masterDetailService.getImgFilterYear() && p.imgMonth === this.masterDetailService.getImgFilterMonth()));
            //////    }                
            //////} else if (this.masterDetailService.getListMode() === "ALBUM") {
            //////    this.eeobjImage = this.masterDetailService.getImages().filter(p => (p.imgAlbum === this.masterDetailService.getCurrAlbum() && p.imgYear === this.masterDetailService.getImgFilterYear() && p.imgMonth === this.masterDetailService.getImgFilterMonth()));
            //////}            
        } else {
            if (this.masterDetailService.getListMode() === "GENERAL") {
                this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter());
            }
            //////else if (this.masterDetailService.getListMode() === "GALLERY") {
            //////    if (this.masterDetailService.getY4Filter() === '') {
            //////        if (this.masterDetailService.getListShowAlbum()) {
            //////            this.eeobjImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter());
            //////        } else {
            //////            this.eeobjImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter() && p.imgAlbum === '');
            //////        }
                    
            //////    } else {
            //////        if (this.masterDetailService.getListShowAlbum()) {
            //////            this.eeobjImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter()  && p.imgYear === this.masterDetailService.getY4Filter());
            //////        } else {
            //////            this.eeobjImage = this.masterDetailService.getImages().filter(p => p.period === this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === this.masterDetailService.getY4Filter());
            //////        }
                    
            //////    }
            //////} else if (this.masterDetailService.getListMode() === "ALBUM") {
            //////    this.eeobjImage = this.masterDetailService.getImages().filter(p => p.imgAlbum === this.masterDetailService.getCurrAlbum());
            //////}

            
        }
        
        ////////this.imgUrls = Array(this.eeobjImage.length);
        ////////for (let i = 0; i <= this.eeobjImage.length-1; i++) {
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

        ////////if (this.eeobjImage.length > currIndex + 5) {
        ////////    endIndex = currIndex + 5;
        ////////}
        ////////else {
        ////////    endIndex = this.eeobjImage.length - 1;
        ////////}

        ////////if (this.imgUrls[currIndex].imgUrl === '') {
        ////////    this.imgUrls[currIndex].imgUrl = this.masterDetailService.getParentBase() + this.eeobjImage[currIndex].imgParentUrl;
        ////////}

        ////////for (let i = startIndex; i <= endIndex; i++) {
        ////////    if (this.imgUrls[i].imgUrl === '') {
        ////////        this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.eeobjImage[i].imgParentUrl;
        ////////    }
            
        ////////}
        
        ////////this.slideTo(currIndex);
        ////////this.loadingCtrl.dismiss();
        //////////this.socialSharing.sh

        let slideCount;
        
        if (this.masterDetailService.filteredImgList.length >= this.noOfSLides) {
            slideCount = this.noOfSLides;
        } else {
            slideCount = this.masterDetailService.filteredImgList.length;
        }
        this.imgUrls = Array(slideCount);
        for (let i = 0; i <= slideCount - 1; i++) {
            this.imgUrls[i] = {
                "imgUrl": "",
                "loaded": "0",
                "index": ""
            }
        }

        let currIndex = this.masterDetailService.getIndex();
        
        if (this.masterDetailService.filteredImgList.length <= this.noOfSLides) {
            this.firstSlideIndex = 0

            this.imgUrls[currIndex - this.firstSlideIndex].imgUrl = this.masterDetailService.getParentBase() + this.masterDetailService.filteredImgList[currIndex].imgParentUrl;

            for (let i = 0; i <= slideCount - 1; i++) {
                if (this.masterDetailService.filteredImgList[this.firstSlideIndex + i].imgParentUrl != 'assets/icon/imgDeleted.jpg') {
                    this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.masterDetailService.filteredImgList[this.firstSlideIndex + i].imgParentUrl;
                    this.imgUrls[i].index = this.firstSlideIndex + i;
                } else {
                    this.imgUrls[i].imgUrl = this.masterDetailService.filteredImgList[this.firstSlideIndex + i].imgParentUrl;
                    this.imgUrls[i].index = this.firstSlideIndex + i;
                }
                
            }
        } else {
            
            if (currIndex <= this.slidePadding) {
                this.firstSlideIndex = 0;
                
            } else if ((currIndex + this.slidePadding) >= this.masterDetailService.filteredImgList.length) {
                this.firstSlideIndex = this.masterDetailService.filteredImgList.length - slideCount;
            } else {
                this.firstSlideIndex = currIndex - this.slidePadding;
            }

            this.imgUrls[currIndex - this.firstSlideIndex].imgUrl = this.masterDetailService.getParentBase() + this.masterDetailService.filteredImgList[currIndex].imgParentUrl;

            for (let i = 0; i <= slideCount - 1; i++) {
                if (this.masterDetailService.filteredImgList[this.firstSlideIndex + i].imgParentUrl != 'assets/icon/imgDeleted.jpg') {
                    this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.masterDetailService.filteredImgList[this.firstSlideIndex + i].imgParentUrl;
                    this.imgUrls[i].index = this.firstSlideIndex + i;
                } else {
                    this.imgUrls[i].imgUrl = this.masterDetailService.filteredImgList[this.firstSlideIndex + i].imgParentUrl;
                    this.imgUrls[i].index = this.firstSlideIndex + i;
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

        //if (this.masterDetailService.filteredImgList.length > currIndex + 5) {
        //    endIndex = currIndex + 5;
        //}
        //else {
        //    endIndex = this.masterDetailService.filteredImgList.length - 1;
        //}

        //if (this.imgUrls[currIndex].imgUrl === '') {
        //    this.imgUrls[currIndex].imgUrl = this.masterDetailService.getParentBase() + this.masterDetailService.filteredImgList[currIndex].imgParentUrl;
        //}

        //for (let i = startIndex; i <= endIndex; i++) {
        //    if (this.imgUrls[i].imgUrl === '') {
        //        this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.masterDetailService.filteredImgList[i].imgParentUrl;
        //    }

        //}
        this.blnFirstImage = true;

        let currentIndex = currIndex - this.firstSlideIndex;

        if (this.masterDetailService.filteredImgList[this.firstSlideIndex + currentIndex].imgAlbum === '') {
            this.hasAlbum = false;
            this.strAlbum = this.masterDetailService.filteredImgList[this.firstSlideIndex + currentIndex].imgMonth + "-" + this.masterDetailService.filteredImgList[this.firstSlideIndex + currentIndex].imgYear;
        } else {
            this.hasAlbum = true;
            this.strAlbum = this.masterDetailService.filteredImgList[this.firstSlideIndex + currentIndex].imgAlbum + " : " + this.masterDetailService.filteredImgList[this.firstSlideIndex + currentIndex].imgMonth + "-" + this.masterDetailService.filteredImgList[this.firstSlideIndex + currentIndex].imgYear;
        }

        
        this.slideTo(currIndex - this.firstSlideIndex);
        this.loadingCtrl.dismiss();
        //this.socialSharing.sh
    }

    loadImage(imgUrl) {

        this.slides.getActiveIndex().then(val => {
            this.photoViewer.show(this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgParentUrl);
            console.log(this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgParentUrl);
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
            //this.photoViewer.show(this.masterDetailService.filteredImgList[val].imgParentUrl);
            //console.log(this.masterDetailService.filteredImgList[val].imgParentUrl);
            this.presentLongLoading();
            this.socialSharing.share("Shared from AtoZ Gallery", "Awesome Image", this.masterDetailService.getParentBase() + this.masterDetailService.filteredImgList[this.firstSlideIndex + val].imgParentUrl)
                .then((entries) => {
                    console.log('success ' + JSON.stringify(entries));
                    this.loadingCtrl.dismiss();
                })
                .catch((error) => {
                    this.loadingCtrl.dismiss();
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

    imageClicked() {
        console.log("ImageClicked");
        this.blnShowOptions = !this.blnShowOptions;
        console.log(this.blnShowOptions);
    }
}






