# Github-Search
A frontend web application to search for a GitHub user and find out their favourite programming language.

## Client Specification
We would like you to build an application that allows users to enter an arbitrary Github username and be presented with a best guess of the Github user's favourite programming language.

Documentation for the Github API can be found at 

You may use any programming language, framework, or library.

## Technologies Used

- [React](https://reactjs.org) - JavaScript library for building user interface.
- [Github API](https://developer.github.com/v3/) - API used to interact with GitHub to obtain the neccessary data.
- [Axios](https://axios-http.com/)- Promise-based HTTP Client for node. js and the browser which sends asynchronous HTTP requests to REST endpoints and perform CRUD operations.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing React components.
- [Jest](https://jestjs.io/) - JavaScript unit and feature testing framework.

## Setting Up

> Note: The following steps assume you have access to [Homebrew](https://brew.sh/)

### Pre-requisites

Install Node Version Manager (NVM)

```
brew install nvm
```

Then follow the instructions to update your `~/.bash_profile`.
Open a new terminal
Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/), currently `16.14.2`.

```
nvm install 16
```

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

```zsh
cd github-search
cd client
npm start
```

Navigate to [localhost:3000](http://localhost:3000)

### Testing the local server

```bash
cd github-search
cd client
npm run start:test # Starts the test server
```

## Credit
MVF
