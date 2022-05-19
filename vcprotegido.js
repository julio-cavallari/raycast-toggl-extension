#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title VCProtegido Timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon https://ui-avatars.com/api/?name=VCProtegido&size=256
// @raycast.argument1 { "type": "text", "placeholder": "Description", "optional": false }

// Documentation:
// @raycast.description Start VCProtegido Timer
// @raycast.author Julio Cavallari

import {startTimer} from './start-timer.js'

const PROJECT_NAME = 'VCProtegido'
const PROJECT_ID = 182352778;

const description = process.argv[2];

startTimer(PROJECT_ID, PROJECT_NAME, description);