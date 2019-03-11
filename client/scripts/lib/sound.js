'use strict';

import { Howl, Howler } from 'howler';
import { SoundPlayer } from './sound-player';
export { AudioOutput };

function AudioOutput(audioData) {
  return new Sound(audioData);
}

const STOP_ALL_SOUNDS_ID = 0;
const BONG_SOUND = [ 'sound/bong.mp3' ];
const NO_SOUND = {
  urls: [''],
  sprite: {},
  category: {},
}

class Sound {

  constructor(audioData = NO_SOUND) {
    this.audioData = audioData.sprite;

    this.bong = new Howl({
      src: BONG_SOUND,
    });

    const audioSpritePlayer = new Howl({
      // TODO add bong sound
      src: audioData.urls,
      sprite: audioData.sprite,
      onplayerror: (error) => {
        console.log('SOUND PLAYER ERROR', error.message);
      },
      onloaderror: (error) => {
        //console.log('SOUND LOAD ERROR', error);
      },
      onload: () => {
        console.log('SOUND LOADED');
      },
    });

    console.log('XXXX',audioData.category);
    this.player = new SoundPlayer(audioSpritePlayer, audioData.category);
  }

  callback(message = {}) {
    switch (message.command) {
      case 'PLAYSAMPLE': {
        const id = message.id;
        const key = 'snd' + id;
        if (!this.audioData[key]) {
          return console.log('SAMPLE ID NOT FOUND', id);
        }
        console.log('PLAY SAMPLE ID', id);
        this.player.playId(id, key);
        break;
      }
      case 'MAINVOLUME':
        const volume = (message.value / 31);
        this.setVolume(volume);
        break;

      case 'STOPSOUND':
        this.player.stopAll();
        break;

      case 'CHANNELOFF':
        console.log('CHANNELOFF_NOT_IMPLEMENTED YET', message.channel);
        break;

      default:
        console.log('NOT_IMPLEMENTED YET', message.command);
        break;

    }

  }

  playBootSound() {
    console.log('playbootsound');
    this.bong.play();
  }

  setVolume(floatVolume) {
    console.log('SET MAINVOLUME', floatVolume);
    Howler.volume(floatVolume);
  }

  stop() {
    this.player.pause();
  }

}
