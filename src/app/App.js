import Controller from './Controller';

export default class App {
    constructor() {
        this.controller = new Controller();
    }

    run() {
        this.controller.initPage();
    }
}