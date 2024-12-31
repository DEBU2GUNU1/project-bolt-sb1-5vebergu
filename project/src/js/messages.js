export const messages = [
  "May your 2025 be filled with endless possibilities and beautiful moments! 🌟",
  "Here's to 365 new days of adventures and opportunities! ✨",
  "Wishing you health, wealth, and happiness in 2025! 🎊",
  "May this year bring you success in everything you do! 🌈",
  "New year, new dreams, new achievements! 🎯"
];

export function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}