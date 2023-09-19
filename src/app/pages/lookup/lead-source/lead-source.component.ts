import { LeadSourceService } from './lead-source.service';
import { DecimalPipe } from '@angular/common';

import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  Input
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  LeadSourceSortableDirectives,
  SortEvent
} from './lead-source-sortable.directives';
import { Table } from './lead-source.modal';
import { tableData, editableTable } from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
// import { ViewCell } from 'ng2-smart-table';
@Component({
  selector: 'dealer-status-view',
  styleUrls: ['./lead-source.component.scss'],
 
  template: `
  <!-- <ui-switch
      defaultBoColor="#dfdfdf"
      color="#51d28c"
      [checked]="true"
      checkedLabel="On"
      uncheckedLabel="Off"
    ></ui-switch> -->
  `
})
export class DealerStatusViewComponent implements OnInit {
  renderValue: boolean | undefined;
  @Input() value: any | undefined;
  rowData: any;

  ngOnInit() {
    if (this.value == 'true') {
      console.log(this.value);
    } else {
      this.renderValue = true;
    }
  }
}

@Component({
  selector: 'app-lead-source',
  templateUrl: './lead-source.component.html',
  styleUrls: ['./lead-source.component.scss'],
  providers: [LeadSourceService, DecimalPipe]
})
export class LeadSourceComponent implements OnInit {
  modalTitle: string | undefined;
  particularData: string | undefined;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  @ViewChildren(LeadSourceSortableDirectives)
  headers!: QueryList<LeadSourceSortableDirectives>;

  tableData!: Table[];

  editableTable: any;

  settings = {
    hideSubHeader: false,
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<i class="fas fa-trash-alt color"></i>'
    },

    add: {
      confirmCreate: true,
      addButtonContent: '<button nbButton>ADD</button>'
    },

    edit: {
      confirmSave: true,
      editButtonContent: '<i class="fas fa-pencil-alt color"></i>',
      saveButtonContent: '<i class="fa fa-save"></i>',
      cancelButtonContent: '<i class="fa fa-times" aria-hidden="true"></i>'
    },
    columns: {
      active: {
        title: `Is Active`,
        type: `custom`,
        width: '130px',
        renderComponent: DealerStatusViewComponent,
        hideHeader: true,
        filter: false
      },
      name: {
        title: 'Lead Source',
        required: true
      }
    }
  };

  tables$: Observable<Table[]>;
  total$: Observable<number>;

  constructor(
    public service: LeadSourceService,
    private modalService: NgbModal
  ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  isDesc: boolean = false;
  column: any = 'name';

  ngOnInit(): void {
    /**
     * BreadCrumb Set
     */
    this.breadCrumbItems = [
      { label: 'Tables' },
      { label: 'DataTables', active: true }
    ];

    /***
     * All Data Get
     */
    this._fetchData();
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = tableData;
    this.editableTable = editableTable;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  // for popup
  /**
   * Open scroll modal
   * @param staticDataModal scroll modal data
   *
   *
   */
  /*  staticModal(staticDataModal: any, rowData: any, modalname: any) {
    if (modalname == 0) {
      this.modalTitle = 'Add Manufacturer';
    } else {
      this.modalTitle = 'Edit Manufacturer';
      this.particularData = rowData.name;
      console.log(rowData);
    }
    this.modalService.open(staticDataModal, {
      backdrop: 'static',
      keyboard: false,
      centered: true,
      windowClass: 'modal-holder'
    });
  } */

  /**
   * Sort data
   * @param property
   */
  sort(property: string | number) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.tableData.sort((a: any, b: any) => {
      if (a[property] < b[property]) {
        return -1 * direction;
      } else if (a[property] > b[property]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

  // delete edit save functions
  onDeleteConfirm(event: any) {
    console.log('Delete Event In Console');
    console.log(event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event: any) {
    console.log('Create Event In Console');
    console.log(event);
  }

  onSaveConfirm(event: any) {
    console.log('Edit Event In Console');
    console.log(event);
  }
}
