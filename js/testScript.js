/*
First, here are the rules of Pig Latin:

    For words beginning with a vowel, add "way" to the end.

    For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

    If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

    For words beginning with "y", treat "y" as a consonant.

*/

/*
Describe: translateString()

Test: It will add "way" to the end of userInput string when it begins with a vowel (excluding 'y');
Expect: addWay("apple").toEqual("appleway");

Test: It will move consecutive beginning consanants to the end of the word and add "ay";
Expect: moveCons("string").toEqual("ingstray");

Test: It will keep vowel 'u' attached to consonant 'q' when 'qu' is attached to first consonants in word
Expect: marryQu("queen").toEqual("eenquay")
  Earl Skway
  squirrel
  irrelsquay

Test: It will verify that code can identify each unique word submitted by user.
Expect: findWords("holy smokescreens, Batman") to array = ["holy", "smokescreens," "Batman"]

*/