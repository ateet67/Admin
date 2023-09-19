import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManufacturerComponent} from "./manufacturer/manufacturer.component"
import {LeadSourceComponent} from "./lead-source/lead-source.component"
const routes: Routes = [
  {
    path:"manufacturer",
    component:ManufacturerComponent
  },
  {
    path:"leadsource",
    component:LeadSourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookupRoutingModule { }
