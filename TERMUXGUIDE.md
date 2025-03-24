# Termux Setup Guide

## Step 1: Installing Git
First, install Git using the pkg package manager:

```bash
pkg update -y          # Update package lists
pkg install git -y     # Install Git
git --version          # Check Git version
```

## Step 2: Cloning the Git Repository
Clone your repository containing `bot.js`:

```bash
git clone https://github.com/00SunRay00/Spammer-Bot-bedrock.git  # Install Repository
cd Spammer-Bot-bedrock    # Navigate to the cloned repository folder
ls -la                    # Check the contents
```

## Step 3: Running the Install File
Run the installation script to set up dependencies:

```bash
chmod +x install.sh    # Grant execution permissions
./install.sh           # Run the script
```

## Step 4: Configuring and Running bot.js
Before running `bot.js`, you need to configure it:
- Open the file with a text editor: `nano bot.js`
- Edit the following variables at the top of the file:
  - `message`: Enter your chat message (note: there’s a 25% chance the server will support it)
  - `hostm`: Enter the server IP
  - `portm`: Enter the server port (default is 12345)
- Save the changes: Press `Ctrl+X`, then `Y`, then `Enter`

Run the bot:

```bash
node bot.js            # Run the bot after configuration
```

*Note:* Ensure Node.js and `bedrock-protocol` are installed. If `install.sh` doesn’t include them, run `pkg install nodejs` and `npm install bedrock-protocol` manually.

## Additional Tips
- Ensure you have enough free space (check with `df -h`)
- Verify your internet connection before starting
- If errors occur, try `pkg upgrade` and repeat the steps
- After cloning, confirm the presence of `install.sh` and `bot.js` with `ls`
- *Note:* Installing all packages may take between 3 to 15 minutes, depending on your device.
