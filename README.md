# Github-Search
A frontend web application to search for a GitHub user and find out their favourite programming language.

## Technologies Used

- [React](https://reactjs.org) - JavaScript library for building user interface.
- [Node.js](https://nodejs.dev/) - JavaScript run-time environment.
- [Github API](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api) - API used to interact with GitHub to obtain the neccessary data.

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
