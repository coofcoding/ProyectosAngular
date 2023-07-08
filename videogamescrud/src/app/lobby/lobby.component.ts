import { Component, OnInit } from '@angular/core';
import { LobbyService } from '../lobby.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  admin: string = "";
  root: boolean = false;

  games: any;

  gameData = {
    id_game: 0,
    author: "",
    game_name: "",
    publish_date: ""
  }

  defaultRootUrl = "/lobby?Fec%20MBOjDU8hlaOeTzimVBRrgqnspVNiw34icjZT1wTfa99AjupBSDI%20IpsDwtVkjesatHR0ChIMDQq4mpdD/FEdMs44cuuPAPJ7INYKBatCyJ2idp7qczDr9E1w24B1/5lHzA7YdHvW%20/0zxxLJZXfzvcrQQUxJSekCeW4/sVUBILIevcIgQ4L64fe/eJVzAxSggQG8B/mqAAvtqVVFxQ%3D%3D=0Ji71BAn4yY7SHpSMb5N7GYR3oVnp4YFeD73QXr0F7z3US648CEf8Wdb8Sk9EyQ919XChhKW9FrTiY3Ael34QnWc%20uCsWzqJQaKZOdjZuFidRqLAcCRcPUH2%20NlErC9/PTFNPlxuIttrL2WXwC61PhgfSlCuIeFjv8eStpwytJXqssb%20JUjc02d3vWQRZ4a%20yzKh68jJM%207/dMWNj9xIeNHAWBKvIxvZKz3dnhUME7oJzmYHkQRhBu7h%209qfl2/d&games=true";
  defaultUrl = "/lobby?games=true";

  constructor(private lobbyService: LobbyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllGames();

    this.route.queryParams.subscribe(params => {
      this.admin = params["Fec MBOjDU8hlaOeTzimVBRrgqnspVNiw34icjZT1wTfa99AjupBSDI IpsDwtVkjesatHR0ChIMDQq4mpdD/FEdMs44cuuPAPJ7INYKBatCyJ2idp7qczDr9E1w24B1/5lHzA7YdHvW /0zxxLJZXfzvcrQQUxJSekCeW4/sVUBILIevcIgQ4L64fe/eJVzAxSggQG8B/mqAAvtqVVFxQ=="];
    }
    );

    if (this.admin != undefined) {
      this.root = true;
    }

    this.gameData = {
      id_game: 0,
      author: "",
      game_name: "",
      publish_date: ""
    }
  }

  getAllGames() {
    this.lobbyService.getAllGames().subscribe((result: any) => this.games = result);
    console.log(this.games);
  }

  addNewGame() {
    if (this.gameData.author != "" && this.gameData.game_name != "" && this.gameData.publish_date != "" && this.root) {
      window.location.href = `${this.defaultRootUrl}&n_game=true`;
      this.lobbyService.addNewGame(this.gameData).subscribe((result: any) => this.games = result);
      alert("The game was created successfully.");
      window.location.href = this.defaultRootUrl;
      this.getAllGames();
    } else {
      alert("Something went wrong, please chek the fields and try again.");
    }

    this.gameData = {
      id_game: 0,
      author: "",
      game_name: "",
      publish_date: ""
    }
  }

  deleteGame(id_game: number) {
    if (this.root) {
      window.location.href = `${this.defaultRootUrl}&delete_game=${id_game}`;
      this.lobbyService.deleteGame(id_game).subscribe((result: any) => alert("The game was deleted successfully."));
      window.location.href = this.defaultRootUrl;
    }
    this.getAllGames();
  }

  editGame() {
    if (this.root && this.gameData.author != "" && this.gameData.game_name != "" && this.gameData.publish_date != "" && this.gameData.id_game != 0 ) {
      window.location.href = `${this.defaultRootUrl}&edit_game=true`;
      this.lobbyService.editGame(this.gameData).subscribe((result: any) => alert("The game was edited successfully."));
      window.location.href = this.defaultRootUrl;
    }
    this.getAllGames();
    this.gameData = {
      id_game: 0,
      author: "",
      game_name: "",
      publish_date: ""
    }
  }
}

