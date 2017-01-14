# Treeline

An application that allows for the tracking of events relative to a project in a historical lineage display

### Dependencies

* Java
* Postgres Database
* Node Package Manager (NPM)
* Sass

### Running the server locally

* Create a Postgres database named **treeline** on the default port 5432
* Run `npm install` to download the npm dependencies into the *node_modules* directory
* Run `npm run build` to bundle the javascript files into the *resources/static/built* directory
* Start the the spring boot server by executing the maven task `spring-boot:run`
* Visit the website at **localhost:8080**

##### Extra development tools

* Run `npm run watch` to automatically compile javascript and css changes after saving
* Have the *LiveReload* plugin running on your browser to automatically refresh the page when making the project with `cmd+F9`

### Testing

##### Unit Tests

* Run `npm run test-jsu` to execute the javascript unit tests found in *src/test/js*

##### End to End Tests

* Create a Postgres database named **treeline-test** on the default port 5432
* Start the the spring boot server with the test profile by executing the maven task `spring-boot:run -Drun.profiles=test`
* Run `npm run test-e2e` to execute the end to end tests found in *src/test/e2e*
