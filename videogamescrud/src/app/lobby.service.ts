import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LobbyService implements OnInit {

  url = 'http://localhost/Api_Angular/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllGames();
  }

  getAllGames() {
    return this.http.get(`${this.url}api.php?games=true`);
  }

  addNewGame(gameData: any) {
    return this.http.post(`${this.url}api.php?n_game=true`, JSON.stringify(gameData));
  }

  deleteGame(id_game: number) {
    return this.http.get(`${this.url}api.php?delete_game=${id_game}`);
  }

  editGame(gameData: any) {
    return this.http.post(`${this.url}api.php?edit_game=true`, JSON.stringify(gameData));
  }
}
