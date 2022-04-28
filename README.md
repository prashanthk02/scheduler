# Interview Scheduler

## Description

Interview Scheduler is a single page application (SPA) that allows users to book, edit and delete interviews, built using React. Application is built and tested using the latest tools and techniques. Data is handled by communicating with a PostgreSQL database API server over HTTP, using the JSON format. Best practices of TDD are followed while building the application, individual components are built and tested in isolation using Storybook and Jest, End-to-End tests are performed using Cypress.

## Features

- Appointments and available spots during weekdays are displayed and color coded.
- User switch between days by selecting required day.
- User can create an appointment by clicking on Add button in an empty spot.
- User can edit and delete appointment by hovering over the respective appointment and can choose from displayed options.
- User is presented with a confirmation when they attempt to cancel an interview.
- User is shown an error if an interview cannot be saved or deleted.
- Number of available spots are updated when an interview is booked or canceled

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```
npm start
```

## Running Jest Test Framework

```
npm test
```

## Running Storybook Visual Testbed

```
npm run storybook
```

## Running Cypress Test Runner

```
npm run cypress
```

## Screenshots
!["Appointment creation form"](https://github.com/prashanthk02/scheduler/blob/master/docs/Form.png?raw=true)

!["Error while saving appointment without filling required fields"](https://github.com/prashanthk02/scheduler/blob/master/docs/Error.png?raw=true)

!["Show edit and delete option on hover"](https://github.com/prashanthk02/scheduler/blob/master/docs/Hover-view.png?raw=true)

!["Confirm before deleting"](https://github.com/prashanthk02/scheduler/blob/master/docs/Confirmation.png?raw=true)


## Stack

Front-End: React, Axios, JavaScript, JSX, HTML, SASS

Back-End: Node.js, PostgreSQL

Testing: Storybook, Jest, Testing library, Cypress

## Dependencies

- Axios
- classnames
- Normalize.css
- React
- React-dom
- React-scripts
- SASS
- Storybook
- Jest
- Testing-library
- Cypress
- React-test-renderer
- babel/core
- babel-loader
