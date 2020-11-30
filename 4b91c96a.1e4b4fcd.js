(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/food-demo-05037f073f6195481ada6521ad34ba7d.gif"},107:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/food-60aecb4a454257288eed608ecbfb36de.gif"},108:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/chicken-40261130b0a773eee1447a3bf73df77b.gif"},109:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ice-cream-fe87b4ffbe7f80639880e486726dc7e8.gif"},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),r=(n(0),n(75)),c={id:"Demo App",title:"Demo App-Food Recipes"},i={unversionedId:"Demo App",id:"Demo App",isDocsHomePage:!1,title:"Demo App-Food Recipes",description:"It's time to create our demo app!",source:"@site/docs/doc4.md",slug:"/Demo App",permalink:"/react-tutorial/docs/Demo App",editUrl:"https://github.com/hulyak/react-tutorial/docs/doc4.md",version:"current",sidebar:"someSidebar",previous:{title:"The useEffect Hook",permalink:"/react-tutorial/docs/The useEffect Hook"},next:{title:"Wrapping Up",permalink:"/react-tutorial/docs/Wrapping Up"}},s=[{value:"How Can I Fetch Data?",id:"how-can-i-fetch-data",children:[]}],p={rightToc:s};function l(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It's time to create our demo app!\nWe will create a Food Recipe app, we will fetch data from an API and we will use both ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," and ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," hooks."),Object(r.b)("p",null,"First, create a new file under ",Object(r.b)("inlineCode",{parentName:"p"},"src > components")," and name it ",Object(r.b)("inlineCode",{parentName:"p"},"FoodRecipe.js"),".\nTo be able to get a response for search queries, we need an ",Object(r.b)("inlineCode",{parentName:"p"},"APP ID"),", and an ",Object(r.b)("inlineCode",{parentName:"p"},"APP KEY"),"."),Object(r.b)("h2",{id:"how-can-i-fetch-data"},"How Can I Fetch Data?"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.edamam.com/"}),"edamam.com")),Object(r.b)("li",{parentName:"ol"},"Choose ",Object(r.b)("inlineCode",{parentName:"li"},"Recipe Search API")," and click on ",Object(r.b)("inlineCode",{parentName:"li"},"Sign Up")),Object(r.b)("li",{parentName:"ol"},"Choose ",Object(r.b)("inlineCode",{parentName:"li"},"Developer")," and click on ",Object(r.b)("inlineCode",{parentName:"li"},"Start Now")),Object(r.b)("li",{parentName:"ol"},"Fill out the form."),Object(r.b)("li",{parentName:"ol"},"Go to ",Object(r.b)("inlineCode",{parentName:"li"},"Dashboard")),Object(r.b)("li",{parentName:"ol"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"Applications")," > ",Object(r.b)("inlineCode",{parentName:"li"},"View"),". You should see your Application ID and Application Keys on this page."),Object(r.b)("li",{parentName:"ol"},"Copy your keys and paste them inside the code."),Object(r.b)("li",{parentName:"ol"},"API can give some errors, if you see any ",Object(r.b)("strong",{parentName:"li"},"CORS errors"),", add a cors browser extension for the browser you are using. ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/"}),"Firefox")," / ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related"}),"Chrome")),Object(r.b)("li",{parentName:"ol"},"Still, there is a problem? You need to wait until your API keys are available. Also, for the free version, we can only make 5 requests per minute. You can check out the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.edamam.com/edamam-docs-recipe-api"}),"documentation."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="src/components/FoodRecipe.js"',title:'"src/components/FoodRecipe.js"'}),"import React, {useEffect} from 'react';\n\nconst FoodRecipe = () => {\n  // paste your APP_ID\n  const APP_ID = '';\n  // paste your APP_KEY\n  const APP_KEY = '';\n\n// url query is making a search for 'chicken' recipe\n  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;\n\n  // useEffect to make our API request\n  useEffect(() => {\n    getData();\n  }, []);\n\n  // created an async function to be able to fetch our data\n  const getData = async (e) => {\n    const response = await fetch(url);\n    const result = await response.json();\n    // console log the results we get from the api\n    console.log(result);\n  };\n\n  return (\n    <div>\n      <h1>Food Recipe App </h1>\n      <form>\n        <input type=\"text\" placeholder=\"Search for recipes\" />\n        <button type=\"submit\" className=\"btn\">\n          Search\n        </button>\n      </form>\n    </div>\n  );\n};\n\nexport default FoodRecipe;\n")),Object(r.b)("p",null,Object(r.b)("img",{alt:"demo",src:n(106).default})),Object(r.b)("p",null,"Let's see what we did in our code:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Created some JSX elements(form, input, and button properties)."),Object(r.b)("li",{parentName:"ul"},"We are calling our function to fetch our data."),Object(r.b)("li",{parentName:"ul"},"Created a ",Object(r.b)("inlineCode",{parentName:"li"},"fetch")," request to get our data, and used ",Object(r.b)("inlineCode",{parentName:"li"},"useEffect")," hook to call our function. We are using our empty dependency array, because we will only make a request when our app loads. ")),Object(r.b)("p",null,"We got our API response, and we got a lot of information. You can see from the gif. Now, we need to create a state for our recipes, and we will update the recipes with the API data. We will only extract ",Object(r.b)("inlineCode",{parentName:"p"},"hits")," and their contents from our response. Let's do it!"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/components/FoodRecipe.js"',title:'"src/components/FoodRecipe.js"'}),"import React, {useState, useEffect} from 'react';\n\nconst FoodRecipe = () => {\n  // state for our API data\n  const [recipes, setRecipes] = useState([]);\n\n  const APP_ID = '';\n  const APP_KEY = '';\n\n  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;\n\n  useEffect(() => {\n    getData();\n  }, []);\n\n  const getData = async () => {\n    const response = await fetch(url);\n    const result = await response.json();\n    console.log(result);\n    // set the state for our results and extract the 'hits' data from API response\n    setRecipes(result.hits);\n  };\n\n  // some ui\n};\n\nexport default FoodRecipe;\n")),Object(r.b)("p",null,"Okay, here we have added our ",Object(r.b)("inlineCode",{parentName:"p"},"recipes")," state and updated with ",Object(r.b)("inlineCode",{parentName:"p"},"setRecipes"),". From our API call, we see that ",Object(r.b)("inlineCode",{parentName:"p"},"hits")," is an array, that's why for the default value we put an empty array."),Object(r.b)("p",null,"We need to display our recipes, for that let's create a ",Object(r.b)("inlineCode",{parentName:"p"},"Recipe")," component."),Object(r.b)("p",null,"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"src > components"),", create a new component and name it ",Object(r.b)("inlineCode",{parentName:"p"},"Recipe.js"),". Copy this code, this will allow us to display individual recipes."),Object(r.b)("p",null,"Here, I have used some Semantic UI components to display our individual recipes."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/components/Recipe.js"',title:'"src/components/Recipe.js"'}),'import React from \'react\';\n\nconst Recipe = () => {\n    return (\n      <div class="ui column grid">\n        <div className="column recipe">\n          <div className="content">\n            <h2>Label</h2>\n            <p>Calories: </p>\n            <ul>\n              <li>Ingredients</li>\n            </ul>\n            <a href="" target="_blank">\n              URL\n            </a>\n            </div>\n          <div className="ui fluid card">\n            <img />\n          </div>\n        </div>\n      </div>\n    );\n};\n\nexport default Recipe;\n')),Object(r.b)("p",null,"Now, we need to map over our recipes state, and display the results."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/components/FoodRecipe.js":',title:'"src/components/FoodRecipe.js":'}),'// ..............\nreturn (\n    <div>\n      <h1>Food Recipe App </h1>\n      <form>\n          <input type="text" placeholder="Search for recipes" />\n          <button type="submit" className="btn">\n            Search\n          </button>\n        </form>\n        <div className="recipes">\n          {/* map over our array and pass our data from API*/}\n          {recipes !== [] &&\n              recipes.map((recipe) => (\n              <Recipe\n                key={recipe.recipe.url}\n                label={recipe.recipe.label}\n                calories={recipe.recipe.calories}\n                image={recipe.recipe.image}\n                url={recipe.recipe.url}\n                ingredients={recipe.recipe.ingredients}\n              />\n            ))}\n        </div>\n      </div>\n  );\n')),Object(r.b)("p",null,"For now, I am getting our ",Object(r.b)("inlineCode",{parentName:"p"},"Recipe.js")," without any props, of course. "),Object(r.b)("p",null,Object(r.b)("img",{alt:"food",src:n(107).default})),Object(r.b)("p",null,"Now, we can go to our ",Object(r.b)("inlineCode",{parentName:"p"},"Recipe")," component and pass our props to it. We are getting these props from the parent ",Object(r.b)("inlineCode",{parentName:"p"},"FoodRecipe.js"),". We will use destructuring to get our props."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/components/Recipe.js"',title:'"src/components/Recipe.js"'}),'import React from \'react\';\n\n// destructure label, calories etc\nconst Recipe = ({label, calories, image, url, ingredients}) => {\n  return (\n      <div class="ui column grid">\n          <div className="column recipe">\n            <div className="content">\n              <h2>{label}</h2>\n              <p>{calories}</p>\n              <ul>{ingredients.map((ingredient) => \n                  <li key={ingredient.text}>{ingredient.text}</li>)}\n              </ul>\n              <a href={url} target="_blank">\n                URL\n              </a>\n            </div>\n            <div className="ui fluid card">\n              <img src={image} alt={label} />\n            </div>\n          </div>\n        </div>\n  );\n};\n\nexport default Recipe;\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"chicken",src:n(108).default})),Object(r.b)("p",null,"Tadaa!! We got our chickens! "),Object(r.b)("p",null,"Now, we need to use our search bar, we will search the recipe from our input field. To get the state of our search bar, we will create a new piece of state."),Object(r.b)("p",null,"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"FoodRecipe.js")," and add a new ",Object(r.b)("inlineCode",{parentName:"p"},"search")," state."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/components/FoodRecipe.js"',title:'"src/components/FoodRecipe.js"'}),"// create a state for search query\nconst [search, setSearch] = useState('');\n")),Object(r.b)("p",null,"Set the value for input value ",Object(r.b)("inlineCode",{parentName:"p"},"search"),", ",Object(r.b)("inlineCode",{parentName:"p"},"setSearch")," will update our input with the ",Object(r.b)("inlineCode",{parentName:"p"},"onChange")," event handler. "),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"input")," is keeping track of its state with the ",Object(r.b)("inlineCode",{parentName:"p"},"search")," state. We can get input's value from ",Object(r.b)("inlineCode",{parentName:"p"},"event.target.value"),".\nThen we can change our state with ",Object(r.b)("inlineCode",{parentName:"p"},"setSearch")," function."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/components/FoodRecipe.js"',title:'"src/components/FoodRecipe.js"'}),'<input\n  type="text"\n  value={search}\n  onChange={(event) => setSearch(event.target.value)}\n/>\n')),Object(r.b)("p",null,"We need to update our state after we click on ",Object(r.b)("inlineCode",{parentName:"p"},"Search Button"),". That's why we need another state. And we can update our ",Object(r.b)("inlineCode",{parentName:"p"},"url")," from chicken query to any query. Make a new state, name it ",Object(r.b)("inlineCode",{parentName:"p"},"query"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/components/FoodRecipe.js"',title:'"src/components/FoodRecipe.js"'}),"const [query, setQuery] = useState('');\n\n// when you send the form, we call onSubmit handler to query the results\nconst onSubmit = (e) => {\n  // prevent browser refresh\n  e.preventDefault();\n  // setQuery for the finished search recipe\n  setQuery(search);\n};\n")),Object(r.b)("p",null,"Now, we need to pass our ",Object(r.b)("inlineCode",{parentName:"p"},"query")," state to our ",Object(r.b)("inlineCode",{parentName:"p"},"onEffect")," dependency array. Whenever we click on the Search button, we will call our API and change our state to a new ",Object(r.b)("inlineCode",{parentName:"p"},"query")," state."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"query")," will only run after the form submit. Use it as a dependency inside the array. Our final code now looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="src/component/FoodRecipe.js"',title:'"src/component/FoodRecipe.js"'}),"import React, {useState, useEffect} from 'react';\nimport Recipe from './Recipe';\n\nconst FoodRecipe = () => {\n  const [recipes, setRecipes] = useState([]);\n  const [search, setSearch] = useState('');\n  const [query, setQuery] = useState('');\n\n  const APP_ID = '';\n  const APP_KEY = '';\n\n  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;\n\n  useEffect(() => {\n    getData();\n  }, [query]);\n\n  const getData = async () => {\n    const response = await fetch(url);\n    const result = await response.json();\n    setRecipes(result.hits);\n  };\n\n  const onSubmit = (e) => {\n    e.preventDefault();\n    setQuery(search);\n    // empty the input field after making search\n    setSearch('');\n  };\n\n  return (\n    <div>\n      <h1>Food Recipe App </h1>\n      <form onSubmit={onSubmit}>\n        <input\n          type=\"text\"\n          placeholder=\"Search for recipes\"\n          value={search}\n          onChange={(e) => setSearch(e.target.value)}\n        />\n        <button type=\"submit\" className=\"btn\">\n          Search\n        </button>\n      </form>\n      <div className=\"ui two column grid\">\n        {recipes !== [] &&\n          recipes.map((recipe) => (\n            <Recipe\n              key={recipe.recipe.url}\n              label={recipe.recipe.label}\n              calories={recipe.recipe.calories}\n              image={recipe.recipe.image}\n              url={recipe.recipe.url}\n              ingredients={recipe.recipe.ingredients}\n            />\n          ))}\n      </div>\n    </div>\n  );\n};\n\nexport default FoodRecipe;\n")),Object(r.b)("p",null,Object(r.b)("img",{alt:"ice-cream",src:n(109).default})),Object(r.b)("p",null,"Time to enjoy your ice creams! I hope you liked the project."))}l.isMDXComponent=!0}}]);