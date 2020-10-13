---
id: useEffect Hook
title: useEffect Hook
---

![img](../static/img/useeffect-hook.jpg)

If you’ve written React class components before, you should be familiar with lifecycle methods like `componentDidMount, componentDidUpdate, and componentWillUnmount`. The `useEffect` Hook is all three of these lifecycle methods combined. It's used for side effects (all things which happen outside of react) like API calls,managing subscriptions, dom manipulation, setting local storage, etc.

`useEffect` functions are called each time after each rerender of the component.
It doesn't matter what caused the render like changing the state, or maybe new props inside effect will be triggered after rendering.

Setting title of the page will also be a side effect
It takes an anonymous function, we can tell `useEffect` when the code you want to be executed, second argument controls when the code gets executed.

We can use use `useEffect` in three different ways.

First one, without any dependency, just an anonymous function. It renders every time our app renders and at initial render.

But we don' want to render each time, this can cause memory leak and infinite loop and we should avoid this.
We need to optimize our components. We can pass `an array of dependencies.` We can put our variables from our component like any variables that we want for, for example
state variables, local variables or props.
They adjust the array of dependencies.
If the variable is inside this array, we will trigger this effect only when the value of this variable will change, not on each rerender.

```javascript
// runs after every rerender
useEffect(() => {
  console.log('render');
});
```

**What will happen if we provide no dependencies but an empty array?**

Let's check we see it only once when the component is mounted or loaded.
It looks exactly like the behavior of `componentDidMount` in React classes. But we shouldn't compare with React class components.

Dependency will trigger effect on the change of the dependencies

Now, we can have state in plain functions. With the help of hooks, we can manage functions and add state to them.
Second, we can pass an empty array dependency. This runs only something changes in the app.

```javascript
// runs at initial render
useEffect(() => {
  console.log('I only run once');
}, []);
```

Lastly, we can pass a value or values inside an array dependency.

```javascript
// runs after every rerender if data has changed since last render
useEffect(() => {
  console.log('I only run once');
}, [id, value]);
```

**Keep in mind that we cannot mark useEffect as `async function`**
