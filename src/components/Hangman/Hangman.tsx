import data from './data.json';

const Hangman = () => {
  const b = [...data.map(el => el.word)];

  const a = data
    .filter(
      (el, i, arr) =>
        arr.indexOf(el) === b.lastIndexOf(el.word) && el.word.length <= 7
    )
    .sort((a, b) => a.word.length - b.word.length);

  console.log(a.length);

  return (
    <div>
      {a?.map((el, i) => (
        <p key={i}>
          {'{'}"word": "{el.word}", "question": "{el.question}"{'}'},
        </p>
      ))}
    </div>
  );
};

export default Hangman;
