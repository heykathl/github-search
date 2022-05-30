# Github-Search
A frontend web application to search for a GitHub user and be given a best guess of their favourite programming language based on their most used language amongst their repositories.

## Client Specification
We would like you to build an application that allows users to enter an arbitrary Github username and be presented with a best guess of the Github user's favourite programming language.

You may use any programming language, framework, or library.

## Technologies Used

- [React](https://reactjs.org) - JavaScript library for building user interface.
- [Github API](https://developer.github.com/v3/) - API used to interact with GitHub to obtain the neccessary data.
- [Axios](https://axios-http.com/)- Promise-based HTTP Client for node. js and the browser which sends asynchronous HTTP requests to REST endpoints and perform CRUD operations.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing React components.
- [Jest](https://jestjs.io/) - JavaScript unit and feature testing framework.

## Setting Up

### Cloning the Repository

Clone the repository to your local machine.

```
git clone https://github.com/heykathl/github-search
cd github-search
```

Once the repository has been cloned you will be able to install the dependencies from Node Package Manager.

```
cd github-search
cd client
npm install
```

### Running the local server

Within your terminal, run the following:
```zsh
cd github-search
cd client
npm start
```

Navigate to [localhost:3000](http://localhost:3000).
This will display the front page:

<img width="1429" alt="Screen Shot 2022-05-30 at 3 47 04 pm" src="https://user-images.githubusercontent.com/74867241/171005534-ed90a3e0-ba1f-4366-8613-60fe0a1ee521.png">

### Testing the local server

```bash
cd github-search
cd client
npm run start:test # Starts the test server
```

## Credit
MVF
