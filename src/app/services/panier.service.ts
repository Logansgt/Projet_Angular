import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';
import {Panier} from '../models/Panier';

@Injectable({
  providedIn: 'root' // On enregistre ce service à la racine de l'application pour avoir une instance unique
})
export class PanierService {
  private paniers: Panier[] = [
      new Panier("1")
    ];



  getArticles(): Panier[] {
    return [...this.paniers] // Pour retourner un tableau indépendant meme si il à les mêmes références
  }

  // Utilisation du service pour certaines méthodes :

  getPanierId(id: string): Panier {
    const trouverPanier = this.paniers.find(panier => panier.idUser === id );
    if (!trouverPanier) {
      throw new Error("No panier found with ID " + id);
    }else{
      return trouverPanier;
    }
  }
}
