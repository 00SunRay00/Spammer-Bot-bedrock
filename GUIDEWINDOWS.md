# Spammer Bot Setup Guide for Windows

Follow these steps to set up and run the `bot.js` script on your Windows machine.

## Step 1: Install Node.js
- Download and install Node.js from the official website: [nodejs.org](https://nodejs.org/)
- Choose the "LTS" version for stability.
- Run the installer and follow the prompts (default settings are fine).
- Verify installation by opening a terminal (Command Prompt or PowerShell) and typing:
  ```cmd
  node -v
  ```
  You should see the version number (e.g., `v18.x.x`).

## Step 2: Install the bedrock-protocol Library
- Open a terminal (Press `Win + R`, type `cmd`, and press Enter).
- Install the `bedrock-protocol` library using npm (Node.js package manager):
  ```cmd
  npm install bedrock-protocol
  ```
- Wait for the installation to complete (this may take a few seconds).

## Step 3: Download bot.js
- Visit the GitHub repository: [Spammer-Bot-bedrock/bot.js](https://github.com/00SunRay00/Spammer-Bot-bedrock/blob/main/bot.js)
- Click the "Raw" button, then save the file as `bot.js`:
  - Right-click the page → "Save As" → Choose a folder (e.g., `C:\SpammerBot`) → Save as `bot.js`.
- Alternatively, download the entire repository and extract `bot.js` from it.

## Step 4: Configure bot.js
- Open `bot.js` in a text editor (e.g., Notepad, VS Code).
- Edit the following variables at the top of the file:
  ```js
  const message = "YourMessageHere"; // Enter your chat message (25% chance of server support)
  const hostm = "server.ip.here";    // Enter the server IP (e.g., "192.168.1.1")
  const portm = 12345;               // Enter the server port (default is 12345)
  ```
- Save the file after making your changes.

## Step 5: Run the Bot
- Open a terminal in the folder containing `bot.js`:
  - Navigate using `cd` (e.g., `cd C:\SpammerBot`).
  - Or right-click the folder in File Explorer, select "Open in Terminal" (if available).
- Start the bot by typing:
  ```cmd
  node bot.js
  ```
- The bot should now connect to the server and begin operating.

## Additional Tips
- Ensure you have an active internet connection.
- If you encounter errors, verify Node.js is installed (`node -v`) and all dependencies are present.
- To stop the bot, press `Ctrl + C` in the terminal.
- Save `bot.js` and its dependencies in a dedicated folder for easy access.
