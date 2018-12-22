import { Component } from '@angular/core';
import { NavController, LoadingController, PopoverController, NavParams, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MasterDetailService } from '../../app/services/masterdetail.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

    Albums: string[] = [];
    constructor(private navCtrl: NavController,
        private masterDetailService: MasterDetailService,
        public alertController: AlertController) { }

    ngOnInit() {
        this.Albums = this.masterDetailService.getAlbums().split(",");

    }

    loadAlbum(strAlbum) {
        this.masterDetailService.setCurrAlbum(strAlbum);
        this.masterDetailService.setListMode("ALBUM");
        this.navCtrl.navigateForward('imglist');
    }

    addAlbum() {
        this.presentPrompt();
    }

    async presentPrompt() {
        const alert = await this.alertController.create({
            header: "Add Album",
            inputs: [
                {
                    name: 'albumname',
                    placeholder: 'Album Name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Create',
                    handler: data => {
                        console.log(data);
                        console.log(data.albumname);
                        let strAlbum: string = data.albumname;
                        
                        this.masterDetailService.addAlbum(strAlbum.toUpperCase().replace("-", "_"));
                        this.Albums = this.masterDetailService.getAlbums().split(",");
                    }
                }
            ]
        });
        await alert.present();
    }
}
