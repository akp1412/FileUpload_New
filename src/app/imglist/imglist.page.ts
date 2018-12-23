import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController,PopoverController, LoadingController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MasterDetailService } from '../../app/services/masterdetail.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ViewChild } from '@angular/core';
import { Slides } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';

@Component({
  selector: 'app-imglist',
  templateUrl: './imglist.page.html',
  styleUrls: ['./imglist.page.scss'],
})
export class ImglistPage implements OnInit {
    @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
    @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
    public images: Array<string>;
    private grid: Array<Array<string>>;
    private objImage: any;
    private imgUrls: any[];
    private localGrid: Array<Array<string>>;
    galleryType = 'regular';
    imgYrs: string = '';
    currFilter: any;
    strHeading: string = "";
    blnDidLeave: boolean = false;

    constructor(private navCtrl: NavController, private photoViewer: PhotoViewer, private route: ActivatedRoute, private masterDetailService: MasterDetailService, public loadingCtrl: LoadingController,
        private popoverCtrl: PopoverController) { }

    ngOnInit() {
        //this.presentLoading();

        if (this.masterDetailService.getListMode() === "GALLERY") {
            this.strHeading = "Gallery: " + this.masterDetailService.getFilter();
            this.objImage = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === ''));
        } else if (this.masterDetailService.getListMode() === "ALBUM") {
            this.strHeading = "Album: " + this.masterDetailService.getCurrAlbum();
            this.objImage = this.masterDetailService.getImages().filter(p => p.imgAlbum === this.masterDetailService.getCurrAlbum());
        }
        
        this.populateGrid();
        
        this.currFilter = "";
        this.masterDetailService.setImgFilterMonth("");
        this.masterDetailService.setImgFilterYear("");
        this.loadingCtrl.dismiss();
       
    }

    async presentPopover(ev: any) {
        this.masterDetailService.setImgListFilterOptions(this.imgYrs);
        const popover = await this.popoverCtrl.create({
            component: PopoverPage,
            event: ev,
            translucent: true,
            componentProps: {
                filters: this.imgYrs,
                curr_filter: this.currFilter,
                source: "GALLERY"
            }
        });
        await popover.present();
        popover.onDidDismiss().then(data => {
            console.log(data.data);
            this.filterList(data.data);
        });
    }

    filterList(strFilter) {
        if (strFilter === '0-0' || strFilter === '') {
            //this.objImage = this.objImage.filter(p => (p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]));
            this.currFilter = "";

            if (this.masterDetailService.getListMode() === "GALLERY") {
                this.objImage = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === ''));
            } else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.objImage = this.masterDetailService.getImages().filter(p => p.imgAlbum === this.masterDetailService.getCurrAlbum());
            }

            
            this.populateGrid();
        } else {
            this.currFilter = strFilter;
            if (this.masterDetailService.getListMode() === "GALLERY") {
                this.objImage = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]));
            } else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.objImage = this.masterDetailService.getImages().filter(p => (p.imgAlbum === this.masterDetailService.getCurrAlbum() && p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]));;
            }
            
            this.populateGrid();
        }
    }

    async presentLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Busy...',
            duration: 3000
        });
        return await loading.present();
    }


    LoadImage(imgUrl) {
        this.presentLoading();
        let intIndex = this.objImage.findIndex(x => x.imgUrl === imgUrl);
        this.masterDetailService.setIndex(intIndex);
        //this.masterDetailService.setImages(this.objImageList.filter(p => p.period === strFilter));
        if (this.currFilter != "") {
            this.masterDetailService.setImgFilterMonth(this.currFilter.split("-")[0]);
            this.masterDetailService.setImgFilterYear(this.currFilter.split("-")[1]);
        } else {
            this.masterDetailService.setImgFilterMonth('');
            this.masterDetailService.setImgFilterYear('');
        }
        this.blnDidLeave = true;
        this.navCtrl.navigateForward('gallery');

        //this.photoViewer.show(this.objImageList.filter(p => p.imgUrl === imgUrl)[0].imgParentUrl);

    }

    goback() {
        this.objImage = [];
        this.localGrid = [];
        this.masterDetailService.setImgFilterMonth("");
        this.masterDetailService.setImgFilterYear("");
        this.navCtrl.goBack();
    }

    populateGrid() {

        let localImgList = this.objImage;

        this.localGrid = Array(Math.ceil(localImgList.length / 5));

        let rowNum = 0;

        for (let i = 0; i < localImgList.length; i += 5) {

            this.localGrid[rowNum] = Array(5);

            if (localImgList[i]) {
                this.localGrid[rowNum][0] = localImgList[i].imgUrl;
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }
            
            }

            if (localImgList[i + 1]) {
                this.localGrid[rowNum][1] = localImgList[i + 1].imgUrl;
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }
            }
            else {
                this.localGrid[rowNum][1] = "";
            }

            if (localImgList[i + 2]) {
                this.localGrid[rowNum][2] = localImgList[i + 2].imgUrl;
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }
                
            }
            else {
                this.localGrid[rowNum][2] = "";
            }

            if (localImgList[i + 3]) {
                this.localGrid[rowNum][3] = localImgList[i + 3].imgUrl;
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }
                
            }
            else {
                this.localGrid[rowNum][3] = "";
            }
            if (localImgList[i + 4]) {
                this.localGrid[rowNum][4] = localImgList[i + 4].imgUrl;
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }
                
            }
            else {
                this.localGrid[rowNum][4] = "";
            }

            rowNum++;
        }

        if (this.imgYrs.length > 0) {
            this.imgYrs =  this.imgYrs.substr(0, this.imgYrs.length - 1);
        } else {
            this.imgYrs = this.imgYrs;
        }
        
    }

    ionViewWillEnter() {
        console.log("ionViewWillEnter");
        console.log(this.objImage.length);
        console.log(this.blnDidLeave);
        if (this.blnDidLeave && this.masterDetailService.getIsDirty()) {
            this.presentLoading();
            this.filterList(this.currFilter);
            this.blnDidLeave = false;
            this.masterDetailService.setIsDirty(false);
            //this.populateGrid();
            this.loadingCtrl.dismiss();
        }
        
    }
}
