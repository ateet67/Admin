import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbDropdownModule,
  NgbNavModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ngx-drag-drop';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { WidgetModule } from '../shared/widget/widget.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChatComponent } from './chat/chat.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ExtraspagesModule } from './extraspages/extraspages.module';
import { InvoicesModule } from './invoices/invoices.module';
import { UiElementsModule } from './ui-elements/ui-elements.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { FormModule } from './form/form.module';
import { IconsModule } from './icons/icons.module';
import { LookupModule } from './lookup/lookup.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    ChatComponent,
    GalleryComponent,
    WidgetsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbDropdownModule,
    NgApexchartsModule,
    SharedModule,
    WidgetModule,
    LeafletModule,
    SimplebarAngularModule,
    FormsModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbTooltipModule,
    ExtraspagesModule,
    InvoicesModule,
    UiElementsModule,
    FormModule,
    IconsModule,
    DndModule,
    LookupModule,
  ],
})
export class PagesModule {}
