//service layer manages and controls access to creating and manipulating your data
import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";
import { PlayersController } from "../controllers/PlayersController.js";

class PlayersService {

  addPlayer(formData) {
    debugger
    const newPlayer = new Player(formData.name)

    console.log('new player!', newPlayer);
    //I couldn't see anything happen with this log?

    AppState.players.push(newPlayer)

    console.log(AppState.players);

  }

}




export const playersService = new PlayersService()