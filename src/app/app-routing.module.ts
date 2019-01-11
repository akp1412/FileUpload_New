import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryPageModule' },
  { path: 'imglist', loadChildren: './imglist/imglist.module#ImglistPageModule' },
    { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
    { path: 'about', loadChildren: './about/about.module#AboutPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
