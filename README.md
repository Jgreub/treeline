# Treeline [![Build Status](https://travis-ci.org/jgreub/treeline.svg?branch=master)](https://travis-ci.org/jgreub/treeline)

An application that allows for the tracking of events relative to a project in a historical lineage display

### Dependencies

* Java *(jdk8)*
* Postgres Database *(v9.6)*
* NodeJS *(v8.4)*
* Node Package Manager *(v5.0)*
* Google Chrome *(v59.0)*

### Running the server locally

* Create a Postgres database named **treeline** on the default port 5432
* Run `npm install` to download the npm dependencies into the *node_modules* directory
* Run `npm run build` to bundle the javascript, html and sass files into the *resources/static* directory
* Start the the spring boot server by executing the gradle task `bootRun`
* Visit the website at **localhost:8080**

##### Extra development tools

* Run `npm run watch` to automatically compile javascript, html and sass changes after saving
* Have the *LiveReload* plugin running on your browser to automatically refresh the page when making the project with `cmd+F9`

### Testing

##### Unit Tests

* Run `npm run test-jsu` to execute the javascript unit tests found in *webapp/test*

##### End to End Tests

* Create a Postgres database named **treeline-test** on the default port 5432
* Start the the spring boot server with the test profile by executing the gradle task `bootRun -Dspring.profiles.active=test`
* Run `npm run test-e2e` to execute the end to end tests found in *src/test/e2e*
