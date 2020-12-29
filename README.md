# Frontend Teachaway Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Specifically with `npx create-react-app frontend-teachaway-challenge --template typescript`

## Setup

This project needs a Imgur Client ID in order to make the API calls necessary to the Imgur API, which is provided through environment variables.
A sample of the .env is already located in the root folder, so we just need to make a copy of it and rename it to .env, using bash we can do:

```bash
cat .env.sample > .env
```

This will make the file, what we will need is a Client ID and place it on that file, after the `REACT_APP_IMGUR_CLIENT_ID=`.

After having a Client ID set, then feel free to start up the project with `npm start`.

* If you need a Client ID let me know and I will provide it.

## Technical Approach

Used a React Context to have all my app state under it, the useEffect in that context is crucial to fetching the gallery with the different section, sort, window and viralImages it can have. Basically, 
it lets me to automatically fetch the new galleries when any of those values changes, also the cleanup function takes care of setting the loading state for me on each new fetch.

In the App component you can see the main components of the app, such as GalleryFeed.

The GalleryFeed has an interesting approach to rendering it, I have each column of the grid with a fixed width, but also wanted to keep the order in which the images comes from the API to be visually horizontal order.

Example:

```
| [1] | [2] | [3] | [4] |
| [5] | [6] | [7] | [8] |
| ...
```

Iterating normally on the response array, it would be "vertically ordereded"

That's why I did the approach of separating the response into an array of arrays, having the grid with columns and keeping that "horizontal order". Added a useMemo optimization to prevent from calculating it
everytime the innerWidth value changes, only rerenders when the number of columns change

Thought that the best way to showcase a clicked image would be in a modal, and went ahead a used React Modal npm Package that solvers that problem for me.

Other than that, there is the Aspect Ratio component that uses the padding-bottom trick (link to the explanation in that component) for preventing the content from jumping when loading, providing a sensation of good UX.

For styling, didn't think that it was going to get that much complex, that's why I stuck with plain old CSS, instead of using SCSS (it's what I'm comfortable with).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
