import { AppState } from "../AppState.js";
import { router } from "../router.js";







export class PlayersController {
  constructor() {
    console.log('This is going to be a Christmas miracle if this log comes up');
    console.log(AppState.players);
  }

  test() {
    console.log('The button is working, test small!💝');
  }

  addPlayer(event) {
    try {
      event.preventDefault()
      const form = event.target

      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[addPlayer', error)
    }
  }
}

