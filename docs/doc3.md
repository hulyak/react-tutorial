---
id: useEffect Hook
title: useEffect Hook
---

![img](../static/img/useeffect-hook.jpg)

If you’ve written React class components before, you should be familiar with lifecycle methods like `componentDidMount, componentDidUpdate, and componentWillUnmount`. The `useEffect` Hook is all three of these lifecycle methods combined. It's used for side effects (all things which happen outside of React) like network requests, managing subscriptions, DOM manipulation, setting up event listeners, timeouts,intervals, or local storage, etc.

`useEffect` functions run after every rerender by default.
It doesn't matter what caused the render like changing the state, or maybe new props inside effect will be triggered after rendering.

Setting title of the page will also be a side effect.
`useEffect` takes a callback function, we can tell `useEffect` when the code we want to be executed, second argument controls when the code gets executed.

For the second argument, we can use `useEffect` in three different ways:

1. Without any dependency, just an anonymous function.

It renders every time our app renders and at initial render.

```javascript
// runs after every rerender
useEffect(() => {
  console.log('I run after every render and at initial render');
});
```

But we don't want to render each time, this can cause _infinite loop_ and we should avoid this.

We need to optimize our components. We can pass _a list of dependencies_. Dependency will trigger effect on the change of the dependencies.

2. With an empty array

```javascript
// runs at initial render
useEffect(() => {
  console.log('I only run once');
}, []);
```

This only runs once when the component is mounted or loaded.

It looks exactly like the behavior of `componentDidMount` in React classes. But we shouldn't compare with React class components.

3. Lastly, we can pass a value or values inside an array dependency.

```javascript
// runs after every rerender if data has changed since last render
useEffect(() => {
  console.log('I run whenever some piece of data has changed)');
}, [id, value]);
```

We can put our variables from our component like any variables that we want for; for example, state variables, local variables or props.
They adjust the array of dependencies.

If the variable is inside this array, we will trigger this effect only when the value of this variable will change, and not on each rerender. Any state or props we list in this array will cause `useEffect` to re-run when they change.

## Example Component

```javascript
import React, { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false;)

// useEffect to set our document title to isOn's default state
  useEffect(() => {
    document.title = isOn;
    console.log('first render');
  });

const handleClick = () => {
  setIsOn(!isOn);
  setCount(count + 1)
}
  return (
  <div>
    <h1>{isOn ? "ON" : "OFF"}</h1>
    <h1>I was clicked {count} times</h1>
    <button onClick={handleClick}>Click me</button>
  </div>
  );
}

export default UseEffect;
```

In our example, we have two states: `count` and `isOn`. We are rendering these with our `button` and `h1` tags. When the button get clicked, we are setting `isOn` state to the opposite of its state every time when we click the button.

For the purpose of this example, we are setting `useEffect` hook and changing our document title to our `isOn`'s default value.(false).

With our `console.log`, we can see that whenever we click the button, we rerender our component. Because we don't have any array dependency.Now, we will try using our dependency array. 


## `useEffect` Cleanup

- `useEffect` comes with a cleanup function that helps unmount the component, we can think of it is like `componentWillUnmount` lifecycle event. When we need to clear a subscription, or clear setTimeout, we can use cleanup functions. When we run the code, code first will cleanup the old state, then will run the updated state. This can help us to remove unnecessary behavior or prevent memory leaking issues.

```javascript
useEffect(() => {
  effect;
  return () => {
    cleanup;
  };
}, [input]);
```

```javascript
const Cleanup = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchAPI.then(() => {
      if (ismMounted) {
        setLoading(false);
      }
    });

    // cleanup function
    return () => {
      isMounted = false;
    };
  }, []);
};
```

This example helps us understand how to use cleanup function. Here we have a `count` state, and we are counting by 1 every 1 second with the use of `useEffect` hook. But if we don't clean up or unmount our interval, it will continue to run in the background. 
 

```javascript
import React, { useState, useEffect } from 'react';

function Cleanup() {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
  const intervalId = setInterval(() => {
    setCount((prevCount) => prevCount + 1);
    }, 1000);
  return () => clearInterval(intervalId);
  }, []);

  return (
  <div>
    <h1>{count}</h1>
  </div>
  );
}

export default Cleanup;
```

### Side Notes

- We can use multiple `useEffect`s in our application.
- We cannot mark `useEffect` as `async function`.
- We can make API calls with React in four different ways:

1. Call fetch/Axios in your component
2. Make another file and store your API calls.
3. Create a reusable custom hook.
4. Use a library like react-query, swr, etc.

