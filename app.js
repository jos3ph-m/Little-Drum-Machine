class LittleDrumMachine {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playButton = document.querySelector(".play-button");
    this.kickAudio = document.querySelector(".kick-sample");
    this.snareAudio = document.querySelector(".snare-sample");
    this.clapAudio = document.querySelector(".clap-sample");
    this.tomAudio = document.querySelector(".tom-sample");
    this.chhAudio = document.querySelector(".chh-sample");
    this.ohhAudio = document.querySelector(".ohh-sample");
    this.bassAudio = document.querySelector(".bass-sample");
    this.synthAudio = document.querySelector(".synth-sample");
    this.index = 0;
    this.bpm = 128;
    this.isPlaying = null;
    this.selects = document.querySelectorAll("select");
    this.muteButtons = document.querySelectorAll(".mute");
    this.tempoSlider = document.querySelector(".tempo-slider");
  }
  activatedPad() {
    this.classList.toggle("activated");
  }
  repeat() {
    let step = this.index % 16;
    const activeBeat = document.querySelectorAll(`.beat${step}`);
    // Looping over the pads
    activeBeat.forEach((beat) => {
      beat.style.animation = `playHead 0.3s alternate ease-in-out 2`;
      if (beat.classList.contains("activated")) {
        if (beat.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (beat.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (beat.classList.contains("clap-pad")) {
          this.clapAudio.currentTime = 0;
          this.clapAudio.play();
        }
        if (beat.classList.contains("tom-pad")) {
          this.tomAudio.currentTime = 0;
          this.tomAudio.play();
        }
        if (beat.classList.contains("chh-pad")) {
          this.chhAudio.currentTime = 0;
          this.chhAudio.play();
        }
        if (beat.classList.contains("ohh-pad")) {
          this.ohhAudio.currentTime = 0;
          this.ohhAudio.play();
        }
        if (beat.classList.contains("bass-pad")) {
          this.bassAudio.currentTime = 0;
          this.bassAudio.play();
        }
        if (beat.classList.contains("synth-pad")) {
          this.synthAudio.currentTime = 0;
          this.synthAudio.play();
        }
      }
    });
    this.index++;
  }
  start() {
    const interval = (30 / this.bpm) * 1000;
    if (this.isPlaying) {
      clearInterval(this.isPlaying);
      this.playButton.innerHTML = `<i class="fas fa-play"></i>`;
      this.playButton.classList.remove("activated");
      this.isPlaying = null;
    } else {
      this.playButton.innerHTML = `<i class="fas fa-pause"></i>`;
      this.playButton.classList.add("activated");
      this.index = 0;
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    }
  }
  changeSample() {}
  mute() {}
  changeTempo() {}
  updateTempo() {}
}

const littleDrumMachine = new LittleDrumMachine();

// Event Listeners
littleDrumMachine.pads.forEach((pad) => {
  pad.addEventListener("click", littleDrumMachine.activatedPad);
});

littleDrumMachine.playButton.addEventListener("click", function () {
  littleDrumMachine.start();
});

// Start on space press
document.body.onkeyup = function (e) {
  e.preventDefault();
  if (e.keyCode == 32) {
    littleDrumMachine.start();
  }
};
