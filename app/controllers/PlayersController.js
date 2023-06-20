import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";
import { router } from "../router.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

function _drawPlayers() {
  // console.log('Draw players works???') yes

  let players = AppState.players

  let template = ''

  players.forEach(player => template += player.PlayerTemplateCard)

  setHTML('players', template)

}








export class PlayersController {
  constructor() {
    console.log('This is going to be a Christmas miracle if this log comes up');
    console.log(AppState.players);

    _drawPlayers()
  }

  test() {
    console.log('The button is working, test small!💝');
  }

  increasePlayerScore(playerName) {
    console.log('player name', playerName);

    playersService.increasePlayerScore(playerName)
  }
  addPlayer(event) {
    try {
      // @ts-ignore
      event.preventDefault()
      // @ts-ignore
      const form = event.target

      const formData = getFormData(form)

      console.log('here is my form data', formData);



      _drawPlayers()

      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[addPlayer]', error)
    }

  }
}



