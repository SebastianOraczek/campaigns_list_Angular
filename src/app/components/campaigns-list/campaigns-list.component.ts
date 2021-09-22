import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent {
  name: string = "";
  town: string = "";
  campaignFund: number = 0;
  allCampaigns = [
    {
      id: "1",
      name: "First Campaign",
      campaignFund: 10000,
      town: "Kraków",
      // radius: 10,
      // status: false
      // bidAmount: 100,
    },
    {
      id: "2",
      name: "Second Campaign",
      campaignFund: 20000,
      town: "Wrocław",
      // radius: 20,
      // status: true
      // bidAmount: 200,
    }
  ];

  ngOnInit(): void {
    window.localStorage.setItem("campaigns", JSON.stringify(this.allCampaigns))
  };

  removeCampaign(id: string): void {
    this.allCampaigns = this.allCampaigns.filter(campaign => campaign.id !== id);
    window.localStorage.setItem("campaigns", JSON.stringify(this.allCampaigns));
  };

  handleName(event: any) {
    this.name = event.target.value;
  };

  handleTown(event: any) {
    this.town = event.target.value;
  };
  handlecampaignFund(event: any) {
    this.campaignFund = parseInt(event.target.value);
  };

  addCampaign(name: string, town: string, campaignFund: number) {
    this.allCampaigns.push({ id: uuidv4(), name: name, campaignFund, town, });
    window.localStorage.setItem("campaigns", JSON.stringify(this.allCampaigns));

    this.name = "";
    this.town = "";
    this.campaignFund = 0;
  };
};