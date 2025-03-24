#!/data/data/com.termux/files/usr/bin/bash

pkg update -y
pkg install nodejs cmake -y
npm install bedrock-protocol

echo "==============================================="
echo "WARNING: Script requires configuration!"
echo "1. Check the downloaded file/repository"
echo "2. Configure paths and parameters in the file"
echo "3. Ensure all dependencies are installed"
echo "==============================================="

echo "Checking versions of installed packets..."
node -v
cmake --version
npm list bedrock-protocol
