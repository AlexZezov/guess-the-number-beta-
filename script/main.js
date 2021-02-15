function gameFunc() {
  let name = prompt('Привет! Я знал что ты согласишься,ведь у тебя не было выбора)) Как тебя зовут?');

  while (name == '' || name == null) {
    name = prompt('Привет! Я знал что ты согласишься,ведь у тебя не было выбора))Как тебя зовут?');
  }

  alert(name + ',я загадал число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток.После каждой попытки я скажу "мало", "много" или "угадал(а)".');

  let number = Math.ceil(Math.random() * 100);
  let guess = prompt('Какое число я загадал?');
  let numberOfGuesses = 0;

  while (guess != number) {
    if (guess > number) {
        guess = prompt('Много. Попробуй еще раз.');
        numberOfGuesses = numberOfGuesses + 1;
    }

    if (guess < number) {
        guess = prompt('Мало. Попробуй еще раз.');
        numberOfGuesses = numberOfGuesses + 1;

    }
  }

  alert('Ты угадал(а). Это число' + ' ' + number + '. Тебе понадобилось ' + numberOfGuesses + ' попыток');
}

const yesButton = document.querySelector("#yesButton");
yesButton.addEventListener('click', gameFunc);


