import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { MasterDetailService } from '../../app/services/masterdetail.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage {
    filterBy: any;
    selectOptions: string[];
    excludeAlbums: boolean = true;
    displayMode: string = "";
    currAlbum: string = "";

    constructor(private navParams: NavParams, private popoverController: PopoverController, private masterDetailService: MasterDetailService) {
       
    }

    populateOptions() {
        let strOptions = this.masterDetailService.getImgListFilterOptions().split(',');
        this.selectOptions = this.masterDetailService.getImgListFilterOptions().split(',');
    }

    close() {
        this.popoverController.dismiss("");
    }

    filter() {
        this.popoverController.dismiss(this.filterBy);
    }

    AddToAlbum() {
        this.popoverController.dismiss(this.currAlbum);
    }

    clear() {
        this.popoverController.dismiss("0-0");
    }

    ngOnInit() {
        this.displayMode = this.navParams.get('source')
        if (this.displayMode === "GALLERY") {
            this.selectOptions = this.navParams.get('filters').split(',');
            this.filterBy = this.navParams.get('curr_filter');
        } else if (this.displayMode === "ALBUM") {
            this.selectOptions = this.navParams.get('albums').split(',');
            this.currAlbum = this.navParams.get('curr_album');
        }
        
    }

}
