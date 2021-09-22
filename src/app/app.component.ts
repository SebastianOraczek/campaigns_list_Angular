import { Component } from '@angular/core';
import { CampaignInterface } from './types/campaigns.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allCampaigns: CampaignInterface[] = [];

  // initialCampaigns = [
  //   {
  //     id: "1",
  //     name: "First Campaign",
  //     campaignFund: 10000,
  //     town: "Kraków",
  //     // radius: 10,
  //     // status: false,
  //     // bidAmount: 100,
  //   },
  //   {
  //     id: "2",
  //     name: "Second Campaign",
  //     campaignFund: 20000,
  //     town: "Wrocław",
  //     // radius: 20,
  //     // status: true,
  //     // bidAmount: 200,
  //   }
  // ];

  ngOnInit(): void {
    const campaigns = JSON.parse(window.localStorage.campaigns);
    if (campaigns) this.allCampaigns = [...campaigns];
  };

  removeCampaign(id: string): void {
    this.allCampaigns = this.allCampaigns.filter(campaign => campaign.id !== id);
    window.localStorage.setItem("campaigns", JSON.stringify(this.allCampaigns));
  };
};
