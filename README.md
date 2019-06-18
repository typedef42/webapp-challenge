# node-challenge

## Objectives

This repository contains a frontend app made with aurelia.io in Typescript and a backend made with node.js and express in JS ESNext.

### 01. **The backend**
The backend expose a simple api that is composed of two endpoints :
* /api/info [GET]
* /api/users [GET]

The **info** endpoint is already working, and responding some informations about the backend

The **users** endpoint is not fully implemented.

*Backend objective*: Implement the `/api/users` [GET] endpoint, that grab users profile from github since user 42 and return it as a response of your own endpoint. <br/>
Use the *node-fetch* npm package that is already a dependency of the backend.
(The github endpoint to use for this: `https://api.github.com/users?since=42`)

You can test your endpoint in your browser: `http://localhost:8000/api/users/` and it should return the same result as what github api does.<br/>
tips: don't forget to add the your new route to the declared routes.js

### 02. **The frontend**
This web app display a unique page (app.html & app.ts) that have two `<section>`<br/>
Everything is implemented in the html template (app.html), you don't have to edit it.

The first html section display the `info` member of the app class, that is coming from the `/api/info` endpoint.<br/>
The second html section display the `users` array of the app class.

*Frontend objective*: Implement what is necessary in the app.ts viewmodel, to pull users data from your backend endpoint `/api/users`

## Instruction to start 

### 01. setup and installation

* fork the original repository, clone and work on your fork
* install node.js and npm
* go to the backend folder and install backend project dependencies

```console
foo@bar: ~$ cd backend
foo@bar: ~$ npm install
```
* go to the frontend folder
```console
foo@bar: ~$ cd frontend
```
* install aurelia-cli as a global package
```console
foo@bar: ~$ npm install aurelia-cli -g
```
* install frontend dependencies
```console
foo@bar: ~$ npm install
```

### 02. running

* start the backend (from its folder)
```console
foo@bar: ~$ node index.js
```

* start the frontend (from its folder)
```console
foo@bar: ~$ au run --hmr --watch
```

Past this point, you should open your browser and go to http://localhost:8080/ and have the project page that display the info section
