module.exports = Phrase;


// Reverses a string
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.procContent = function procContent() {
    return this.letters().toLowerCase();
  }

  this.letters = function letters() {
    const reggie = /[a-z]/gi;
    return (this.content.match(reggie) || []).join("");
  }

  this.palindrome = function palindrome() {
    return this.procContent() === this.procContent().reverse();
  }

  //this.louder = function() {
  //    return this.content.toUpperCase();
  //};
}

// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
//
//   this.procContent = function procContent() {
//     return this.processor(this.translation);
//   }
// }
//
// TranslatedPhrase.prototype = new Phrase();
