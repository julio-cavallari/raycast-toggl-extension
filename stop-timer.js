#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Stop Timer
// @raycast.mode compact

// Optional parameters:
// @raycast.icon ./icons/toggl.png

// Documentation:
// @raycast.author Julio Cavallari

import dotenv from 'dotenv'
const result = dotenv.config()

import fetch from 'node-fetch'; 

function processTime(durationWorkedInSeconds){
  const duration = durationWorkedInSeconds * 1000;
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const daysWorked = Math.floor(duration / DAY);
  const hoursWorked = Math.floor((duration % DAY) / HOUR);
  const minutesWorked = Math.floor((duration % HOUR) / MINUTE);
  const secondsWorked = Math.floor((duration % MINUTE) / SECOND);
  
  return `${String(hoursWorked).padEnd(2, '0')}:${String(minutesWorked).padEnd(2, '0')}:${String(secondsWorked).padEnd(2, '0')}`;
}

function stopTimer(currentData){ 

  fetch(`${process.env.ENTRIES_URL}/${currentData.id}/stop`, {
    headers: {
        'Authorization': 'Basic ' + Buffer.from(`${process.env.API_TOKEN}:api_token`, 'binary').toString('base64')
    },
    method: 'PUT'
  })
    .then((response) => {
      if (!response.ok) {
      throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(`⏲️🛑: Worked ${processTime(data.data.duration)}`)
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error?.message);
    });
}


fetch(`${process.env.ENTRIES_URL}/current`, {
  headers: {
    'Authorization': 'Basic ' + Buffer.from(`${process.env.API_TOKEN}:api_token`, 'binary').toString('base64')
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    data.data === null ? console.log('No Timer Running') : stopTimer(data.data);
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error?.message);
});