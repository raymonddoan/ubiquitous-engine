export const getRandomTrait = (traits: string[]): string => {
  const randomIndex = Math.floor(Math.random() * traits.length);
  return traits[randomIndex];
};