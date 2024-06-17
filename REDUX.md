# Redux Overview

## What is Redux?
Redux is a pattern and library for managing and updating application state, using events called "actions".
Redux is really:

-  **A single store containing "global" state**
-  **Dispatching plain object actions to the store when something happens in the app**
-  **Pure reducer functions looking at those actions and returning immutably updated state**

## Why Should You Use Redux?
The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.

## 3 Principles in Redux
- **Single Source of Truth**
- **State is Read-Only**
- **Changes are Made with Pure Functions**

## When Should You Use Redux?
- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase and might be worked on by many people

> **Note:** Not all apps need Redux. Take some time to think about the kind of app you're building and decide what tools would be best to help solve the problems you're working on.

## Redux Application Data Flow
![Redux Application Data Flow](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

### Initial Setup
- A Redux store is created using a root reducer function
- The store calls the root reducer once and saves the return value as its initial state
- When the UI is first rendered, UI components access the current state of the Redux store and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.

### Updates
1. Something happens in the app, such as a user clicking a button
2. The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/increment'})`
3. The store runs the reducer function again with the previous state and the current action and saves the return value as the new state
4. The store notifies all parts of the UI that are subscribed that the store has been updated
5. Each UI component that needs data from the store checks to see if the parts of the state they need have changed
6. Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

## What is Redux Toolkit?
Redux Toolkit is a set of tools and best practices that reduces boilerplate code and simplifies Redux usage.
## What is purpose RTK?
Redux Toolkit was originally created to help address three common concerns about Redux:
-  **"Configuring a Redux store is too complicated"**
-  **"I have to add a lot of packages to get Redux to do anything useful"**
-  **"Redux requires too much boilerplate code"**
## What is included Redux have?
![RTK-included](https://redux.js.org/redux-toolkit/overview#whats-included)

