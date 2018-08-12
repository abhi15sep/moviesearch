# Movie Search

To fast install dependences, I recommend to use [yarn](https://yarnpkg.com/lang/en/). Otherwise, you can use `npm run` instead `yarn`.

For example:
    `npm i && npm run dev`
    `npm run test`
    `npm run build`

## Install 

`yarn` 

## Start

`yarn dev`

## Build
Your build version will be under `dist` folder.

`yarn build`

## Test

`yarn test`

## Dynamic page routing

The project able to generate routes base `Pages/index.js` file, as long as creating new page under `Pages` folder, and export it in `Pages/index.js`, the `Libs/RouterWrapper` will generate routes.
Please refer `AppContainer.js` file about dynamic routing.

## State Management

As we don't use Redux, so I implement lightweight state management mechanic, treat `AppContainer.js` state as global store, and passing `store` data through `RouterWrapper` to each pages, there are two pages on the project, `SearchPage` and `DetailPage`, both of them will have a `store` props, you can acces store such like 

`const store = props.store;`

Also `RouterWrapper` will pass `AppContainer` to every pages, so you can access the container from the props.

`const root = props.root;`

The `root` is `AppContainer` itself, and then you can update global store in the page:

`root.setState({xxx:xxx});`

## Components

Most of components are stateless component, as we only need to render the view with data, no complex logic and inner state management needed.

