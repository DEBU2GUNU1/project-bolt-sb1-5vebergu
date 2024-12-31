import { getRandomMessage } from './messages.js';
import { addFlipAnimation, addSparkleEffect } from './animations.js';

export function initializeCard() {
  const card = document.querySelector('.card');
  const messageElement = document.querySelector('.special-message');

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    if (card.classList.contains('flipped')) {
      const message = getRandomMessage();
      messageElement.textContent = message;
      addSparkleEffect(messageElement);
    }
    addFlipAnimation(card);
  });
}

export function createCardHTML() {
  return `
    <div class="card">
      <div class="card-face front">
        <div class="firework">✨</div>
        <h1>Happy New Year</h1>
        <div class="year-3d sparkle">2025</div>
        <p>Click for your special message!</p>
        <div class="firework">🎊</div>
        <span class="click-hint">Click to flip ↺</span>
      </div>
      <div class="card-face back">
        <div class="firework">🎉</div>
        <h1>Cheers to 2025!</h1>
        <div class="message-container">
          <p class="special-message"></p>
        </div>
        <div class="firework">🌟</div>
        <span class="click-hint">Click to flip ↺</span>
      </div>
    </div>
  `;
}