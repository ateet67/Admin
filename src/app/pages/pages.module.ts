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
import { EmailModule } from './email/email.module';
import { ContactsModule } from './contacts/contacts.module';
import { ProjectsModule } from './projects/projects.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ExtraspagesModule } from './extraspages/extraspages.module';
import { PricingModule } from './pricing/pricing.module';
import { InvoicesModule } from './invoices/invoices.module';
import { TimelineModule } from './timeline/timeline.module';
import { UiElementsModule } from './ui-elements/ui-elements.module';
import { ExtendedUiModule } from './extended-ui/extended-ui.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { FormModule } from './form/form.module';
import { TablesModule } from './tables/tables.module';
import { IconsModule } from './icons/icons.module';
import { ChartModule } from './chart/chart.module';
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
    EmailModule,
    ContactsModule,
    ProjectsModule,
    ExtraspagesModule,
    PricingModule,
    InvoicesModule,
    TimelineModule,
    UiElementsModule,
    ExtendedUiModule,
    FormModule,
    TablesModule,
    IconsModule,
    ChartModule,
    DndModule,
    LookupModule,
  ],
})
export class PagesModule {}
