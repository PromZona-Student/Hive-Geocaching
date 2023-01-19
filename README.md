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

util/

- Utility functions that are shared across pages and components.

## Dependencies

Before running the application, you will need to install node.js ([Link to download page](https://nodejs.org/en/download/)).

Once node is installed, install project dependencies by running

```
npm ci
```

In the project folder.

## Running the application

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Github workflow

1. Make sure there exists an issue for the feature you are developing
2. Create a branch for the feature
3. Link the branch to the issue in github
4. Once the feature is done, create a pull request from your branch to main branch
5. Assign at least 2 people to review the pull request (at least your team)
6. Once there are 2 approvals, merge the feature branch to main