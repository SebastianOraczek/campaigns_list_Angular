import { Component, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent {
  @Input() allCampaigns;
  @Output() removeCampaign = new EventEmitter();

  name: string = "";
  town: string = "";
  campaignFund: number = 0;

  // Taking data from inputs
  handleName(event: any) {
    this.name = event.target.value;
  };
  handleTown(event: any) {
    this.town = event.target.value;
  };
  handleCampaignFund(event: any) {
    this.campaignFund = parseInt(event.target.value);
  };

  addCampaign(name: string, town: string, campaignFund: number) {
    this.allCampaigns.push({ id: uuidv4(), name, campaignFund, town, });
    window.localStorage.setItem("campaigns", JSON.stringify(this.allCampaigns));

    this.name = "";
    this.town = "";
    this.campaignFund = 0;
  };
};