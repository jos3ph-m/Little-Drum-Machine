class DrumMachine {
  constructor() {
    this.kickAudio = document.querySelector(".kick-sample");
    this.snareAudio = document.querySelector(".snare-sample");
    this.clapAudio = document.querySelector(".clap-sample");
    this.tomAudio = document.querySelector(".tom-sample");
    this.chhAudio = document.querySelector(".chh-sample");
    this.ohhAudio = document.querySelector(".ohh-sample");
    this.bassAudio = document.querySelector(".bass-sample");
    this.synthAudio = document.querySelector(".synth-sample");
  }
}

// Init
const drumMachine = new DrumMachine();

// Event Listeners
