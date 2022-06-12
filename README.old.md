# Testing a React application using Cypress, Vitest, and MSW.
This repository consists of how to implement unit testing, end-to-end testing and mocked services in a React application using Cypress, Vitest and MSW


## Introduction
The modern approach to testing a React application by using some tools, I prefer using. 🔨

- Cypress for End-to-End testing
- Vitest for Unit Testing
- MSW for mocking our services

## Setup
I’ll go over how to install everything before heading into the testing.

When first getting into testing it can be a little daunting with so many sources claiming what is the ideal way to test and what are the best packages or frameworks to use. But, in order to appreciate the testing frameworks, it’s important to see them in action in an application

I hope to give a very opinionated view on how to test in order to avoid decision paralysis and just get to testing!

## Setting up a React app for Testing
I’ve gone ahead and created a barebones application for the purposes of going through testing. 
It’s a simple react application powered by Vite that loads posts from https://jsonplaceholder.typicode.com/posts when a button is clicked.

## Why this application?
Fetching, transforming, and displaying a request to an API is probably the most common task in application development. This app will allow us to test exactly those things.

Firstly go on to mock the JSON service with MSW. Do some end-to-end visual testing with Cypress and go through how a test can be created with their test-runner. Finally, with Vitest to create some unit tests to gain some confidence around our individual components and transformation functions.

## Setting up the Testing Packages
This will just be a simple package installation:

- **For Vitest :** ```npm install -D vitest```
- **For Cypress :** ```npm install -D cypress```
- **For MSW :** ```npm install -D msw```
- **Or all at once :** ```npm install -D vitest cypress msw```
