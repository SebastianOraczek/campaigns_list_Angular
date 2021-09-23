import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CampaignInterface } from 'src/app/types/campaigns.interface';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent {
  @Input() allCampaigns: CampaignInterface[] = [];
  @Output() removeCampaign = new EventEmitter();
  @Output() isFormActiveTrue = new EventEmitter();
};