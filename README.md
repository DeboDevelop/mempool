# MemPool

It is a Flash Card web app which is created using react and firebase.
You can use it to memorise words, formulae, etc.

## Features

-   Created using React functional components and Hooks.
-   Implemented Google OAuth using firebase to handle user login.
-   Only the cards of current user is displayed.
-   Data is stored in Firebase Realtime Database.
-   Designed the Front End using Tailwind CSS.

## How to get started

1. Clone the Repository.
2. Run `npm i`
3. Create a `.env` file and create the following variables.

```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_project_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGE_SENDER_ID=your_firebase_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```

4. Run `npm start`
5. Enjoy

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## License

This project is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details

## Author

[Debajyoti Dutta](https://github.com/DeboDevelop)
