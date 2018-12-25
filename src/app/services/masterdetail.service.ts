import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class MasterDetailService {
    private uris: any;
    private objImages: any;
    private imgIndex: any;
    private perFilter: any;
    private imgListPeriods: string;
    private imgFilterYear: string = "";
    private imgFilterMonth: string = "";
    private strAlbums: string = "";
    private imgListMode: string = "";
    private strCurrAlbum: string = "";
    private strLastActiveAlbum: string = "";
    private IsDirty: boolean = false;
    private strParentBase: string = "";
    private strThumbBase: string = "";
    private strY4Filter: string = "";
    private blnListShowAlbums: boolean = false;

    constructor() { }

    public setUris(uris) {
        this.uris = uris;
    }

    public getUris() {
        return this.uris;
    }

    public getImages() {
        return this.objImages;
    }

    public setImages(Images) {
        this.objImages = Images;
        let x = Images.filter(p => p.imgAlbum != '');
       
        for (let i = 0; i < x.length; i++) {
            if (this.strAlbums.search(x[i].imgAlbum) === -1) {
                this.strAlbums = this.strAlbums.concat(x[i].imgAlbum + ',');
            }
        }
        
    }

    public pushImage(newEntry) {
        this.objImages.push(newEntry);
    }

    public setIndex(intIndex) {
        this.imgIndex = intIndex;
    }

    public getIndex() {
        return this.imgIndex;
    }

    public getFilter() {
        return this.perFilter;
    }

    public setFilter(strFilter) {
        this.perFilter = strFilter;
    }

    public setImgListFilterOptions(strFilter) {
        this.imgListPeriods = strFilter;
    }

    public getImgListFilterOptions() {
        return this.imgListPeriods;
    }

    public setImgFilterMonth(strFilter) {
        this.imgFilterMonth = strFilter;
    }

    public getImgFilterMonth() {
        return this.imgFilterMonth;
    }

    public setImgFilterYear(strFilter) {
        this.imgFilterYear = strFilter;
    }

    public getImgFilterYear() {
        return this.imgFilterYear;
    }

    public setImgDeleted(imgName) {
        let listIndex = this.objImages.findIndex(p => p.imgName === imgName);
        this.objImages[listIndex].imgUrl = 'assets/icon/imgDeleted.jpg';
        this.objImages[listIndex].imgParentUrl = 'assets/icon/imgDeleted.jpg';
        this.IsDirty = true;
    }

    public getAlbums() {
        if (this.strAlbums.length > 0) {
            return this.strAlbums.substr(0, this.strAlbums.length - 1);
        } else {
            return this.strAlbums;
        }
        
    }

    public getListMode() {
        return this.imgListMode;
    }

    public setListMode(strMode) {
        this.imgListMode = strMode;
    }

    public getCurrAlbum() {
        return this.strCurrAlbum;
    }

    public setCurrAlbum(strAlbum) {
        this.strCurrAlbum = strAlbum;
    }

    public setLastActiveAlbum(strAlbum) {
        this.strAlbums = strAlbum + "," + this.strAlbums.replace(strAlbum + ",", "");
        this.strLastActiveAlbum = strAlbum;
    }

    public getLastActiveAlbum() {
        return this.strLastActiveAlbum;
    }

    public addAlbum(strAlbum) {
        this.strAlbums = strAlbum + "," + this.strAlbums.replace(strAlbum + ",", "");
    }

    public setImgAlbum(imgKey, resp) {
        let intIndex = this.objImages.findIndex(x => x.imgName === imgKey);
        this.objImages[intIndex].imgName = resp.imgName;
        //this.objImages[intIndex].imgUrl = resp.imgUrl;
        this.objImages[intIndex].imgParentUrl = resp.imgParentUrl;
        this.objImages[intIndex].period = resp.period;
        this.objImages[intIndex].imgMonth = resp.imgMonth;
        this.objImages[intIndex].imgYear = resp.imgYear;
        this.objImages[intIndex].imgAlbum = resp.imgAlbum;
        if (resp.imgAlbum != '') {
            this.setLastActiveAlbum(resp.imgAlbum);
        }
        
        this.IsDirty = true;

    }

    public setIsDirty(blnDirty) {
        this.IsDirty = blnDirty;
    }

    public getIsDirty() {
        return this.IsDirty;
    }

    public setParentBase(strBase) {
        this.strParentBase = strBase;
    }

    public setThumbBase(strBase) {
        this.strThumbBase = strBase;
    }

    public getParentBase() {
        return this.strParentBase;
    }

    public getThumbBase() {
        return this.strThumbBase;
    }

    public setY4Filter(strFilter) {
        this.strY4Filter = strFilter;
    }

    public getY4Filter() {
        return this.strY4Filter;
    }

    public getListShowAlbum() {
        return this.blnListShowAlbums;
    }
}