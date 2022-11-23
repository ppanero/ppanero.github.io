# Pablo Panero's personal site

\#React \#Webpack \# Bootstrap \#PersonalSite

This repository contains the code currently running at https://ppanero.github.io.

ESLint is used for webpack and react to conform to the standards.

Styling is done using React-Bootstrap. Why? Because I've used other libraries such as React-Semantic-UI in other projects and it seems nice to learn a new one. In addition [npm trends](https://www.npmtrends.com/material-ui-vs-react-bootstrap-vs-react-semantic-ui-vs-semantic-ui-vs-semantic-ui-react-vs-styled-components) sets React-Bootstrap as a raising choice at the moment. Finally, its size is the smallest after styled components.

## How to run it

- `npm outdated` to check which dependencies are out of date
- `npx npm-check-updates -u` to update dependencies in the package.json file
- `npm install` to install dependencies
- `npm run-script start` start the site in development mode
- `npm run-script build` build the site

## Previous versions

- [Nov 2022](https://github.com/ppanero/ppanero.github.io/tree/a8b1e3c6901a6e78f356b8f150eec5e6223a6e95) - Complex version based on [react-resume-template](https://github.com/tbakerx/react-resume-template). Was deprecated in favour of simplicity.
- [Jul 2020](https://github.com/ppanero/ppanero.github.io/tree/lektor) - Developed using lektor with webpack for assets building.

**IMPORTANT NOTE**: The content of the site is hosted on the `development` branch due to the fact
that GitHub pages for personal sites must be build from master. Therefore,
master hosts the automated builds.
