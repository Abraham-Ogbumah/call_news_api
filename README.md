#This is a readme file for the NLP project

Please see some project instructions below:

Project Instructions
This Github repository is your starter code for the project. Clone the specific branch 'refresh-2019' or download the ZIP file, although feel free to start from scratch! It is the same as the starter code we began with in Lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:

Setting up Webpack
Sass styles
Webpack Loaders and Plugins
Creating layouts and page design
Service workers
Using APIs and creating requests to external URLs
We have divided the instructions into the following stages, as explained below:

Stage 1 - Getting Started - Setting up the Project
It would be good to first get your basic project up and functioning. Fork the project Github repo, and then clone or download the zip file locally. Remember that once you clone, you will still need to install everything:

cd <project directory>
npm install
Follow the steps from the course up to Lesson 4, but do not add Service Workers just yet. We won't need the service workers during development, and having extra caches floating around just means there's more potential for confusion. Just for your quick reference, we installed the following loaders and plugins so far:

#-Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
Stage 2 - Setting up the API
If you started this project on or before July 7, 2020, you will be using the Aylien API for this project. The Aylien API has you install a node module to run certain commands through. It will simplify the requests we need to make from our node/express backend.

If you started this project after July 7, 2020, you will be using the MeaningCloud Sentiment Analysis API for this project.

The project rubric item for "API" criteria says:

The app should make a successful call to the API on form submission. If this is successful, the API keys and response handling were done correctly. You can check that the API keys are found in server.js or a similar node file. It is not acceptable for an API key to be set in a client-facing file (like index.js)

Information from the API response must show up in the view. It is not enough for the response to be logged to the console or saved in js, etc.

Step 1: Sign up for an API key
For the Aylien API: You will need to go to the user signup page. Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

For the MeaningCloud API: You can find the API here. Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.

Step 2: Install the SDK (Aylien API only)
Next, you'll need to get the Software Development Kit (SDK) for Node.js. SDK is usually a program that brings together various tools to help you work with a specific technology. For instance, the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server. Aylien SDKs are available for all the major languages and platforms, such as Node, Python, PHP, Go, Ruby, and many others.

Install the SDK in your project, as per the instructions mentioned for Node.js SDK at Text Analysis API Documentation.

Step 3: Require the SDK package (Aylien API only)
Your server/index.js file must have these things:

// Require the Aylien npm package
var aylien = require("aylien_textapi");
Step 4: Environment Variables
Next, in server/index.js, you need to declare your API credentials, which will look something like this:
Style-Guide
See below for the Udacity Style Guide used thoroughout the Front End Nanodegree.

Nanodegree Style Guide
