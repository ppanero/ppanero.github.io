# Pablo Panero's personal site

\#React \#Webpack \# Bootstrap \#PersonalSite

This repository contains the code currently running at https://ppanero.github.io.

This project is based on [react-resume-template](https://github.com/tbakerx/react-resume-template), which helped inspired and served as starting point. However, it is stripped of its complexity to suit the needs. In addition, **assets management** has been migrated to use **webpack** instead of having them downloaded locally.

ESLint is used for webpack and react to conform to the standards.

Styling is done using React-Bootstrap. Why? Because I've used other libraries such as React-Semantic-UI in other projects and it seems nice to learn a new one. In addition [npm trends](https://www.npmtrends.com/material-ui-vs-react-bootstrap-vs-react-semantic-ui-vs-semantic-ui-vs-semantic-ui-react-vs-styled-components) sets React-Bootstrap as a raising choice at the moment. Finally, its size is the smallest after styled components.

## Previous versions

- [Jul 2020](https://github.com/ppanero/ppanero.github.io/tree/lektor) - Developed using lektor with webpack for assets building. 

**IMPORTANT NOTE**: The content of the site is hosted on the `development` branch due to the fact
that GitHub pages for personal sites must be build from master. Therefore,
master hosts the automated builds.