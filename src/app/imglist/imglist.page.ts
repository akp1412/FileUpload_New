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
    @ViewChild(Slides) slides: Slides;
    @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
    @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
    public images: Array<string>;
    private grid: Array<Array<string>>;
    //private objImage: any;
    private imgUrls: any[];
    private localGrid: Array<Array<any>>;
    galleryType = 'regular';
    imgYrs: string = '';
    currFilter: any = "";
    strHeading: string = "";
    blnDidLeave: boolean = false;
    loadedImages: any = 0;
    showingFrom: any = 0;
    showingUpto: any = 0;
    arrShowingFrom: any = [];
    arrShowingUpto: any = [];
    viewString: string = "";
    noOfSlides: any = 0;
    slidePadding: any = 2;
    nowSlideEndIndex: any = 0;
    slideOpts = {
        autoHeight: 'true'
    };

    constructor(private navCtrl: NavController, private photoViewer: PhotoViewer, private route: ActivatedRoute, private masterDetailService: MasterDetailService, public loadingCtrl: LoadingController,
        private popoverCtrl: PopoverController) { }

    loadPrevDisabled() {
        if (this.showingFrom === 0) {
            return true;
        } else {
            return false;
        }
    }

    disableLoadNext() {
        if (this.showingUpto < this.masterDetailService.filteredImgList.length-1) {
            return false;
        } else {
            return true;
        }
    }    

    ngOnInit() {
        
        //await this.presentLoading();
        if (this.masterDetailService.getListMode() === "GALLERY") {
            this.strHeading = "Gallery: " + this.masterDetailService.getFilter() + " " + this.masterDetailService.getY4Filter();
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

        for (let i = 0; i < this.masterDetailService.filteredImgList.length;i++) {
            if (this.imgYrs.search(this.masterDetailService.filteredImgList[i].imgMonth + '-' + this.masterDetailService.filteredImgList[i].imgYear) === -1) {
                this.imgYrs = this.imgYrs.concat(this.masterDetailService.filteredImgList[i].imgMonth + '-' + this.masterDetailService.filteredImgList[i].imgYear + ",");
            }
        }

        //this.populateGrid(0);
        this.populateSlides();
        
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

            
            //this.populateGrid(0);
            this.populateSlides();

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
            
            //this.populateGrid(0);
            this.populateSlides();
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

    populateGrid(startIndex) {
        //this.presentLoading();
        let localImgList = this.masterDetailService.filteredImgList;

        
        let rowNum = 0;
        let endIndex: any;

        if (startIndex + this.masterDetailService.getImagesPerPage() <= localImgList.length) {
            endIndex = startIndex + this.masterDetailService.getImagesPerPage() - 1;
        } else {
            endIndex = localImgList.length - 1;
        }
        this.localGrid = [];
        this.localGrid = Array(Math.ceil((endIndex - startIndex + 1) / this.masterDetailService.getImgGridCols()));

        for (let i = 0; i < endIndex-startIndex + 1; i += this.masterDetailService.getImgGridCols()) {

            this.localGrid[rowNum] = Array(this.masterDetailService.getImgGridCols());

            for (let j = 0; j < this.masterDetailService.getImgGridCols(); j++) {

                if (localImgList[startIndex + i + j]) {
                    this.localGrid[rowNum][j] = {
                        "url": this.masterDetailService.getThumbBase() + localImgList[startIndex + i + j].imgName,
                        "index": startIndex + i + j
                    }

                } else {
                    this.localGrid[rowNum][j] = {
                        "url": "",
                        "index": ""
                    }
                }

                ////if (localImgList[startIndex + i]) {
                ////    this.localGrid[rowNum][0] = {
                ////        "url": this.masterDetailService.getThumbBase() + localImgList[startIndex + i].imgName,
                ////        "index": startIndex + i
                ////    }
                ////    //if (this.imgYrs.search(localImgList[startIndex + i].imgMonth + '-' + localImgList[startIndex + i].imgYear) === -1) {
                ////    //    this.imgYrs = this.imgYrs.concat(localImgList[startIndex + i].imgMonth + '-' + localImgList[startIndex + i].imgYear + ",");
                ////    //}

                ////}

                ////if (localImgList[startIndex + i + 1]) {
                ////    this.localGrid[rowNum][1] = {
                ////        "url": this.masterDetailService.getThumbBase() + localImgList[startIndex + i + 1].imgName,
                ////        "index": startIndex + i + 1
                ////    }
                ////    //if (this.imgYrs.search(localImgList[startIndex + i + 1].imgMonth + '-' + localImgList[startIndex + i + 1].imgYear) === -1) {
                ////    //    this.imgYrs = this.imgYrs.concat(localImgList[startIndex + i + 1].imgMonth + '-' + localImgList[startIndex + i + 1].imgYear + ",");
                ////    //}
                ////}
                ////else {
                ////    this.localGrid[rowNum][1] = {
                ////        "url": "",
                ////        "index": ""
                ////    }
                ////}

                ////if (localImgList[startIndex + i + 2]) {
                ////    this.localGrid[rowNum][2] = {
                ////        "url": this.masterDetailService.getThumbBase() + localImgList[startIndex + i + 2].imgName,
                ////        "index": startIndex + i + 2
                ////    }
                ////    //if (this.imgYrs.search(localImgList[startIndex + i + 2].imgMonth + '-' + localImgList[startIndex + i + 2].imgYear) === -1) {
                ////    //    this.imgYrs = this.imgYrs.concat(localImgList[startIndex + i + 2].imgMonth + '-' + localImgList[startIndex + i + 3].imgYear + ",");
                ////    //}

                ////}
                ////else {
                ////    this.localGrid[rowNum][2] = {
                ////        "url": "",
                ////        "index": ""
                ////    }
                ////}

                ////if (localImgList[startIndex + i + 3]) {
                ////    this.localGrid[rowNum][3] = {
                ////        "url": this.masterDetailService.getThumbBase() + localImgList[startIndex + i + 3].imgName,
                ////        "index": startIndex + i + 3
                ////    }
                ////    //if (this.imgYrs.search(localImgList[startIndex + i + 3].imgMonth + '-' + localImgList[startIndex + i + 3].imgYear) === -1) {
                ////    //    this.imgYrs = this.imgYrs.concat(localImgList[startIndex + i + 3].imgMonth + '-' + localImgList[startIndex + i + 3].imgYear + ",");
                ////    //}

                ////}
                ////else {
                ////    this.localGrid[rowNum][3] = {
                ////        "url": "",
                ////        "index": ""
                ////    }
                ////}
                //if (localImgList[i + 4]) {
                //    this.localGrid[rowNum][4] = this.masterDetailService.getThumbBase() + localImgList[i + 4].imgName;
                //    if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                //        this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                //    }

                //}
                //else {
                //    this.localGrid[rowNum][4] = "";
                //}
            }
            rowNum++;
        }

        if (this.imgYrs.length > 0) {
            if (this.imgYrs.substr(this.imgYrs.length - 1, this.imgYrs.length - 1) === ",") {
                this.imgYrs = this.imgYrs.substr(0, this.imgYrs.length - 1);
            }

        } else {
            this.imgYrs = this.imgYrs;
        }
        this.showingFrom = startIndex;
        this.showingUpto = endIndex;
        if (this.currFilter === "") {
            this.viewString = "(none) :   (" + (this.showingFrom + 1) + " to " + (this.showingUpto + 1) + " of " + localImgList.length + " )";
        } else {
            this.viewString = this.currFilter + " :   ( " + (this.showingFrom + 1) + " to " + (this.showingUpto + 1) + " of " + localImgList.length + " )";
        }
        
        //this.loadingCtrl.dismiss()
    }   

    populateSlide(startIndex,slideIndex) {
        //this.presentLoading();
        let localImgList = this.masterDetailService.filteredImgList;
        let localSlideGrid: any = [];

        let rowNum = 0;
        let endIndex: any;

        if (startIndex + this.masterDetailService.getImagesPerPage() <= localImgList.length) {
            endIndex = startIndex + this.masterDetailService.getImagesPerPage() - 1;
        } else {
            endIndex = localImgList.length - 1;
        }
        //this.localGrid = [];
        localSlideGrid = Array(Math.ceil((endIndex - startIndex + 1) / this.masterDetailService.getImgGridCols()));

        for (let i = 0; i < endIndex - startIndex + 1; i += this.masterDetailService.getImgGridCols()) {

            localSlideGrid[rowNum] = Array(this.masterDetailService.getImgGridCols());

            for (let j = 0; j < this.masterDetailService.getImgGridCols(); j++) {

                if (localImgList[startIndex + i + j]) {
                    if (localImgList[startIndex + i + j].imgName != 'assets/icon/imgDeleted.jpg') {
                        localSlideGrid[rowNum][j] = {
                            "url": this.masterDetailService.getThumbBase() + localImgList[startIndex + i + j].imgName,
                            "index": startIndex + i + j
                        }
                    } else {
                        localSlideGrid[rowNum][j] = {
                            "url": localImgList[startIndex + i + j].imgName,
                            "index": startIndex + i + j
                        }
                    }

                    

                } else {
                    localSlideGrid[rowNum][j] = {
                        "url": "",
                        "index": ""
                    }
                }

               
            }
            rowNum++;
        }

        if (this.imgYrs.length > 0) {
            if (this.imgYrs.substr(this.imgYrs.length - 1, this.imgYrs.length - 1) === ",") {
                this.imgYrs = this.imgYrs.substr(0, this.imgYrs.length - 1);
            }

        } else {
            this.imgYrs = this.imgYrs;
        }
        //this.arrshowingFrom = startIndex;
        this.nowSlideEndIndex = endIndex;
        if (this.currFilter === "") {
            this.viewString = "(none) :   (" + (this.showingFrom + 1) + " to " + (this.showingUpto + 1) + " of " + localImgList.length + " )";
        } else {
            this.viewString = this.currFilter + " :   ( " + (this.showingFrom + 1) + " to " + (this.showingUpto + 1) + " of " + localImgList.length + " )";
        }

        //this.loadingCtrl.dismiss()
        return localSlideGrid;
    }  

    populateSlides() {
        if (this.masterDetailService.filteredImgList.length > 200) {
            this.noOfSlides = Math.ceil(200 / this.masterDetailService.getImagesPerPage());
        } else {
            this.noOfSlides = Math.ceil(this.masterDetailService.filteredImgList.length / this.masterDetailService.getImagesPerPage());
        }

        this.slidePadding = Math.floor(this.noOfSlides / 2);
        this.localGrid = [];
        this.arrShowingFrom = [];
        this.arrShowingUpto = [];
        this.localGrid = Array(this.noOfSlides);
        this.arrShowingFrom = Array(this.noOfSlides);
        this.arrShowingUpto = Array(this.noOfSlides);
                
        for (let i = 0; i < this.noOfSlides; i++) {
            if (i == 0) {
                this.arrShowingFrom[i] = 0;
            } else {
                this.arrShowingFrom[i] = i * this.masterDetailService.getImagesPerPage();
            }
            this.localGrid[i] = this.populateSlide(this.arrShowingFrom[i], i);
            this.arrShowingUpto[i] = this.nowSlideEndIndex;
        }

        if (this.currFilter === "") {
            this.viewString = "(none) :   (" + (this.arrShowingFrom[0] + 1) + " to " + (this.arrShowingUpto[0] + 1) + " of " + this.masterDetailService.filteredImgList.length + " )";
        } else {
            this.viewString = this.currFilter + " :   ( " + (this.arrShowingFrom[0] + 1) + " to " + (this.arrShowingUpto[0] + 1) + " of " + this.masterDetailService.filteredImgList.length + " )";
        }
        this.slideTo(0);
    }

    slideChanged() {
        
        let currentIndex;
        this.slides.getPreviousIndex().then(prevInd => {
            this.slides.getActiveIndex().then(val => {
                currentIndex = val;
                if (this.currFilter === "") {
                    this.viewString = "(none) :   (" + (this.arrShowingFrom[val] + 1) + " to " + (this.arrShowingUpto[val] + 1) + " of " + this.masterDetailService.filteredImgList.length + " )";
                } else {
                    this.viewString = this.currFilter + " :   ( " + (this.arrShowingFrom[val] + 1) + " to " + (this.arrShowingUpto[val] + 1) + " of " + this.masterDetailService.filteredImgList.length + " )";
                }
                this.reloadMore(val, prevInd);
            });
        });


    }

    loadPrevPage() {
        this.populateGrid(this.showingFrom - this.masterDetailService.getImagesPerPage());
    }

    loadNextPage() {
        this.populateGrid(this.showingFrom + this.masterDetailService.getImagesPerPage());
    }

    reloadMore(currIndex, prevIndex) {

        if (this.masterDetailService.filteredImgList.length > this.noOfSlides * this.masterDetailService.getImagesPerPage()) {
            if ((currIndex > prevIndex) && currIndex + this.slidePadding >= this.noOfSlides) {
                let localShowingFrom = this.arrShowingFrom[this.noOfSlides - 1] + this.masterDetailService.getImagesPerPage();
                if (localShowingFrom < this.masterDetailService.filteredImgList.length) {
                    //this.arrShowingFrom[this.noOfSlides - 1] =
                    this.localGrid.shift();

                    this.localGrid.push(this.populateSlide(localShowingFrom, this.noOfSlides - 1));
                    this.arrShowingFrom.shift();
                    this.arrShowingFrom.push(localShowingFrom);
                    this.arrShowingUpto.shift();
                    this.arrShowingUpto.push(this.nowSlideEndIndex);

                    this.slideTo(currIndex - 1);
                }
                
            } else if ((currIndex < prevIndex) && currIndex < this.slidePadding ) {
                let localShowingFrom = this.arrShowingFrom[0] - this.masterDetailService.getImagesPerPage();
                if (localShowingFrom >= 0) {
                    this.localGrid.pop();
                    this.localGrid.unshift(this.populateSlide(localShowingFrom, 0));
                    this.arrShowingFrom.pop();
                    this.arrShowingFrom.unshift(localShowingFrom);
                    this.arrShowingUpto.pop();
                    this.arrShowingUpto.unshift(this.nowSlideEndIndex);
                    this.slideTo(currIndex + 1);
                }
            }
        }
       
    }

    slideTo(index) {

        console.log('pushed to:' + index);
        if (this.currFilter === "") {
            this.viewString = "(none) :   (" + (this.arrShowingFrom[index] + 1) + " to " + (this.arrShowingUpto[index] + 1) + " of " + this.masterDetailService.filteredImgList.length + " )";
        } else {
            this.viewString = this.currFilter + " :   ( " + (this.arrShowingFrom[index] + 1) + " to " + (this.arrShowingUpto[index] + 1) + " of " + this.masterDetailService.filteredImgList.length + " )";
        }
        this.slides.slideTo(index, 0, false);
    }

  
   
}
