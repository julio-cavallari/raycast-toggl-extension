#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Example Timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon https://ui-avatars.com/api/?name=Example&size=256
// @raycast.argument1 { "type": "text", "placeholder": "Description", "optional": false }
// @raycast.argument2 { "type": "text", "placeholder": "Tags (e.g. \"Tag1, Tag2\")", "optional": true }

// Documentation:
// @raycast.description Start Example Timer
// @raycast.author Julio Cavallari

import {startTimer} from './start-timer.js'

const PROJECT_NAME = 'Example'
const PROJECT_ID = 999999999;

const description = process.argv[2];
const tags = process.argv[3];

startTimer(PROJECT_ID, PROJECT_NAME, description, tags);