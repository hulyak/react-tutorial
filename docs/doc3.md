---
id: useEffect Hook
title: useEffect Hook
---

![img](../static/img/useeffect-hook.jpg)

If you’ve written React class components before, you should be familiar with lifecycle methods like `componentDidMount, componentDidUpdate, and componentWillUnmount`. The `useEffect` Hook is all three of these lifecycle methods combined. It's used for side effects (all things which happen outside of react) like API calls, managing subscriptions, dom manipulation, setting local storage, etc.

`useEffect` functions runs after every re-render by default.
It doesn't matter what caused the render like changing the state, or maybe new props inside effect will be triggered after rendering.

Setting title of the page will also be a side effect.
`useEffect` takes an anonymous function, we can tell `useEffect` when the code we want to be executed, second argument controls when the code gets executed.

For the second argument, we can use use `useEffect` in three different ways.

1. Without any dependency, just an anonymous function.

It renders every time our app renders and at initial render.

```javascript
// runs after every rerender
useEffect(() => {
  console.log('render');
});
```

But we don' want to render each time, this can cause memory leak and infinite loop and we should avoid this.

We need to optimize our components. We can pass `a list of dependencies`. Dependency will trigger effect on the change of the dependencies.

**What will happen if we provide no dependencies but an empty array?**

2. With an empty array

```javascript
// runs at initial render
useEffect(() => {
  console.log('I only run once');
}, []);
```

This only runs once when the component is mounted or loaded.

It looks exactly like the behavior of `componentDidMount` in React classes. But we shouldn't compare with React class components.

1. Lastly, we can pass a value or values inside an array dependency.

```javascript
// runs after every rerender if data has changed since last render
useEffect(() => {
  console.log('I only run once');
}, [id, value]);
```

We can put our variables from our component like any variables that we want for; for example, state variables, local variables or props.
They adjust the array of dependencies.

If the variable is inside this array, we will trigger this effect only when the value of this variable will change, and not on each rerender. Any state or props we list in this array will cause `useEffect` to re-run when they change.

## `useEffect` Cleanup

- `useEffect` comes with a cleanup function that helps to unmount the component, we can think of it is like `componentDidUnmount`. When we need to clear a subscription, or clear setTimeout, we can use cleanup functions. When we run the code, code first will cleanup the old state, then will run the updated state. This can help us to remove unnecessary behavior or prevent memory leaking issues.

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
    // cleanup
    return () => {
      isMounted = false;
    };
  }, []);
};
```

#### Sidenotes:

- We can use multiple useEffects in our application.
- We cannot mark useEffect as `async function`.

- whatever we put inside return, it will exit.
- before we set up another listener, first we cleanup then render the component
  conditional rendering to hide and show

We can make API calls with React in four different ways:

1. Call fetch/Axios in your component
2. Make another file and store your API calls.
3. Create a reusable custom hook.
4. Use a library like react-query, swr, etc.
