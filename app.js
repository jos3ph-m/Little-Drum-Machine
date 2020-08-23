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
    this.bpm = 120;
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
    const interval = (15 / this.bpm) * 1000;
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
  changeSample(e) {
    const selectName = e.target.name;
    const selectValue = e.target.value;
    switch (selectName) {
      case "kick-select":
        this.kickAudio.src = selectValue;
        break;
      case "snare-select":
        this.snareAudio.src = selectValue;
        break;
      case "clap-select":
        this.clapAudio.src = selectValue;
        break;
      case "tom-select":
        this.tomAudio.src = selectValue;
        break;
      case "chh-select":
        this.chhAudio.src = selectValue;
        break;
      case "ohh-select":
        this.ohhAudio.src = selectValue;
        break;
      case "bass-select":
        this.bassAudio.src = selectValue;
        break;
      case "synth-select":
        this.synthAudio.src = selectValue;
        break;
    }
  }
  mute(e) {
    const muteIndex = e.target.getAttribute("data-track");
    e.target.classList.toggle("activated");
    if (e.target.classList.contains("activated")) {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 0;
          break;
        case "1":
          this.snareAudio.volume = 0;
          break;
        case "2":
          this.clapAudio.volume = 0;
          break;
        case "3":
          this.tomAudio.volume = 0;
          break;
        case "4":
          this.chhAudio.volume = 0;
          break;
        case "5":
          this.ohhAudio.volume = 0;
          break;
        case "6":
          this.bassAudio.volume = 0;
          break;
        case "7":
          this.synthAudio.volume = 0;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 1;
          break;
        case "1":
          this.snareAudio.volume = 1;
          break;
        case "2":
          this.clapAudio.volume = 1;
          break;
        case "3":
          this.tomAudio.volume = 1;
          break;
        case "4":
          this.chhAudio.volume = 1;
          break;
        case "5":
          this.ohhAudio.volume = 1;
          break;
        case "6":
          this.bassAudio.volume = 1;
          break;
        case "7":
          this.synthAudio.volume = 1;
          break;
      }
    }
  }
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

littleDrumMachine.selects.forEach((select) => {
  select.addEventListener("change", function (e) {
    littleDrumMachine.changeSample(e);
  });
});

littleDrumMachine.muteButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    littleDrumMachine.mute(e);
  });
});
