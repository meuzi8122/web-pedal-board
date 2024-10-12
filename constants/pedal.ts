export const PEDAL_KINDS: { kind: string; label: string }[] = [
  { kind: "chorus", label: "chorus" },
  { kind: "compressor", label: "compressor" },
  { kind: "delay", label: "delay" },
  { kind: "gain", label: "gain" },
  { kind: "limiter", label: "limiter" },
  { kind: "phaser", label: "phaser" },
  { kind: "reverb", label: "reverb" },
];

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
