---
id: Demo App
title: Demo App-Food Recipes
---

It's time to create our demo app!
In this app, we will create a Dad Jokes app, we will fetch data from an Api and we will use both `useState` and `useEffect` hooks.

First, create a new file under `src > components` and name it `FoodRecipe.js`.
Copy the code below and paste it into your code editor. To be able to get a response, first you need an APP ID, and APP_KEY.

## How Can I Fetch Data?

1. Go to [edamam.com](https://www.edamam.com/)
2. Choose `Recipe Search API`
3. Click on `Sign Up`
4. Choose `Developer` and Click on `Start Now`
5. Fill out the form.
6. Go to `Dashboard`
7. Click on `Applications` > `View`. You should see your Application ID and Application Keys in this page.
8. Copy your keys and paste it inside the code.
9. API can give some errors, if you see any **CORS errors**, add a cors browser extension for the browser you are using. [Firefox](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/) / [Chrome](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related)
10. Still, there is a problem? You need to wait until your API keys are available.
11. `url` is from the API documentation, you can check it out [here.](https://developer.edamam.com/edamam-docs-recipe-api)

```js
// src > components > FoodRecipe.js

import React, {useState} from 'react';

const FoodRecipe = () => {
  // paste your APP_ID
  const APP_ID = '';
  // paste your APP_KEY
  const APP_KEY = '';

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h1>Food Recipe App </h1>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default FoodRecipe;
```

![demo](../static/img/food-demo-1.gif)

Then what we did?

- created some JSX and added form, input and button properties.
- for the form submit, we need `onSubmit` event handler, and created the function for it. Used async/await and fetch browser API, to get our data from `edamam`. So, when we submit the form, we will fetch our recipes.

As you notice, we didn't use `useEffect` here yet; but we could fetch our data.

To be able to change our query from `chicken` search to any search, we need to add a state with `useState` hook.

```javascript
import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';

const FoodRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const APP_ID = '';
  const APP_KEY = '';

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getData();
  }, []);

  // created an async function to be able to fetch our data
  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    // get the result from API
    setRecipes(result.hits);
  };

  // when you send the form, we call onSubmit handler, query the results
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      <h1>Food Recipe App </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
          placeholder="Search Food"
        />
        <button type="submit" className="btn" value="Search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.url}
              label={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              url={recipe.recipe.url}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodRecipe;
```

```js
// src > components > FoodRecipe.js

import React, {useState} from 'react';

const FoodRecipe = () => {
  // create a state for search query
  const [search, setSearch] = useState('');
  // display the results with results state
  const [results, setResults] = useState([]);

  const APP_ID = '';
  const APP_KEY = '';

  // change chicken to search piece of state to make it dynamic
  const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(url);
    const result = await response.json();
    setResults(result.data.hits);
    // clear the input when we submit the form
    setSearch('');
  };

  return (
    <div>
      <h1>Food Recipe App </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default FoodRecipe;
```

`Input` is keeping track of its state with `search` state. We can get input's value from `event.target.value`.
Then we can change our state with `setSearch` function.

```javascript
<input
  type="text"
  value={search}
  onChange={(event) => setSearch(event.target.value)}
/>
```

// effect itself cannot be async
// inline the async function inside useEffect

Only make search after we click the `Search button`. Make a new state, name it `query`.

`query` will run only after form submit. Use it as a dependency inside the array.

If you run into any issues with your app or you have questions, please reach out to me on Twitter @hulyakarakayaa\_ or on Github.
