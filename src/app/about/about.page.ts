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
        public alertController: AlertController,
        public loadingCtrl: LoadingController) { }

    ngOnInit() {
        this.Albums = this.masterDetailService.getAlbums().split(",");

    }

    async presentLoading(strAlbum) {
        const loading = await this.loadingCtrl.create({
            message: 'loading images...'
            //,duration: 3000
        });
        //return await loading.present();
        await loading.present().then(val => {
            this.loadImgLIst(strAlbum);
        });
    }

    loadImgLIst(strAlbum) {
        this.masterDetailService.setCurrAlbum(strAlbum);
        this.masterDetailService.setListMode("ALBUM");
        this.navCtrl.navigateForward('imglist');
    }

    loadAlbum(strAlbum) {
        this.presentLoading(strAlbum);
        
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
