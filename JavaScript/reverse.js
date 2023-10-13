let sentence = prompt("Enter Sentence");
function reverseWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversedWord = "";
    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }
    words[i] = reversedWord;
  }
  let reversedSentence = words.join(" ");
  return reversedSentence;
}
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence);
