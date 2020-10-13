---
id: Demo App
title: Demo App - Dad Jokes
---

It's time to create a demo app!
In this app, we will create a Dad Jokes app, we will fetch data from an Api and we will use both `useState` and `useEffect` hooks.

First, create a new file under `src > components` and name it `JokeDemo.js`. 

```js
import React from 'react';


const JokeDemo = () => {
  return <button onClick={onTellJoke}>Tell me a joke</button>;
};
```

```javascript
import React, {useEffect, useState} from 'react';

const JokeDemo = () => {
  const [isLoadingJoke, setIsLoadingJoke] = useState(false);
  // store joke search results
  const [jokes, setJokes] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoadingJoke(true);
    searchJokes();
  }, []);

  //https://icanhazdadjoke.com/
  const searchJokes = () => {
    fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      //options object
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const jokes = json.results;
        console.log('joke', jokes);
        setJokes(jokes);
        // setJoke(json.joke);
        setIsLoadingJoke(false);
      }); //json returns promise
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    // console.log("form submit");
    setSearchTerm();
  };

  return (
    <div className="App">
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          placeholder="Enter search term... "
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button>Search</button>
        {/* disable button when joke is loading */}
        <button onClick={searchJokes} disabled={isLoadingJoke}>
          Tell me a joke
        </button>
        <p>{isLoadingJoke ? 'Loading joke...' : jokes.toString()}</p>
        {/* <p>isLoadingJoke: {isLoadingJoke.toString()}</p> */}
        <p>search term: {searchTerm}</p>
      </form>
    </div>
  );
};

export default JokeDemo;
```

REACT only updates what is necessary
react batches updates together - if you trigger multiple state changes from a react event handler or lifecycle method, it will batch all those changes into a single render.32w
react elements are plain objects

## Add search form

1- call search joke endpoint, and store the results
2- save search input's value in app's state
3- trigger search on form submission
4- render the search results
5- hook up the I'm feeling Funny button
6- create search form component
7- refactoring and clean
8- add styling to the app

Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.

render the state with toString()
we need to map through the array and iterate

`jokes.toString()`

## React Forms

forms are unique case as native HTML form elements already managed their own internal state

where should form state be managed in React app?
in inputs internal state, react state

store the search input value as a new state searchTerm

onChange event fires every time the input's value changes.
Synthetic event is a wrapper around the browser's native event

see how the search term is updated when the user types:

`<p>search term: {searchTerm}</p>`

## submit search

search trigger when the form submits
