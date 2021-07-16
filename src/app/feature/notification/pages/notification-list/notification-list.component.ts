import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  utilisateurIdSession: string;
  notifications: Notification[];

  constructor(private notificationService: NotificationService) { 
    this.utilisateurIdSession = localStorage.getItem("utilisateurId")
  }

  ngOnInit(): void {
    this.notificationService.recupererNotificationsUtilisateur(this.utilisateurIdSession).subscribe(elems => {
      this.notifications = elems;
      console.log(this.notifications)
    });
  }

}
