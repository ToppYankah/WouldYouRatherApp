# WOULD YOU RATHER APP
"Would you rather App" is a conversation or party game that poses a dilemma in the form of a question beginning with "would you rather". Users are allowed to create their own questions for other users to answer. There's also a rank to show which user is very much contributing to the game.

# HOW IT WORKS
Before one can participate in the game, you need to login first. After loggin in, you are sent to a homepage where you will see all available questions categorized in two (ie: Answered & Unanswered questions). There's a tab to navigate between these two categories. Aside that there is a main header with some navigation links. 
These links involve (Home, New Question, and Leader Board);

[Home](src/components/Home.js): This is the first page that appears after user logs in.

[New Question](src/components/CreateQuestion.js): This link takes you to a page where user can create his own "Would you rather" question for other users to also answer.

[Leader Board](src/components/LeaderBoard.js): This link takes you to the ranking page, where users are ranked according to the total number of questions they have created and answered.

Whenever a user answers, the votes on that particular answer is increased and calculated in percentages to show how much people have chosen that answer too.
So as when a user creates a question, user's created questions count increases

# SECURITY
If any user tries to access a certain page while not signed in or logged in, user is asked to login. After logging in then user is taken to the intended page

# BUILDING THIS PROJECT
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
