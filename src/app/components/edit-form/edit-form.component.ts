import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CampaignInterface } from 'src/app/types/campaigns.interface';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  @Output() editFormFalse = new EventEmitter();
  @Input() allCampaigns: CampaignInterface[] = [];

  editedName: string = "";
  editedTown: string = "";
  editedCampaignFund: number = 0;
  editedBidAmount: number = 0;
  editedRadius: number = 0;
  editedStatus: boolean = false;
  editedKeywords: string = "";

  // Setting initial value for states
  ngOnInit(): void {
    this.allCampaigns.map(campaign => {
      this.editedName = campaign.name;
      this.editedTown = campaign.town;
      this.editedCampaignFund = campaign.campaignFund;
      this.editedBidAmount = campaign.bidAmount;
      this.editedRadius = campaign.radius;
      this.editedStatus = campaign.status;
      this.editedKeywords = campaign.keywords;
    });
  };

  // Changing inputs data
  changeName(event: any) {
    this.editedName = event.target.value;
  };
  changeTown(event: any) {
    this.editedTown = event.target.value;
  };
  changeCampaignFund(event: any) {
    this.editedCampaignFund = parseInt(event.target.value);
  };
  changeBidAmount(event: any) {
    this.editedBidAmount = parseInt(event.target.value);
  };
  changeRadius(event: any) {
    this.editedRadius = parseInt(event.target.value);
  };
  changeKeywords(event: any) {
    this.editedKeywords = event.target.value;
  };
  changeStatus() {
    this.editedStatus = !this.editedStatus;
  };

  handleEdit(
    editedName: string, editedCampaignFund: number, editedTown: string,
    editedBidAmount: number, editedRadius: number, editedStatus: boolean, editedKeywords: string
  ) {
    this.allCampaigns.map(campaign => {
      campaign.name = editedName;
      campaign.town = editedTown;
      campaign.campaignFund = editedCampaignFund;
      campaign.bidAmount = editedBidAmount;
      campaign.radius = editedRadius;
      campaign.status = editedStatus;
      campaign.keywords = editedKeywords;
    });
    window.localStorage.setItem("campaigns", JSON.stringify(this.allCampaigns));
    this.editFormFalse.emit();
  };
};