import {Component, OnInit} from '@angular/core';
import {PlayersService} from "../../services/players.service";

@Component({
  selector: 'app-table-players',
  templateUrl: './table-players.component.html',
  styleUrls: ['./table-players.component.css']
})
export class TablePlayersComponent implements OnInit {
  players: any;
  error: any;

  constructor(private playerService: PlayersService) {
  }

  ngOnInit() {
    this.getPLayers();
  }

  getPLayers() {
    this.playerService.getPlayers().subscribe((data) => {
        this.players = data;
        console.log(this.players)
      },
      (error: any) => {
        this.error = error;
        console.log('Error', error)
      }
    )
  }
}
