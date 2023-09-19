import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
// import { FileManagerComponent } from './file-manager/file-manager.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  // {
  //   path: 'calendar',
  //   component: CalendarComponent
  // },
  {
    path: 'chat',
    component: ChatComponent
  },
  // {
  //   path: 'kanban-board',
  //   component: KanbanBoardComponent
  // },
  // {
  //   path: 'file-manager',
    // component: FileManagerComponent
  // },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'pages', loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule)
  },
  {
    path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule)
  },
  {
    path: 'ui', loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule)
  },
  {
    path: 'widgets', component: WidgetsComponent
  },
  {
    path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
  {
    path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'lookup', loadChildren: () => import('./lookup/lookup.module').then(m => m.LookupModule)
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
