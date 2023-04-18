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

* JSX
  * JavaScript XML
  * A syntax extension for JavaScript that lets you write HTML-like markup inside a `.js` file
  * All tags must be closed
  * Component can't return multiple JSX elements
    * `React.createElement()` is invoked behind the scene
    * Built-in tag `<Fragment>`
      * Alternatively written as `<>...</>`
      * Let you group multiple JSX nodes togerther

* Displaying data: `{}`

* Passing data
  * Add custom attributes onto the custom HTML elements (components)

  * Components (the function) will accept one parameter as an object which holds all the received attributes

  * Conventionally the parameter is named with `props`

  * Usually you don't need the whole `props` object itself, so destruct it into individual props

  * Pass data through multiple components

    ```jsx
    function Profile(props) {
      return (
        <div className="card">
          <Avatar {...props} />
        </div>
      );
    }
    ```

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

* Conditional rendering

  * Shortcuts: `? :`, `&&`

* Rendering lists

  * `map`, `filter`: array of objects to array of JSX markup

  * `key`

    * You need to give each array item a `key`
    * A string or a number that uniquely identifies it among other items in that array
    * Useful for future manipulations
    * Rather than generating keys on the fly, you should include them in your data
    * a
    * Where to get your `key`
      * Data from a database or API: use their keys
      * Locally generated data: use an incrementing counter [`crypto.randomUUID()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) or a package like [`uuid`](https://www.npmjs.com/package/uuid) when creating items

    * Do **NOT** generate `key` on the fly
    * The components won't receive `key` as a `prop`

    ```jsx
    export default function List({ people }) {
      const listItems = people.map(person =>
        <li key={person.id}>{person.name}</li>
      );
      return <ul>{listItems}</ul>;
    }
    ```

* Keep components **Pure**

  * Components should only return their JSX, and not change any objects or variables that existed before rendering
    * It's totally okay to change variables and objects that you've just created while rendering inside the component functions

  * React offers a "Strict mode" in which it calls each component's function twice during development
  * By calling the component functions twice, strict mode helps find components that break these rules
  * Strict mode has no effect in production
  * Side effects
    * In React, **side effects usually belong inside event handlers**
    * Even though event handlers are defined *inside* your component, they don’t run *during* rendering! **So event handlers don’t need to be pure**
    * As a lat resort, use `useEffect`


***

## Working With Events

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
  ```

* Often you'll want the parent component to specify a child's event handler and pass it to the child as a `prop`

* By convention, handlers should start with `handle`; handlers `prop` should start with `on`

* On all built-in HTML elements we have full access to all native DOM events

* Built-in components only support browser event names

* Custom components can have custom handler `prop` name (e.g. `onSmash`)

* All events propagate in React except `onScroll`, which only works on the JSX tag you attach it to

  * Stop propagation: `e.stopPropagation()`

* `state`

  * The component-specific memory

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

* Props vs. State

  * [**Props** are like arguments you pass](https://react.dev/learn/passing-props-to-a-component) to a function. They let a parent component pass data to a child component and customize its appearance. For example, a `Form` can pass a `color` prop to a `Button`
  * [**State** is like a component’s memory.](https://react.dev/learn/state-a-components-memory) It lets a component keep track of some information and change it in response to interactions. For example, a `Button` might keep track of `isHovered` state

* Render and Commit

  * The process of requesting and serving UI
    1. Triggering a render
       * Component's initial render, or
       * The component's `state` has been updated
    2. Rendering the component
       * On initial render, React will call the root component `root.render()`
       * For subsequent renders, React will call the function component whose `state` update triggered the render (this process is recursive)
         * You may have thought about the performance issue, look at the [Performance section]()
    3. Committing to the DOM
       * For the initial render, React will use `appendChild()` DOM API to put all the DOM nodes it has created on the screen
       * For re-renders, React will apply the **minimal **necessary operations to make the DOM match the latest rendering output
    4. Browser paint the screen

* Queueing aseries of `state` updates

  * 

***

## Styling React Components

## React Hooks

* Functions starting with `use`
* Can only be called at the top level of your components or your own Hooks

