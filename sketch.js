/* eslint-disable no-undef, no-unused-vars */
const keyboard = new AudioKeys();

let duration = 0.1;

let slider1;

// create synth
/*var instrument = new Tone.FMSynth();
var synthJSON = {
  harmonicity: 8,
  modulationIndex: 2,
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.001,
    decay: 2,
    sustain: 0.1,
    release: 2
  },
  modulation: {
    type: "square"
  },
  modulationEnvelope: {
    attack: 0.002,
    decay: 0.2,
    sustain: 0,
    release: 0.2
  }
};

instrument.set(synthJSON);*/

// create effects
var effect1 = new Tone.Tremolo();
effect1JSON = {
  frequency: 5,
  type: "triangle",
  depth: 0.6,
  spread: 0,
  wet: 0.5
};
effect1.set(effect1JSON);

var effect2 = new Tone.AutoWah();
effect2JSON = {
  baseFrequency: 250,
  octaves: 3.1,
  sensitivity: 0,
  Q: 2,
  gain: 5,
  rolloff: -24,
  follower: {
    attack: 0.3,
    release: 0.1
  },
  wet: 0.5
};
effect2.set(effect2JSON);

var effect3 = new Tone.JCReverb();
effect3JSON = {
  roomSize: 0.5,
  wet: 0.5
};
effect3.set(effect3JSON);

// make connections
instrument.connect(effect1);
effect1.connect(effect2);
effect2.connect(effect3);
effect3.toDestination();

keyboard.down(function (note) {
  FMSynth.triggerAttack(note.frequency);
  synthJSON.triggerAttack(note.frequency);

  let freqValues = [];
  console.log(freqValues);
});

keyboard.up(function (note) {
  FMSynth.triggerRelease();
  synthJSON.triggerRelease();
});

function setup() {
  createCanvas(600, 600);

  awesomeRate = createSelect();
  awesomeRate.position(45, 45);
  awesomeRate.option("100%");
  awesomeRate.option("75%");
  awesomeRate.option("50%");
  awesomeRate.option("25%");
  awesomeRate.selected("100%");

  slider1 = createSlider(0.1, 2, 1, 0);
  slider1.position(width / 3.5, height / 1.75 + 100);
}

function draw() {
  background("purple");
}
