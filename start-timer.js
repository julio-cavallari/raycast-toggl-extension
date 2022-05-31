#!/usr/bin/env node

import dotenv from 'dotenv'
const result = dotenv.config()

import fetch from 'node-fetch'; 


export function startTimer(projectID, projectName, desc, tags){
  const body = {
    time_entry: {
      description: `${desc}`,
      pid: projectID,
      created_with: "RayCast"
    }
  };
  if (tags) {
    body.time_entry.tags = tags.split(',').map(tag => tag.trim());
  }

  fetch(`${process.env.ENTRIES_URL}/start`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${process.env.API_TOKEN}:api_token`, 'binary').toString('base64')}`
    },
    body: JSON.stringify(body)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(`⏲️: ${projectName} timer started`);
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error?.message);
  });
}