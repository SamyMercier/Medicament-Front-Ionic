import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * Class représentant le service de notifications
 * @author fabien
 */
export class NotificationService {

  private readonly baseUrl = `${environment.urlSpring}/notifications`;

  constructor(private http: HttpClient) { }

  /**
   * Cette méthode permet de créer une notification
   * @param nouvelleNotification
   */
  public creerNotification = (nouvelleNotification: Notification) : any => {
    this.http.post<Notification>(this.baseUrl, nouvelleNotification);
  }

  /**
   * Cette méthode permet de récupérer les notifications
   * @param id
   * @returns une liste de notifications d'un utilisateur
   */
  public recupererNotificationsUtilisateur = (id : string) : Observable<Notification[]> => {
    return this.http.get<Notification[]>(`${this.baseUrl}/${id}`)
  }

}
