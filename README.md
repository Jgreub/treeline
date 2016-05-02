# Treeline

An application that allows for the tracking of decisions and events of a project in a historical lineage display.

## Dependencies

* Postgres Database
* Node Package Manager (NPM)

## Running the server locally

* Launch a Postgres database named **treeline** on the default port 5432
* Run `npm install` to download the npm dependencies into the *node_modules* directory
* Run `npm run build` to bundle the javascript files into the *resources/static/built* directory
* Start the the spring boot server by executing the maven task `spring-boot:run`
* Visit the website at localhost:8080
