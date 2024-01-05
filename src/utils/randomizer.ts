const randomizer = (arr: number[], exceptions: number[]): number | null => {
  const filteredArr = arr.filter(item => !exceptions.includes(item));
  if (filteredArr.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredArr.length);
    return filteredArr[randomIndex];
  }
  return null;
};

export default randomizer;
