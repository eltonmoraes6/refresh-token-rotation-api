# Refresh Token Rotation API

## Introduction

Refresh token rotation helps a public client to securely rotate refresh tokens after each use. With refresh token rotation behavior, a new refresh token is returned each time the client makes a request to exchange a refresh token for a new access token.

## Clone Repo

```
Clone the repo: `git clone git@github.com:eltonmoraes6/refresh-token-rotation-api.git`
```

## Install dependencies

```dosini
npm install
```

## Environment variables

Create a `.env` file in the root directory of your project, and add the following
environment-specific variables on new lines in the form of `NAME=VALUE`:

```dosini
MONGO_URL= YOUR_MONGO_URL
JWT_SECRET_ACCESS_TOKEN= USE A SECURE SECRET STRING
JWT_SECRET_ACCESS_TOKEN_TIME=10s
JWT_SECRET_REFRESH_TOKEN= USE A SECURE SECRET STRING
JWT_SECRET_REFRESH_TOKEN_TIME=300s
JWT_COOKIE_EXPIRY_TIME=300 # value's in seconds
```

For more information on how to configure `environment-specific variables` access [dotenv](https://github.com/motdotla/dotenv/).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.
