---
id: Wrapping Up
title: Wrapping Up
---

## Navigating between different components

I have added some routing with the `react-router-dom` library, we will not focus on routing in this tutorial, just it will make easier to see every component very quickly.

For your code to work, install [react-router-dom](https://reactrouter.com/web/guides/quick-start). 

```bash
npm install react-router-dom
```

And add this code into your `src > App.js` file.

```javascript
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import StateHook from './components/StateHook';
import StateHookArray from './components/StateHookArray';
import StateHookObject from './components/StateHookObject';
import FoodRecipe from './components/FoodRecipe';
import Cleanup from './components/Cleanup';
import UseEffect from './components/UseEffect';
import UseEffectDependency from './components/UseEffectDependency';

import './App.css';

export default function App() {
	return (
		<Router>
			<Header />
			<main className="container mx-auto">
				<Switch>
					<Route path="/" exact>
						<StateHook />
					</Route>
					<Route path="/state-array">
						<StateHookArray />
					</Route>
					<Route path="/state-object">
						<StateHookObject />
					</Route>
					<Route path="/use-effect">
						<UseEffect />
					</Route>
					<Route path="/use-effect-dependency">
						<UseEffectDependency />
					</Route>
					<Route path="/cleanup">
						<Cleanup />
					</Route>
					<Route path="/food-recipe">
						<FoodRecipe />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}
```
 
Also, I have created a `Header` component, this component will help you navigate between components, and you will be able to see in every component. First create a new file under components folder, and name it `Header.js`. 

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				State Hook
			</Link>
			<Link to="/state-array" className="item">
				State Hook Array
			</Link>
			<Link to="/state-object" className="item">
				State Hook Object
			</Link>
			<Link to="/use-effect" className="item">
				useEffect
			</Link>
			<Link to="/use-effect-dependency" className="item">
				Dependency
			</Link>
			<Link to="/cleanup" className="item">
				Cleanup
			</Link>
			<Link to="/food-recipe" className="item">
				Food Recipe
			</Link>
		</div>
	);
}

export default Header;
```

Now, go build something amazing, but don't pressure yourself. You can always go back to tutorial and check how it is done, also check the [official React documentation](https://reactjs.org/docs/hooks-reference.html).Start small, try creating components first, then try to make it bigger and bigger. I hope you enjoyed this tutorial. I'm looking forward to your feedbacks. You can reach me out at Twitter with the handle @hulyakarakayaa.


### References:

Here are the references I used for this tutorial:

- [React Js Documentation](https://reactjs.org/docs/hooks-reference.html)
- [Overreacted/A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [Digital Ocean's How To Build a React-To-Do App with React Hooks](https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks)
- [Tutorial Example](https://caabernathy.github.io/rust-tutorial/docs/)
- [Tania Rascia's React Tutorial](https://www.taniarascia.com/getting-started-with-react/)
- [Software on the Road/React Hooks: everything you need to know!](https://softwareontheroad.com/react-hooks/#use-effect)
- [Upmostly tutorials/Simplifying React State and the useState Hook](https://upmostly.com/tutorials/simplifying-react-state-and-the-usestate-hook)
- [React Hooks: How to Get Started & Build Your Own](https://www.sitepoint.com/react-hooks/)