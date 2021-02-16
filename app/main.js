import PoemsController from "./components/poems/poemsController.js";

class App {
  constructor() {
    this.controllers = {
      poemsController: new PoemsController()
    }
  }
}

window['app'] = new App()