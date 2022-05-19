#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title EONPay Timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon https://ui-avatars.com/api/?name=EONPay&size=256
// @raycast.argument1 { "type": "text", "placeholder": "Description", "optional": false }

// Documentation:
// @raycast.description Start EONPay Timer
// @raycast.author Julio Cavallari

import {startTimer} from './start-timer.js'

const PROJECT_NAME = 'EONPay'
const PROJECT_ID = 182352782;

const description = process.argv[2];

startTimer(PROJECT_ID, PROJECT_NAME, description);