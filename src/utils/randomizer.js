const randomizer = (arr, exceptions) => {
  // Фильтруем массив, исключая числа из списка исключений
  const filteredArr = arr.filter(item => !exceptions.includes(item));
  // Если после фильтрации остались доступные числа, выбираем из них случайное
  if (filteredArr.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredArr.length);
    return filteredArr[randomIndex];
  } else {
    // Если весь массив исключен, вернуть null или другое значение по вашему выбору
    return null;
  }
};

export default randomizer;
