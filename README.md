[![version](https://img.shields.io/badge/Version-0.1.3-brightgreen.svg)](https://github.com/SimonDevelop/discord-bot/releases/tag/0.1.3)
[![Minimum Node Version](https://img.shields.io/badge/node-%3E%3D%208-brightgreen.svg)](https://nodejs.org/en/)
[![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/SimonDevelop/discord-bot/blob/master/LICENSE)
# discord-bot

Simple discord bot development in progress, powered by discord.js.

## Install
```bash
$ npm install
$ cp config.example.json config.json
```
Edit `config.json` for the token API and your server name.

## Run
```bash
$ npm start
```

## Commands
- `!help` (publics commands only)
- `!roll`
- `!yt <url_youtube_video>`
- `!yt stop`
- `!wk my search`
- `!clear <number_of_messages_to_clear> | default 100` (user with `MANAGE_MESSAGES` permission only)

## Todo

- [x] Playback youtube video
- [x] Validate youtube url
- [x] Clear messages of channel
- [x] Manage access rights to commands (for `!clear` command)
- [x] Wikipedia search (fr by default)
- [x] Roll
- [ ] User stats with mongoDB (just idea)
