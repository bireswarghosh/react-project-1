  hear , 

  OPEN TERMINAL AND TYPE --->>  

              npx create-react-app <YOUR_PROJECT_Name>
              npm i react-router-dom react-icons sass
               npm i react-router-hash-link



creat 3 folder under the src   1)assets where i save all image ,2. componantes where i add all componants 3. styles where i add all scss file for style.

first, go App.jsx
creat routeing set up 
go line 4 
and under the return statment set Router, Routes,Route

second , go styles folder 
 creat a App.scss file where i add a universal tag .  
then creat a  colour.scss file where add some colour through nameing convencation .


then, componantes folder ,
  and creat Header.jsx     this file where i import Link tag line 2 .
and creat a <nav> bar and add this link  ,line 8- 17



next, go App.js and and add all this link like,

import Header from "./components/Header";
import  "./styles/App.scss"
import  "./styles/header.scss"



after all this part , now add 


i go  styles/header.scss 
hear, i basically adjust the header part . 


6. now i creat Home.jsx  and home.scss and add this on App.jsx

7. now work on home.scss --
 firsr , to import colour use it  @import "colour" otherwise you can use @import "./styles/colour.scss"



now hear we simpaly add  4 div  in Home.jsx and add it scss file in home.scss . this some basic .


# we want a tag that`s work it shift pages without loded like Link tag and go to parfect id likr <a> tag so intruduse , npm i react-router-hash-link




































































































































































































































































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
