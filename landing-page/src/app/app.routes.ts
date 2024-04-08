import { RouterModule, Routes } from '@angular/router';
import { ServiceInfoComponent } from './services-info-page/components/service-info/service-info.component';
import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';

export const routes: Routes = [
    { path: '', component: PageComponent },
    { path: 'service-info/:serviceType', component: ServiceInfoComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class RoutingModule {}