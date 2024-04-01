#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.7.1/bin

cd aws-deploy
 git pull origin master
 cd server
 pm2 kill
 pm2 start index.js
