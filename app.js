class LittleDrumMachine {
  constructor() {
    this.pad = document.querySelectorAll(".pad");
    this.playButton = document.querySelector(".play");
    this.kickAudio = document.querySelector(".kick-sample");
    this.snareAudio = document.querySelector(".snare-sample");
    this.clapAudio = document.querySelector(".clap-sample");
    this.tomAudio = document.querySelector(".tom-sample");
    this.chhAudio = document.querySelector(".chh-sample");
    this.ohhAudio = document.querySelector(".ohh-sample");
    this.bassAudio = document.querySelector(".bass-sample");
    this.synthAudio = document.querySelector(".synth-sample");
    this.index = 0;
    this.bpm = 120;
    this.isPlaying = null;
    this.selects = document.querySelectorAll("select");
    this.muteButtons = document.querySelectorAll(".mute");
    this.tempoSlider = document.querySelector(".tempo-slider");
  }
  activatedPad() {
    this.classList.toggle("activated");
  }
  repeat() {}
  start() {
    const interval = (60 / this.bpm) * 1000;
  }
  changeSample() {}
  mute() {}
  changeTempo() {}
  updateTempo() {}
}

const littleDrumMachine = new LittleDrumMachine();

// Event Listeners
littleDrumMachine.playButton.addEventListener("click", function () {
  littleDrumMachine.start();
});
