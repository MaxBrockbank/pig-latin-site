$(document).ready(function(){

  $("#translate").submit( event => {
    event.preventDefault();
    const userText = $("#userText").val();
    const results = $("#results");
    
    function addWay(userText) {
      let outputString;
      let thisFunctionsRegExp = /[aeiou]/i;
      if (thisFunctionsRegExp.test(userText.charAt(0))) {
        outputString = userText + "way";
        results.text(outputString);
      } else {
        // The userText MUST start with a consonant, since it failed line 11's expression checking for any vowel as first letter
        
        
        // console.log("We got a false for our .test() method!");
        
      }
      return outputString;
    }
    // addWay(userText);
    // Example: Sequence --> equencesay
    function doesTheWordStartWithQu(inputWord) {
      const qU = /.+qu/i;

      // return true only if the input word starts with exactly "qu" - case-insensitive;
      return qU.test(inputWord.charAt(0));
    }
    function havingRemovedPeskyQUIsNewFirstLetterVowel(een) {  // pretend the input word used to be "queen"
      // since we know the input word has already had its beginning qu removed, now we need to check its current first letter. If this first letter IS a vowel, return true.
      const vowelsViaRegExp = /[aeiou]/i
    }
    function putTheQUbackOnWithTheRightPigLatinSuffix() {
      
    }

    function isTheQuBeforeAnyOtherVowel(word) {
      const regexForConsPlusU= /[bcdfghjklmnpqrstvwxyz]*q+u?/i;
      if (regexForConsPlusU.test(word.substring(0))) {
        // .match() returns an array
        const wordStartLettersQU = word.match(regexForConsPlusU);
        const wordWithoutStartLettersQU = word.replace(regexForConsPlusU, "");
        console.log( wordWithoutStartLettersQU + wordStartLettersQU.join() + "ay");
      } else {
        // Check, "Does my word start with exactly two consonants?"
        console.log(false);
      }  
    }
    isTheQuBeforeAnyOtherVowel(userText);

    // Example: pterodactyl: Where does the first vowel occur in this word?
    // Slice everything before this first vowel
    // Append what just got sliced to the end?....
    
    // find first vowel in pterodactyl == ptE
    // slice all letters occurring before first vowel == PT
    // move those letters to the end of the word == erodactylPT
    // append "ay" to the end of the new word == erodactylPTAY

    function checkForDoubleStartingConsonants(word) {
      let outputWord;
      const regexForCons= /[bcdfghjklmnpqrstvwxyz]+/i;
      // Check, "Does my word start with exactly 1 consonant?"
      if (regexForCons.test(word.charAt(0))) {
        // .match() returns an array
        const wordStartLetters = word.match(regexForCons);
        const wordWithoutStartLetters = word.replace(regexForCons, "");
        console.log(wordWithoutStartLetters + wordStartLetters.join() + "ay");

        // At some point we gotta get back to just a word, but do rearrangements first:
        
      } else {
        // Check, "Does my word start with exactly two consonants?"
        console.log(false);
      }  
    }
    // checkForDoubleStartingConsonants(userText);

    // equus


  });

});