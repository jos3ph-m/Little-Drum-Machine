class LittleDrumMachine {
  constructor() {
    this.kickAudio = document.querySelector(".kick-sample");
    this.snareAudio = document.querySelector(".snare-sample");
    this.clapAudio = document.querySelector(".clap-sample");
    this.tomAudio = document.querySelector(".tom-sample");
    this.chhAudio = document.querySelector(".chh-sample");
    this.ohhAudio = document.querySelector(".ohh-sample");
    this.bassAudio = document.querySelector(".bass-sample");
    this.synthAudio = document.querySelector(".synth-sample");
    this.bpm = 120;
    this.isPlaying = null;
  }
}

// Init
const littleDrumMachine = new LittleDrumMachine();

// Event Listeners
