import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CampaignInterface } from 'src/app/types/campaigns.interface';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  @Input() allCampaigns: CampaignInterface[] = [];
  @Output() isFormActiveFalse = new EventEmitter();

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

    this.isFormActiveFalse.emit();
  };
};
