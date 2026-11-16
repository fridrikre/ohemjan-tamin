const deck = new Reveal({
  width: 1600,
  height: 900,
  margin: 0,
  minScale: 0.15,
  maxScale: 2,
  hash: true,
  controls: false,
  controlsTutorial: false,
  progress: true,
  center: false,
  transition: "fade",
  transitionSpeed: "default",
  backgroundTransition: "fade",
  autoAnimate: false,
  overview: true,
  help: true,
  keyboard: true,
  touch: true,
  fragmentInURL: true,
  showNotes: false,
  pdfSeparateFragments: false,
  totalTime: 900,
  plugins: [RevealNotes],
});
deck.initialize().then(() => {
  const update = () => {
    document.getElementById("page-count").textContent =
      String(deck.getIndices().h + 1).padStart(2, "0") +
      " / " +
      deck.getTotalSlides();
    document.body.classList.toggle(
      "light-slide",
      deck.getCurrentSlide().classList.contains("paper"),
    );
  };
  update();
  deck.on("slidechanged", update);
  setTimeout(
    () => document.getElementById("help-hint").classList.add("gone"),
    6500,
  );
});
window.deck = deck;
