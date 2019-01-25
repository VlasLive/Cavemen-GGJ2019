import Phaser from 'phaser';
import LoadScene from './scenes/LoadScene';
import MainScene from './scenes/MainScene';
import LoginScene from './scenes/LoginScene';
import { handleWindowResize } from './utils/utils';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: [
    LoadScene,
    LoginScene,
    MainScene
  ]
};

window.game = new Phaser.Game(config);

handleWindowResize();

if (module.hot) {
  module.hot.accept(() => {});

  module.hot.dispose(() => {
    window.location.reload();
  });
}