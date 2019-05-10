import Controler from './Controller';

export default class App {
    constructor() {
        this.controller = new Controler();
    }

    run() {
        this.controller.initPage();
    }
}