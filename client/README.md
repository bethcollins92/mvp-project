This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## users

The app is for anyone who is looking to improve their health and wellbeing, without having to find more time in their already busy lives. It suits people of all ages, and all backgrounds, as the exercises and activities don't cost any money and only take 5 minutes to complete. It suits a 30 something who already runs 3 times a week but wants to improve their all round health, or a lady in her 80's who wants to improve her mobility. Everyone will feel the benefits of fitting these 5 minute health snacks into their lives.

## Introduction

This app is designed for users to be able to select 3 exercises from the database to complete each day. Each lasts only 5 minutes, and the user must choose one from each health category. The app allows the user to select one exercise from each category, and add it to their plan to carry out every day at the same time, (future feature will include notifications). Evidence has shown that to include a new habit in your every day life, the most effective way is to do the same thing at the same time everyday.

## Available Scripts

In the project directory, you can run:

### Dependencies

Run `yarn` on root folder to install dependencies related to Express.

`cd client` and run `yarn` install dependencies related to React.

### Run Your Development Servers

- Run `yarn start` in project directory to start the Express server on port 5000
- `cd client` and run `yarn start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`

## Database layout

![See below the layout of the database tables](https://i.imgur.com/FwKyVPg.png)

## User flow

The users can read about the plan in the about router. They can read about and choose which exercises they want to complete in the exercises section, here they select a time and an exercises, and this gets added to their plan, which can be viewed on the your plan page.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
