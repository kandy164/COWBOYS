function surprise() {
  const tips = [
    "Music boosts your mood instantly!",
    "Listening to music while studying can improve focus.",
    "Try exploring new genres — you might find a hidden favorite!",
    "Playing an instrument sharpens your brain."
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  alert(randomTip);
}
