# React Game Coding Task

Welcome! Today, we'll be building a working game in React/Next.js.

In this exercise, you will be creating a working game that allows players to guess whether the next card in the deck is red or black.

The goal of this task is to assess your attention to detail, ability to create interactive UI elements, basic understanding of endpoints, and your thought process.

## Part One: Practical Task

You will be using the components in the [Figma design file](https://www.figma.com/file/9pgpSp0op1eoWuMGtEHU7x/Patrianna---FE-Gaming-Task?node-id=0%3A1&t=W63yF9mNKHYfqh77-1) to build a working game UI.
You'll have 60 minutes to complete this task :) 

### Instructions

- Read this README from start to finish.
- Using this template, create a new repo
  - Tailwind is set up should you wish to use it.

- Create a Game UI for a game called Red or Black [Figma design file](https://www.figma.com/file/9pgpSp0op1eoWuMGtEHU7x/Patrianna---FE-Gaming-Task?node-id=0%3A1&t=W63yF9mNKHYfqh77-1)
- Call the `/api/make-spin` to make a new spin and retrieve a card from the server.
- Display the outcome
- Store the outcome(s) in local state
- Make the project yours! Add comments, change logic, improve where you need to.
- Push your code and share collaborator access to `doug.silkstone@patrianna.com` or `dougwithseismic`

We're looking for..

- Clean, readable code.
- Ability to create pixel-perfect designs from Figma
- Understanding of React & State Management
- Modern approach to React best practices.
- Bonus points for using `nextjs` optimization features such as `next/image`

### Red or Black - Game Rules

A game starts with a pack of (infinite) cards, face down, and one card next to it, face up. The player continues guesses whether the next card is red or black, until they guess incorrectly and lose!

#### How to play `Red or Black`.

1. The player presses start to lock in their bet.
2. The player chooses whether the next card is red, or black.

3. Outcome: Correct guess
    The player can play again and guess the next card
    Update the UI to show this.

4. Outcome: Wrong guess
    Player loses, game UI resets to default.

### Important Notes

- No game logic should sit on the client; you should call the mock server endpoint to fetch the next card.

- Where will you hold game state? What other information should you be showing on the UI?
- Write clean, readable, code with modern JS practices.
- Animations are welcome.
- Think about how you might scaffold a framework for multiple games
- When finished, upload to github and give collaborator access to `dougwithseismic`

Please note that if you run into any issues or find a task to be too time consuming, you should make a note of it and move on. There will be time to explain any challenges you faced at the end of the task. 

When building the game, be sure to:

- Upload to github and give collaborator access to `doug@withseismic.com`

## Part Two: Reflection

After completing the practical task, and we have had time to review you work, we'll have one final call where you'll have the chance to reflect on your approach and share your thoughts on various aspects of the project, plus ask any questions about the task, the role and everything else.

### Potential topics

- Explain your approach to the task, why you chose it, and what other methods you might have considered but decided against.
- Was there anything you wanted to implement but didn't have the time or resources to do so?
- Is there anything you would change about the component design? If so, what, why, and how?
- How do you manage your priorities in general?

#### Future Considerations

- What other components or methods might be needed in a production-ready game?
- How would you decide what features to include in an MVP?

- Explain your approach to styling and its benefits and caveats.

#### React / Next.js

- Discuss your experience with state management in React, including potential gotchas and ways to overcome them.
- If you have experience with Next.js, share what features you would use to improve performance of the app. If not, share if you have tried it and how you would like to learn more.
- Share your background and previous work, what you enjoyed, and your goals as a developer.
- What are your favorite technologies? How do you improve your dev skills?

Please make sure to commit your code to a new repo for review, and add `dougwithseismic` as a collaborator for review. Good luck!

#### Useful Links

Working Demo of similar, playable game (higher or lower. ) - [free, playable card game demo](https://spribe.co/games/hilo)
Questions? Email doug.silkstone@patrianna.com
