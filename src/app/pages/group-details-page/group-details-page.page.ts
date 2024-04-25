import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Bill } from 'src/app/models/bill';
import { BillService } from 'src/app/services/bill.service';
import { CustomDateModalComponent } from 'src/app/components/custom-date-modal/custom-date-modal.component';
import { BillAddComponent } from 'src/app/components/Bill/bill-add/bill-add.component';

@Component({
  selector: 'app-group-details-page',
  templateUrl: './group-details-page.page.html',
  styleUrls: ['./group-details-page.page.scss'],
})
export class GroupDetailsPagePage {
  groupId: number = 0; // Group ID for fetching group bills
  groupBills: Bill[] = []; // Array to store group bills
  filteredBills: Bill[] = []; // Array to store filtered group bills
  startDate: string = ''; // Start date for filtering bills
  endDate: string = ''; // End date for filtering bills
  showDatePicker: boolean = false; // Flag to control date picker visibility
  disableCustomDateButton: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, // ActivatedRoute for getting route parameters
    private router: Router, // Router for navigation
    private billService: BillService, // BillService for fetching group bills
    private modalController: ModalController // ModalController for opening custom date modal
  ) {}

  ngOnInit() {
    // Subscribe to route parameters to get group ID and fetch group bills
    this.activatedRoute.params.subscribe(params => {
      this.groupId = params['id'];
      this.getGroupBills(this.groupId);
    });
  }

  // Fetch group bills from the backend
  getGroupBills(groupId: number) {
    this.billService.getGroupBills(groupId).subscribe(
      response => {
        this.groupBills = response.data;
        this.filterBy('daily'); // Initialize filteredBills with daily filter
      },
      error => {
        console.error(error);
      }
    );
  }

  // Navigate to bill details page
  viewBillDetails(bill: Bill) {
    this.router.navigate(['/bill-details', bill.billId]);
  }

  // Navigate back to the group page
  goBack() {
    this.router.navigate(['/tabs/group']);
  }

  onSelectFilter(filterType: string) {
    if (filterType === 'custom') {
      this.openCustomDateModal();
    } else {
      this.filterBy(filterType);
    }
  }

  // Filter group bills based on selected filter type
  filterBy(filterType: string) {
    this.disableCustomDateButton = true;
    const today = new Date();
    switch (filterType) {
      case 'daily':
        this.startDate = this.formatDate(today);
        this.endDate = this.formatDate(today);
        break;
      case 'monthly':
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        this.startDate = this.formatDate(firstDayOfMonth);
        this.endDate = this.formatDate(today);
        break;
      case 'yearly':
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        this.startDate = this.formatDate(firstDayOfYear);
        this.endDate = this.formatDate(today);
        break;
    }
    // Resetting time part of dates to 00:00:00
    const startDate = new Date(this.startDate);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(this.endDate);
    endDate.setHours(0, 0, 0, 0);
    this.filteredBills = this.groupBills.filter(bill => this.isWithinDateRange(bill, startDate, endDate));
    this.disableCustomDateButton = false;
  }

  // Format date as MM/DD/YYYY
  formatDate(date: Date): string {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  // Check if a bill is within the selected date range
  isWithinDateRange(bill: Bill, startDate: Date, endDate: Date): boolean {
    const billDate = new Date(bill.billDate);
    billDate.setHours(0, 0, 0, 0);
    return billDate >= startDate && billDate <= endDate;
  }

  // Toggle date picker visibility
  selectDateRange() {
    this.showDatePicker = !this.showDatePicker;
  }

  // Open custom date modal to select date range
  async openCustomDateModal() {
    if (this.disableCustomDateButton) {
      return;
    }
    this.disableCustomDateButton = true;
    const modal = await this.modalController.create({
      component: CustomDateModalComponent,
      componentProps: {
        startDate: this.startDate ? this.startDate.split('T')[0] : '',
        endDate: this.endDate ? this.endDate.split('T')[0] : ''
      }
    });
    modal.onDidDismiss().then((data) => {
      if (data?.data) {
        this.startDate = data.data.startDate ? data.data.startDate.split('T')[0] : '';
        this.endDate = data.data.endDate ? data.data.endDate.split('T')[0] : '';
        this.filterBy('custom');
      }
      this.disableCustomDateButton = false;
    });
    return await modal.present();
  }

  async presentAddBillModal() 
  {
    const modal = await this.modalController.create({
      component: BillAddComponent,
      cssClass: 'my-custom-class' // İsteğe bağlı olarak özelleştirilebilir CSS sınıfı
    });
    modal.onDidDismiss().then(() => {
      this.getGroupBills(this.groupId);
    });
    return await modal.present();
  }
}
