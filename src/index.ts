import { Application, Container } from 'pixi.js';

const app = new Application({
    backgroundColor: 0x999999,
    width: 400,
    height: 400,
    autoStart: false
});
document.body.appendChild(app.view);

const container = new Container();
container.interactive = true;
container.hitArea = app.screen;
container.on('click', () => {
    console.log('Clicked!');
});

app.stage.addChild(container);
app.render();
