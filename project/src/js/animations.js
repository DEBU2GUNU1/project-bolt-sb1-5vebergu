export function addFlipAnimation(element) {
  element.classList.add('flip-animation');
  setTimeout(() => element.classList.remove('flip-animation'), 100000);
}

export function addSparkleEffect(element) {
  element.classList.add('sparkle-effect');
  setTimeout(() => element.classList.remove('sparkle-effect'), 2000);
}