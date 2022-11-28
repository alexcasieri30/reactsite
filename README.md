# Getting Started with Create React App

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## About This Project


There are 3 parts to this project:

- React frontend -- port 3000

- Express backend API, with database connection -- port 3001

- Flask backend API, for serialized ML models -- port 5000

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the React frontend, the Express backend, and the Flask backend. Run this for full functionality of site. 

### `npm run backend` 
  
Runs the React frontend and Express backend only. This can be run when developing anything that doesn't include a Machine Learning model. ML functionality is only used in one section of the "Games" section.

###  `npm start`

Runs the React frontend only. For small frontend bug fixes, design changes, etc.



Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Other Information

- The page will reload when you make changes to the React frontend or the Express backend.

- You may also see any lint errors in the console.  

- Any change to Flask backend code requires restarting the Flask server. 
