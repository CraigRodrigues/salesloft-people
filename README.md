# SalesLoft People App

## About

Created by Craig Rodrigues 07/24/2021

## Usage
- To build client (from client): `npm start`
- To build cache (from server): `npm run cache`
- To build api server (from server): `npm start`
- To test: npm t
- To lint: npm run lint
- To fix linting: npm run lint:fix

### Tools
- Node
- Express
- Create React App
- Chakra UI
- Jest (TDD)

### Considerations
- Attempting an MVP with limited time.
- I've jammed two apps into one repo for time/simplicity.
- Rails would've been faster I'm sure.
- What if the data is extremely large.
- A better solution to caching via JSON would be use Redis or a database.
- My algorithm for finding possible duplicates is not efficient for very large data set. Consider n-grams or another solution.
- Error handling could be much better.

### Nice to Haves
- Deploy it somewhere.
- Use CSS transitions.
- Paginate results on the client.
- Incorporate the SalesLoft logo.
- Better error handling.
- Launch via a make file or some other process start like upstart.
- Dockerize it