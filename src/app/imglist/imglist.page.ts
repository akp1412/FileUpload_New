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
    //private objImage: any;
    private imgUrls: any[];
    private localGrid: Array<Array<any>>;
    galleryType = 'regular';
    imgYrs: string = '';
    currFilter: any;
    strHeading: string = "";
    blnDidLeave: boolean = false;
    loadedImages: any = 0;

    constructor(private navCtrl: NavController, private photoViewer: PhotoViewer, private route: ActivatedRoute, private masterDetailService: MasterDetailService, public loadingCtrl: LoadingController,
        private popoverCtrl: PopoverController) { }

    ngOnInit() {
        
        //await this.presentLoading();
        if (this.masterDetailService.getListMode() === "GALLERY") {
            this.strHeading = "Gallery: " + this.masterDetailService.getFilter();
            if (this.masterDetailService.getY4Filter() === '') {
                if (this.masterDetailService.getListShowAlbum()) {
                    this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() ));
                } else {
                    this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === ''));
                }
                
            } else {
                if (this.masterDetailService.getListShowAlbum()) {
                    this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() &&  p.imgYear === this.masterDetailService.getY4Filter()));
                } else {
                    this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === this.masterDetailService.getY4Filter()));
                }
                
            }
        } else if (this.masterDetailService.getListMode() === "ALBUM") {
            this.strHeading = "Album: " + this.masterDetailService.getCurrAlbum();
            this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => p.imgAlbum === this.masterDetailService.getCurrAlbum());
        }
        
        this.populateGrid();
        
        this.currFilter = "";
        this.masterDetailService.setImgFilterMonth("");
        this.masterDetailService.setImgFilterYear("");
        //this.loadingCtrl.dismiss();
       
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
        //this.presentLoading();
        if (strFilter === '0-0' || strFilter === '') {
            //this.masterDetailService.filteredImgList = this.masterDetailService.filteredImgList.filter(p => (p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]));
            if (this.masterDetailService.getY4Filter() === '') {
                this.currFilter = "";
            } else {
                if (this.masterDetailService.getListShowAlbum()) {
                    this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgYear === this.masterDetailService.getY4Filter()));
                } else {
                    this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === this.masterDetailService.getY4Filter()));
                }
                this.currFilter = "";
                
            }
            

            if (this.masterDetailService.getListMode() === "GALLERY") {
                if (this.masterDetailService.getY4Filter() === '') {
                    if (this.masterDetailService.getListShowAlbum()) {
                        this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() ));
                    } else {
                        this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === ''));
                    }
                } else {
                    if (this.masterDetailService.getListShowAlbum()) {
                        this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgYear === this.masterDetailService.getY4Filter()));
                    } else {
                        this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === this.masterDetailService.getY4Filter()));
                    }

                }
            } else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => p.imgAlbum === this.masterDetailService.getCurrAlbum());
            }

            
            this.populateGrid();
        } else {
            this.currFilter = strFilter;
            if (this.masterDetailService.getListMode() === "GALLERY") {
                if (this.masterDetailService.getListShowAlbum()) {
                    this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]));
                } else {
                    this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.period === this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]));
                }
                
            } else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.masterDetailService.filteredImgList = this.masterDetailService.getImages().filter(p => (p.imgAlbum === this.masterDetailService.getCurrAlbum() && p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]));;
            }
            
            this.populateGrid();
        }
        //this.loadingCtrl.dismiss();
    }

    async presentLoading() {
        const loading = await this.loadingCtrl.create({
            message: 'Busy...'
            ,duration: 3000
        });
        await loading.present().then(val => {
            console.log(val);
            //loading.dismiss();
        });
    }


    LoadImage(localIndex) {
        //this.presentLoading();
        if (localIndex === '') {
            console.log('shooting blanks');
        } else {
            //let imgName = imgUrl.replace(this.masterDetailService.getThumbBase(), '');
            //let intIndex = this.masterDetailService.filteredImgList.findIndex(x => x.imgName === imgName);
            let intIndex = localIndex;
            this.masterDetailService.setIndex(intIndex);
            //this.masterDetailService.setImages(this.masterDetailService.filteredImgListList.filter(p => p.period === strFilter));
            if (this.currFilter != "") {
                this.masterDetailService.setImgFilterMonth(this.currFilter.split("-")[0]);
                this.masterDetailService.setImgFilterYear(this.currFilter.split("-")[1]);
            } else {
                this.masterDetailService.setImgFilterMonth('');
                this.masterDetailService.setImgFilterYear('');
            }
            this.blnDidLeave = true;
            this.masterDetailService.setFilteredImgList(this.masterDetailService.filteredImgList);
            this.navCtrl.navigateForward('gallery');

        //this.photoViewer.show(this.masterDetailService.filteredImgListList.filter(p => p.imgUrl === imgUrl)[0].imgParentUrl);
        }
      
    }

    goback() {
        this.masterDetailService.filteredImgList = [];
        this.localGrid = [];
        this.masterDetailService.setImgFilterMonth("");
        this.masterDetailService.setImgFilterYear("");
        this.navCtrl.goBack();
    }

    

    ionViewWillEnter() {
        console.log("ionViewWillEnter");
        console.log(this.masterDetailService.filteredImgList.length);
        console.log(this.blnDidLeave);
        if (this.blnDidLeave && this.masterDetailService.getIsDirty()) {
            //this.presentLoading();
            this.filterList(this.currFilter);
            this.blnDidLeave = false;
            this.masterDetailService.setIsDirty(false);
            //this.populateGrid();
            //this.loadingCtrl.dismiss();
        }
        
    }

    loaded(imgUrl) {
        this.loadedImages++;
    }

    ionViewDidEnter() {
        console.log("view loaded with " + this.loadedImages + " images");
        this.loadingCtrl.dismiss();
    } 

    populateGrid() {
        //this.presentLoading();
        let localImgList = this.masterDetailService.filteredImgList;

        this.localGrid = Array(Math.ceil(localImgList.length / 4));

        let rowNum = 0;

        for (let i = 0; i < localImgList.length; i += 4) {

            this.localGrid[rowNum] = Array(4);

            if (localImgList[i]) {
                this.localGrid[rowNum][0] = {
                    "url": this.masterDetailService.getThumbBase() + localImgList[i].imgName,
                    "index": i
                }
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }

            }

            if (localImgList[i + 1]) {
                this.localGrid[rowNum][1] = {
                    "url": this.masterDetailService.getThumbBase() + localImgList[i + 1].imgName,
                    "index": i + 1
                }
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }
            }
            else {
                this.localGrid[rowNum][1] = {
                    "url": "",
                    "index": ""
                }
            }

            if (localImgList[i + 2]) {
                this.localGrid[rowNum][2] = {
                    "url": this.masterDetailService.getThumbBase() + localImgList[i + 2].imgName,
                    "index": i + 2
                }
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }

            }
            else {
                this.localGrid[rowNum][2] = {
                    "url": "",
                    "index": ""
                }
            }

            if (localImgList[i + 3]) {
                this.localGrid[rowNum][3] = {
                    "url": this.masterDetailService.getThumbBase() + localImgList[i + 3].imgName,
                    "index": i + 3
                }
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }

            }
            else {
                this.localGrid[rowNum][3] = {
                    "url": "",
                    "index": ""
                }
            }
            //if (localImgList[i + 4]) {
            //    this.localGrid[rowNum][4] = this.masterDetailService.getThumbBase() + localImgList[i + 4].imgName;
            //    if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
            //        this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
            //    }

            //}
            //else {
            //    this.localGrid[rowNum][4] = "";
            //}

            rowNum++;
        }

        if (this.imgYrs.length > 0) {
            if (this.imgYrs.substr(this.imgYrs.length - 1, this.imgYrs.length - 1) === ",") {
                this.imgYrs = this.imgYrs.substr(0, this.imgYrs.length - 1);
            }

        } else {
            this.imgYrs = this.imgYrs;
        }
        //this.loadingCtrl.dismiss()
    }    
    
}
