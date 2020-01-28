import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRiNjY1NDE2LWUyYTktNDg2ZC1iMjE1LWY0NWI0Yzk5OTk1MCIsImlhdCI6MTU4MDIzNDgwNiwic3ViIjoiZGV2ZWxvcGVyLzY0OTViMjQyLWQwZWMtYTNmNy1iZjI5LWE5NDA3YjgwMTNmMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ny42Mi4yMDkuMTI3Il0sInR5cGUiOiJjbGllbnQifV19.PvEDFA2ZOG4vzBNyJ5kNymo5_gD0_3uLwAcabS4Bjinp4ypE3Y876yc68GIawFC9I0z46V7xd-HFEmgdZI-MFg';

  constructor(private http: HttpClient) {
  }

  getPlayers(): Observable<any> {
    return this.http.get<any>('https://api.clashofclans.com/v1/locations/32000038/rankings/players?limit=100'
      , {
        "headers": {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer ' + this.token
        }
      })
  }
}
