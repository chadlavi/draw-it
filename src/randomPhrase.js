const prompts = [
  "jazz elephant",
  "cat hates cucumber",
  "can't stop talking about my new hat",
  "where everybody knows your name",
  "learning to ride a skateboard",
  "they're all gonna laugh at you",
  "dog peeing on a fence",
  "eight truly miniscule reindeer",
  "houseplants",
  "parallel parking",
  "Nobel Prize award ceremony interrupted by flatulence",
  "your favorite bagel order",
  "huffing glue",
  "riding a tricycle",
  "I thought this was a costume party",
];

export const randomPhrase = () =>
  prompts[Math.floor(Math.random() * prompts.length)];
