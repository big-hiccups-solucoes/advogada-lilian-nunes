import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageComponent } from './page/page.component';
import { ServiceInfoComponent } from './services-info/components/service-info.component';

export const routes: Routes = [
    { path: '', component: PageComponent },
    { path: 'service-info/:serviceType', component: ServiceInfoComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })
  export class RoutingModule {}