# Geocache.fi mobile frontend

## Tech stack:

-   Language: Typescript
-   Framework: React
-   Navigation: React router
-   CSS preprocessor: Sass

## Project structure:

api/

- Holds the functions to make api calls to various backend endpoints

components/

- Holds source code of the implemented React components. Each component will have their own folder, where react (*.tsx), test (*.test.ts) and stylesheet (*.scss) files will be added.

pages/

- Holds source code for the pages of the web application. Each component will have their own folder, where react (*.tsx), test (*.test.ts) and stylesheet (*.scss) files will be added.

styles/

- Common stylesheets that are not bound to a particular component. For example, defining color values to keep styles consistent across components.

tests/

- Tests that are not unit tests for components or functions. End-to-end tests could be added here.

model/

- Holds Typescript interfaces (data models) that are used in the project, for example Geocache, User etc.

util/

- Utility functions that are shared across pages and components.

## Dependencies

Before running the application, you will need to install node.js ([Link to download page](https://nodejs.org/en/download/)).

Once node is installed, install project dependencies by running

```
npm install
```

In the frontend folder. Run the same command in mock-backend folder, if you want to run the mock backend.

## Running the frontend application

In the frontend-directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Running the mock backend application

In the frontend-directory, you can run:

### `npm run dev`

## Running the frontend tests

### `npm test`

Launches the test runner

## Building the frontend application

### `npm run build`

Builds the app for production to the `build` folder. This folder can then be served by apache, nginx, etc.