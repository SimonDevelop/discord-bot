[![Minimum Node Version](https://img.shields.io/badge/node-%3E%3D%208.0.0-brightgreen.svg)](https://nodejs.org/en/)
[![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/SimonDevelop/discord-bot/blob/master/LICENSE)
# discord-bot

Simple discord bot in development.

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
- `!help`
- `!yt <url_youtube_video>`
- `!yt stop`
- `!clear <number_of_messages_to_clear> | default 100` (user with `MANAGE_MESSAGES` permission only)

## Todo

- [x] Manage access rights to commands
- [ ] Soundcloud music playback
