# Geocache.fi mobile frontend

## Project structure

The frontend code can be found inside the frontend -folder. A mock backend for the frontend can be found in the mock-backend -folder. Both the frontend and the mock backend need to be running for the application to work properly. README files can be found on both of these folders for further instructions. For now the easiest way is to run the frontend and mock backend in separate terminals.

## Github workflow

1. Make sure there exists an issue for the feature you are developing
2. Create a branch for the feature
3. Link the branch to the issue in github
4. Once the feature is done, create a pull request from your branch to main branch
5. Assign at least 2 people to review the pull request (at least the software team + QA person)
6. Once there is at least 1 approval, you can merge the feature to main branch

## Definition of done

The feature can be defined as done and ready to be merged when:

- Ticket exists for the feature in github
- Feature is implemented according to the specification in the ticket
- Developer has written automated tests for the feature
- Developer has manually tested that the feature is working

!! Remember to use 
```
npm run lint
```
to check that there aren't eslint errors before submitting code to github