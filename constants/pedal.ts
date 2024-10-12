export const PEDAL_KINDS = {
  chorus: "chorus",
  compressor: "compressor",
  delay: "delay",
  gain: "gain",
  limiter: "limiter",
  phaser: "phaser",
  reverb: "reverb",
};

export const PEDAL_PARAMETERS = {
  chorus: {
    rate: 0,
    depth: 0,
    feedback: 0,
    mix: 0,
  },
  compressor: {
    ratio: 0,
    threshold: 0,
    release: 0,
    attack: 0,
  },
  delay: {
    time: 0,
    mix: 0,
    feedback: 0,
  },
  gain: { gain: 0 },
  limiter: { threshold: 0, release: 0 },
  phaser: { rate: 0, depth: 0, feedback: 0, mix: 0 },
  reverb: { roomSize: 0 },
};
