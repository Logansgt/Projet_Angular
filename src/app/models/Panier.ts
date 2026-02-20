import {FaceSnap} from './face-snap';
export class Panier {

  articles: FaceSnap[];

  constructor(public idUser: string) {
    this.articles = [];
  }

  ajouter(faceSnap: FaceSnap) {
    this.articles.push(faceSnap);
  }

  getTotal(): number{
    let prixTotal=0;
    for(let i=0; i<this.articles.length; i++){
      prixTotal += this.articles[i].prix;
    }
    return prixTotal;
  }

  getArticles():FaceSnap[] {
    return this.articles;
  }
}
