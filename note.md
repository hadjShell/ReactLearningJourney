---
Author: Jiayuan Zhang
Date: 04.2023
Version: 1.0
---

# React.js Note

***

## Intro

* This document is based on [Learn React by react.dev](https://react.dev/learn)
* React is  a JavaScript library for rendering UI
* React application begins at a "root" component `App.js`

***

## Components

* React is all about *Components*
* A component is a piece of the UI that has its own logic and appearance
* We don't have to manipulate DOM manually anymore with components
* **A component is just a JavaScript function**
  * Their names always begin with a capital letter
  * They return JSX markup
* React application begins at a "root" component

### JSX

* JavaScript XML
* A syntax extension for JavaScript that lets you write HTML-like markup inside a `.js` file
* Rules of JSX
  * Return a single root element
    * `React.createElement()` is invoked behind the scene
    * Built-in tag `<Fragment>`
      * Alternatively written as `<>...</>`
      * It's an empty tag
      * Let you group things without leaving any trace in the browser HTML tree
  * All tags must be closed
  * `camelCase `~~all~~ most of the things
    * HTML and SVG attributes are written in `camelCase`
    * For historical reasons, [`aria-*`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) and [`data-*`](https://developer.mozilla.org/docs/Learn/HTML/Howto/Use_data_attributes) attributes are written as in HTML with dashes
* Dynamic data: `{}`
  * **As text** directly inside a JSX tag
  * **As attributes** immediately following the `=` sign
  * Any JavaScript expression will work between curly braces, including function calls
* Fundamentally, JSX just provides a syntactic sugar for the `React.createElement` function


### Passing `props`  to a Component

* `props` are the information that you pass to a JSX tag

* Process

  * Set `props`: Add custom attributes onto the custom HTML elements (components)
  * Merge into object: React merges all `props` into a single object
  * Receive `props`: Components (the function) will accept the `props` as the first argument

* Conventionally the parameter is named with `props`

* Usually you don't need the whole `props` object itself, so destruct it into individual `prop`

* Pass `props` through multiple components

  ```jsx
  function Profile(props) {
    return (
      <div className="card">
        <Avatar {...props} />
      </div>
    );
  }
  ```

* De-constructing or setting default values on `props`: `...`

* Composition of components

  * When you nest component in another component, the parent component will receive that content in `props`

  * `{props.children}`

  * Like a wrapper

    ```jsx
    import Avatar from './Avatar.js';
    
    function Card({ children }) {
      return (
        <div className="card">
          {children}
        </div>
      );
    }
    
    export default function Profile() {
      return (
        <Card>
          <Avatar
            size={100}
            person={{ 
              name: 'Katsuko Saruhashi',
              imageId: 'YfeOqp2'
            }}
          />
        </Card>
      );
    }
    ```

* Pass a component identifier as a value for a `prop` to dynamically render different components inside a component
  
  * The `prop` should be named with a start of capital letter
  * The value: efault element: string; customised element: `{ComponentName}`
  
* `props` are **immutable**

  * When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it *different `props`*— a new object

### Conditional Rendering

* Shortcuts: `<condition> ? <content1> : <content2>`, `<conidtion> && <content>`

### Rendering lists

* `map`, `filter`: array of objects to array of JSX markup

* `key`

  * You need to give each array item a `key`
  * A string or a number that uniquely identifies it among other items in that array
  * Useful for future manipulations
  * Do **NOT** generate `key` on the fly, instead you should include them in your data
  * Where to get your `key`
    * Data from a database or API: use their keys
    * Locally generated data: use an incrementing counter [`crypto.randomUUID()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) or a package like [`uuid`](https://www.npmjs.com/package/uuid) when creating items
  * The components won't receive `key` as a `prop`, it's only used as a hint by React itself
  
  ```jsx
  export default function List({ people }) {
    const listItems = people.map(person =>
      <li key={person.id}>{person.name}</li>
    );
    return <ul>{listItems}</ul>;
  }
  ```

### Keep components **Pure**

* Components should only return their JSX, and not change any objects or variables that existed before rendering
  * It's totally okay to change variables and objects that you've just created while rendering inside the component functions

* React offers a "Strict mode" in which it calls each component's function twice during development
* By calling the component functions twice, strict mode helps find components that break these rules
* Strict mode has no effect in production
* Side effects
  * In React, **side effects usually belong inside event handlers**
  * Even though event handlers are defined *inside* your component, they don’t run *during* rendering! **So event handlers don’t need to be pure**
  * As a last resort, use `useEffect`


***

## Interactivity

### Responding to Events

* You can respond to events by declaring event handler functions **inside the components**

  ```jsx
  export default function Button() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }
  
  // if the handler accept parameters, a common pattern for using it is:
  // <button onClick={() => handleClick(params)}>Click me</button>
  ```

* Often you'll want the parent component to specify a child's event handler and pass it to the child as a `prop`

* By convention, handlers should start with `handle`; handlers `prop` should start with `on`

* On all built-in HTML elements we have full access to all native DOM events

* Built-in components only support browser event names

* Custom components can have custom handler `prop` name

* Event handlers receive an **event object** as their only argument. By convention, it’s usually called `e`

* All events propagate in React except `onScroll`, which only works on the JSX tag you attach it to

  * Stop propagation: `e.stopPropagation()`

* `e.preventDefault()`

### `state`

* Why local variable isn't enough

  * **Local variables don’t persist between renders.** When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables
  * **Changes to local variables won’t trigger renders.** React doesn’t realize it needs to render the component again with the new data

* To update a component with new data, two things need to happen:

  * **Retain** the data between renders
  * **Trigger** React to render the component with new data (re-rendering)

* `state` is the component-specific memory

* `useState(initialState)`

  * A React Hook that lets you add a state variable to your component
  * `initialState`
    * The value you want the state to be initially
  * Returns
    * The current `state` variable to retain data between renders
    * The `set` function that lets you update the state to a different value and trigger a re-render
      * The `set` function **only updates the state variable for the next render**

  ```jsx
  import { useState } from "react";
  
  function Component(props) {
      const [title, setTitle] = useState(props.title);
  }
  ```

* You can have as many state variables of as many types as you like in one component

* State is isolated and private

  * If you render the same component multiple times, each will get its own state
  * State is fully private to the component declaring it, the parent component cannot change it

* **A `state` variable's value never changes within a render, even if its event handler's code is asynchronous**

* **Props vs. State**

  * [**Props** are like arguments you pass](https://react.dev/learn/passing-props-to-a-component) to a function. They let a parent component pass data to a child component and customize its appearance. For example, a `Form` can pass a `color` prop to a `Button`
  * [**State** is like a component’s memory.](https://react.dev/learn/state-a-components-memory) It lets a component keep track of some information and change it in response to interactions. For example, a `Button` might keep track of `isHovered` state

### Render and Commit

* The process of requesting and serving UI
  1. Triggering a render
     * Component's initial render, or
     * The component's `state` has been updated
  2. Rendering the component
     * On initial render, React will call the root component `root.render()`
     * For subsequent renders, React will call the function component whose `state` update triggered the render (this process is recursive)
       * You may have thought about the performance issue, look at the [Performance section](https://legacy.reactjs.org/docs/optimizing-performance.html)
  3. Committing to the DOM
     * For the initial render, React will use `appendChild()` DOM API to put all the DOM nodes it has created on the screen
     * For re-renders, React will apply the **minimal **necessary operations to make the DOM match the latest rendering output
  4. Browser paint the screen


### Queueing a series of `state` updates

* Batching

  * React waits until all code in the event handlers has run before processing your state updates

* Update `state` based on its previous value

  * Pass a function to `setSomething` as `nextState`, which will be treated as an **updater function**

  * [Reference](https://react.dev/reference/react/useState#setstate)

  * **Updater functions must be pure** and only *return* the result

  * React queues this function to be processed after all the other code in the event handler has run

  * During the next render, React goes through the queue and gives you **the latest updated `state`**

  * By convention, name the updater function argument by the first letters of the corresponding `state` variable

    ```jsx
    import { useState } from 'react';
    
    export default function Counter() {
      const [number, setNumber] = useState(0);
    
      return (
        <>
          <h1>{number}</h1>
          <button onClick={() => {
            setNumber(n => n + 1);
            setNumber(n => n + 1);
            setNumber(n => n + 1);
          }}>+3</button>
        </>
      )
    }
    ```


### Updating Objects or Arrays in `state`

* You shouldn't change objects or arrays that you hold in the `state` directly
* Instead, when you want to update it, you need to create a new one (or make a copy of an existing one), and then set the `state` to use the copy
* **Treat `state` as read-only**
* Updating a nested object or array of objects: [Immer](https://github.com/immerjs/use-immer)
  * To achieve deep clone
  * How to use Immer
    * Run `npm install use-immer` to add Immer as a dependency
    * Then replace `import { useState } from 'react'` with `import { useImmer } from 'use-immer'`


***

## Managing `state`

### Thinking about UI declaratively

* Identify component's different visual states

  * Treat component as a ***state machine***
  * Have a `state` variable - `status`, and let it decide how the component should look like (return different markup)

* Determine the human or computer events that trigger those state changes

  * Set `state` variables to update UI

* Represent the `state` in memory with `useState`

* Remove any non-essential `state`

* Connect the event handlers to `setState`

  >  Components wrap controller and view together, but make them much easier to code and much less fragile

* Two-way binding for updating inputs

### Principle for structuring `state`

* Group related state
* Avoid contradiction
* Avoid redundance
* Avoid duplication
* Avoid deeply nested `state`

### Sharing  `state` between components

* Lifting `state` up
  * Sometimes, you want the `state` of two components to always change together. To do it, remove `state` from both of them, move it to their closest common parent, and then pass `state` and `setState` down to them via `props`
* Uncontrolled components: components with local `state`
* Controlled component: the important information in it is driven by `props` rather than its own local `state`
* **When writing a component, consider which information in it should be controlled (*via `props`*), and which information should be uncontrolled (*via `state`*)**
* **Single source of truth**

### React maintain an UI tree (like DOM)

* `state` is tied to a position in the tree
  * `state` is held inside React instead of "living" inside the component
  * **React preserves a component’s `state` for as long as it’s being rendered at its position in the UI tree.** If it gets removed, or a different component gets rendered at the same position, React discards its `state`
    * **It's the position in the UI tree - not in the JSX markup**
      * Same components at the same position preserves `state`
      * Different components at the same position reset `state`
  * `key` can be used to make React distinguish between any components
    * Keys aren't just for lists
    * `key` are not globally unique, they only specify the position within the parent

***

## Styling React Components

### Styling with vanilla CSS

* Import CSS file into corresponding JSX file
* Pros
  * CSS code is decoupled from JSX code
* Cons
  * You need to know CSS
  * **CSS is not scoped to components**, CSS rules may clash across components

### Scoping Styles

* Use inline `style` attribute 
  * The value is an object, not a string
* Use CSS modules
  * Change `Component.css` to `Component.module.css`
  * Change `import "./Component.css"` to `import classes from "./Component.module.css"`
  * `<p className={classes.paragraph}>test</p>`
* CSS-IN-JS Styling with "Styled Components"
  * Use a package [Styled components](https://styled-components.com/) 


### Styling with Tailwind CSS

* The main idea of Tailwind: add tiny utility CSS classes to HTML elements
* [Tailwind website](https://tailwindcss.com/)

### Dynamic Styling

* Dynamic inline styling
* Dynamic styling by add class name to component dynamically, using template literal

***

## Debugging React Apps

* Error messages
* Browser debugger
* "strict mode"
  * A React component `StrictMode` as an wrapper for other components
* React DevTools

***

## React Hooks

* Functions starting with `use`
* Can only be called at the top level of your components or your own Hooks

