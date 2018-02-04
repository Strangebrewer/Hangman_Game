# Hangman-Game

This is my Hangman Game, my first JavaScript project for my coding bootcamp. Each round draws from a limited list of words, and once the word list is exhausted, the game is over. The end of each round produces an image of the artist and triggers a song by the artist as well.

While the game doesn't display a stick figure man to hang, the typical hangman game takes six missed guesses to draw the man. In this game, the seventh missed guess hangs him. 

Guesses are limited to letters and numbers - any other keys will have no effect.


This project was quite a bit more complex than I thought it would be, but it was a fun challenge to fine tune the details once I understood how to build the basic structure. Some of the more interesting challenges were:

<ul>
  <li>Figuring out a way to prevent the same key from registering more than once if pressed more than once</li>
  <li>Figuring out how to allow for spaces between words in rounds with more than one word</li>
  <li>Accounting for spaces between words without requiring the user to guess a space or a dash to complete the conditions for winning the game</li>
  <li>Storing the index variable from the previous round in order to keep the song playing until the next word is revealed but still be able to turn it off once the next sond starts</li>
  <li>Only allowing each word array value to be used once without removing it from the array</li>
</ul>
