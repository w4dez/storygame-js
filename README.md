# storygame-js
Surreal Comedy Advanture
# Zürich Underground: A Night in Limbo

A short text adventure game set in Zürich's nightlife.
You play as Kiki and Lilie, two friends looking for a great night out.
Every choice changes the story. There are 8 different endings.

## Requirements

- Node.js version 18 or higher
- A terminal (macOS Terminal, Windows Terminal, or VS Code terminal)
- A terminal window at least 100 characters wide (so text doesn't wrap awkwardly)

To check your Node version, run:

    node --version

If it prints something like `v18.x.x` or higher, you're good.

## Installation

This game uses one external library: `readline-sync`.

Install it by running this command in the project folder:

    npm install readline-sync

You only need to do this once.

## Run

In the project folder, run:

    node zurich.js

The game will start. Follow the on-screen prompts.

Type the number of your choice and press Enter.

## How to Play

- Read the story text as it appears.
- When you see a menu, type the number of your choice (1, 2, or 3).
- Press Enter to confirm.
- Invalid input is rejected — just try again.
- The game ends when you reach one of the 8 endings.

## File Structure

    zurich.js        The game code
    zurichBnf.jpd   Just a image of Zurich undeground Station.
    README.md        This file
    node_modules/    Installed libraries (created by npm install)
    package.json     Project info (created by npm install)

## Troubleshooting

**"Cannot find module 'readline-sync'"**
You forgot to run `npm install readline-sync`. Do that first.

**Text looks weird or wraps mid-word**
Make your terminal window wider. Drag the right edge or maximize it.

**"Error: The current environment doesn't support interactive reading from TTY"**
You're running the game from a non-terminal environment (like VS Code's Code Runner). Open a real terminal and run `node zurich.js` there instead.

**Nothing happens when I press Enter**
Make sure you're typing a valid number first. The game waits for a number, not just Enter.
