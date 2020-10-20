(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/food-demo-05037f073f6195481ada6521ad34ba7d.gif"},107:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/food-60aecb4a454257288eed608ecbfb36de.gif"},108:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/chicken-40261130b0a773eee1447a3bf73df77b.gif"},109:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/ice-cream-fe87b4ffbe7f80639880e486726dc7e8.gif"},60:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),c=(t(0),t(75)),o={id:"Demo App",title:"Demo App-Food Recipes"},i={unversionedId:"Demo App",id:"Demo App",isDocsHomePage:!1,title:"Demo App-Food Recipes",description:"It's time to create our demo app!",source:"@site/docs/doc4.md",slug:"/Demo App",permalink:"/react-tutorial/docs/Demo App",editUrl:"https://github.com/hulyak/react-tutorial/docs/doc4.md",version:"current",sidebar:"someSidebar",previous:{title:"The useEffect Hook",permalink:"/react-tutorial/docs/The useEffect Hook"},next:{title:"Wrapping Up",permalink:"/react-tutorial/docs/Wrapping Up"}},s=[{value:"How Can I Fetch Data?",id:"how-can-i-fetch-data",children:[]}],p={rightToc:s};function l(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,o,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"It's time to create our demo app!\nIn this app, we will create a Food Recipe app, we will fetch data from an Api and we will use both ",Object(c.b)("inlineCode",{parentName:"p"},"useState")," and ",Object(c.b)("inlineCode",{parentName:"p"},"useEffect")," hooks."),Object(c.b)("p",null,"First, create a new file under ",Object(c.b)("inlineCode",{parentName:"p"},"src > components")," and name it ",Object(c.b)("inlineCode",{parentName:"p"},"FoodRecipe.js"),".\nTo be able to get a response for search queries, we need an APP ID, and an APP KEY."),Object(c.b)("h2",{id:"how-can-i-fetch-data"},"How Can I Fetch Data?"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Go to ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.edamam.com/"}),"edamam.com")),Object(c.b)("li",{parentName:"ol"},"Choose ",Object(c.b)("inlineCode",{parentName:"li"},"Recipe Search API")," and click on ",Object(c.b)("inlineCode",{parentName:"li"},"Sign Up")),Object(c.b)("li",{parentName:"ol"},"Choose ",Object(c.b)("inlineCode",{parentName:"li"},"Developer")," and Click on ",Object(c.b)("inlineCode",{parentName:"li"},"Start Now")),Object(c.b)("li",{parentName:"ol"},"Fill out the form."),Object(c.b)("li",{parentName:"ol"},"Go to ",Object(c.b)("inlineCode",{parentName:"li"},"Dashboard")),Object(c.b)("li",{parentName:"ol"},"Click on ",Object(c.b)("inlineCode",{parentName:"li"},"Applications")," > ",Object(c.b)("inlineCode",{parentName:"li"},"View"),". You should see your Application ID and Application Keys in this page."),Object(c.b)("li",{parentName:"ol"},"Copy your keys and paste it inside the code."),Object(c.b)("li",{parentName:"ol"},"API can give some errors, if you see any ",Object(c.b)("strong",{parentName:"li"},"CORS errors"),", add a cors browser extension for the browser you are using. ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/"}),"Firefox")," / ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related"}),"Chrome")),Object(c.b)("li",{parentName:"ol"},"Still, there is a problem? You need to wait until your API keys are available. Also, for free version, we can only make 5 requests per minute."),Object(c.b)("li",{parentName:"ol"},"You can check out the ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.edamam.com/edamam-docs-recipe-api"}),"documentation."))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// src > components > FoodRecipe.js\n\nimport React, {useEffect} from 'react';\n\nconst FoodRecipe = () => {\n  // paste your APP_ID\n  const APP_ID = '';\n  // paste your APP_KEY\n  const APP_KEY = '';\n\n// url query is making a search for 'chicken' recipe\n  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;\n\n  // useEffect to make our API request\n  useEffect(() => {\n    getData();\n  }, []);\n\n  // created an async function to be able to fetch our data\n  const getData = async (e) => {\n    const response = await fetch(url);\n    const result = await response.json();\n    // console log the results we get from the api\n    console.log(result);\n  };\n\n  return (\n    <div>\n      <h1>Food Recipe App </h1>\n      <form>\n        <input type=\"text\" placeholder=\"Search for recipes\" />\n        <button type=\"submit\" className=\"btn\">\n          Search\n        </button>\n      </form>\n    </div>\n  );\n};\n\nexport default FoodRecipe;\n")),Object(c.b)("p",null,Object(c.b)("img",{alt:"demo",src:t(106).default})),Object(c.b)("p",null,"Let's see what we did in our code:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Created some JSX and added form, input and button properties."),Object(c.b)("li",{parentName:"ul"},"As you can see, we are calling our function to fetch our data."),Object(c.b)("li",{parentName:"ul"},"Created a ",Object(c.b)("inlineCode",{parentName:"li"},"fetch")," request to get our data, and used ",Object(c.b)("inlineCode",{parentName:"li"},"useEffect")," hook to call our function. As you can see, we are using our empty dependency array, because we will only make a request when our app loads. ")),Object(c.b)("p",null,"We got our API response, and we got a lot of information. You can see from the gif. Now, we need to create a state for our recipes, and we will update the recipes with the API data. We will only extract ",Object(c.b)("inlineCode",{parentName:"p"},"hits")," and its contents from our response. Let's do it!"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// src > components > FoodRecipe.js\n\nimport React, {useState, useEffect} from 'react';\n// import Recipe component\nimport Recipe from './Recipe';\n\nconst FoodRecipe = () => {\n  // state for our API data\n  const [recipes, setRecipes] = useState([]);\n\n  const APP_ID = '';\n  const APP_KEY = '';\n\n  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;\n\n  useEffect(() => {\n    getData();\n  }, []);\n\n  const getData = async () => {\n    const response = await fetch(url);\n    const result = await response.json();\n    console.log(result);\n    // set the state for our results and extract the 'hits' data\n    setRecipes(result.hits);\n  };\n\n  // some ui\n};\n\nexport default FoodRecipe;\n")),Object(c.b)("p",null,"Okay, here we have added our ",Object(c.b)("inlineCode",{parentName:"p"},"recipes")," state and updated with ",Object(c.b)("inlineCode",{parentName:"p"},"setRecipes"),". From our API call, we see that ",Object(c.b)("inlineCode",{parentName:"p"},"hits")," is an array, that's why for the default value we put an empty array."),Object(c.b)("p",null,"We need to display our recipes, for that let's create a ",Object(c.b)("inlineCode",{parentName:"p"},"Recipe")," component."),Object(c.b)("p",null,"Go to ",Object(c.b)("inlineCode",{parentName:"p"},"src > components"),", create a new component and name it ",Object(c.b)("inlineCode",{parentName:"p"},"Recipe.js"),". Copy this code and this code will allow us to display individual recipes."),Object(c.b)("p",null,"Here, I have used some Semantic UI components to display our individual recipes."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// src > components > Recipe.js\n\nimport React from \'react\';\n\nconst Recipe = () => {\n    return (\n    <div class="ui column grid">\n      <div className="column recipe">\n        <div className="content">\n          <h2>Label</h2>\n          <p>Calories: </p>\n          <ul>\n            <li>Ingredients</li>\n          </ul>\n          <a href="" target="_blank">\n            URL\n          </a>\n          </div>\n        <div className="ui fluid card">\n          <img />\n        </div>\n      </div>\n    </div>\n    );\n};\n\nexport default Recipe;\n')),Object(c.b)("p",null,"Now, we need to map over our recipes state, and display the results."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// src > components > FoodRecipe.js\n\nreturn (\n    <div>\n      <h1>Food Recipe App </h1>\n      <form>\n          <input type="text" placeholder="Search for recipes" />\n          <button type="submit" className="btn">\n            Search\n          </button>\n        </form>\n        <div className="recipes">\n          {/* map over our array and pass our data from API*/}\n        {recipes !== [] &&\n            recipes.map((recipe) => (\n            <Recipe\n              key={recipe.recipe.url}\n              label={recipe.recipe.label}\n              calories={recipe.recipe.calories}\n              image={recipe.recipe.image}\n              url={recipe.recipe.url}\n              ingredients={recipe.recipe.ingredients}\n            />\n          ))}\n        </div>\n      </div>\n  );\n')),Object(c.b)("p",null,"For now, I am getting our Recipe.js without any props, of course. "),Object(c.b)("p",null,Object(c.b)("img",{alt:"food",src:t(107).default})),Object(c.b)("p",null,"Now, we can go to our ",Object(c.b)("inlineCode",{parentName:"p"},"Recipe")," component and pass our props to it. We are getting these props from the parent ",Object(c.b)("inlineCode",{parentName:"p"},"FoodRecipe.js"),". We will use destructuring."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// src > components > Recipe.js\n\nimport React from \'react\';\n\n// inside recipe object destructure label, etc\nconst Recipe = ({label, calories, image, url, ingredients}) => {\n  return (\n    <div class="ui column grid">\n        <div className="column recipe">\n          <div className="content">\n            <h2>{label}</h2>\n            <p>{calories}</p>\n            <ul>{ingredients.map((ingredient) => \n                <li key={ingredient.text}>{ingredient.text}</li>)}\n            </ul>\n            <a href={url} target="_blank">\n              URL\n            </a>\n          </div>\n          <div className="ui fluid card">\n            <img src={image} alt={label} />\n          </div>\n        </div>\n      </div>\n  );\n};\n\nexport default Recipe;\n')),Object(c.b)("p",null,Object(c.b)("img",{alt:"chicken",src:t(108).default})),Object(c.b)("p",null,"Tadaa!! We got our chickens! "),Object(c.b)("p",null,"Now, we need to use our search bar and we will search the recipe from our input field. To get the state of our search bar, we will create a new piece of state."),Object(c.b)("p",null,"Go to ",Object(c.b)("inlineCode",{parentName:"p"},"FoodRecipe.js")," and add new ",Object(c.b)("inlineCode",{parentName:"p"},"search")," state."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// src > components > FoodRecipe.js\n\n// create a state for search query\nconst [search, setSearch] = useState('');\n")),Object(c.b)("p",null,"And set the value for input value ",Object(c.b)("inlineCode",{parentName:"p"},"search")," and ",Object(c.b)("inlineCode",{parentName:"p"},"setSearch")," will update our input with the ",Object(c.b)("inlineCode",{parentName:"p"},"onChange")," event handler. `"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"input")," is keeping track of its state with ",Object(c.b)("inlineCode",{parentName:"p"},"search")," state. We can get input's value from ",Object(c.b)("inlineCode",{parentName:"p"},"event.target.value"),".\nThen we can change our state with ",Object(c.b)("inlineCode",{parentName:"p"},"setSearch")," function."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// src > components > FoodRecipe.js\n\n<input\n  type="text"\n  value={search}\n  onChange={(event) => setSearch(event.target.value)}\n/>\n')),Object(c.b)("p",null,"We need to update our state, after we click on ",Object(c.b)("inlineCode",{parentName:"p"},"Search Button"),". That's why we need another state. And we can update our ",Object(c.b)("inlineCode",{parentName:"p"},"url")," from chicken query to any query. Make a new state, name it ",Object(c.b)("inlineCode",{parentName:"p"},"query"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// src > components > FoodRecipe.js\n\nconst [query, setQuery] = useState('');\n\n// when you send the form, we call onSubmit handler to query the results\nconst onSubmit = (e) => {\n  // prevent browser refresh\n  e.preventDefault();\n  // setQuery for the finished search recipe\n  setQuery(search);\n};\n")),Object(c.b)("p",null,"Now, we need to pass our ",Object(c.b)("inlineCode",{parentName:"p"},"query")," state to our ",Object(c.b)("inlineCode",{parentName:"p"},"onEffect")," dependency array. Whenever we click on the Search button, we will call our API and change our state to new ",Object(c.b)("inlineCode",{parentName:"p"},"query")," state."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"query")," will run only after form submit. Use it as a dependency inside the array. Our final code now looking like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// src > component > FoodRecipe.js\n\nimport React, {useState, useEffect} from 'react';\nimport Recipe from './Recipe';\n\nconst FoodRecipe = () => {\n  const [recipes, setRecipes] = useState([]);\n  const [search, setSearch] = useState('');\n  const [query, setQuery] = useState('');\n\n  const APP_ID = '';\n  const APP_KEY = '';\n\n  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;\n\n  useEffect(() => {\n    getData();\n  }, [query]);\n\n  const getData = async () => {\n    const response = await fetch(url);\n    const result = await response.json();\n    setRecipes(result.hits);\n  };\n\n  const onSubmit = (e) => {\n    e.preventDefault();\n    setQuery(search);\n    // empty the input field after making search\n    setSearch('');\n  };\n\n  return (\n    <div>\n      <h1>Food Recipe App </h1>\n      <form onSubmit={onSubmit}>\n        <input\n          type=\"text\"\n          placeholder=\"Search for recipes\"\n          value={search}\n          onChange={(e) => setSearch(e.target.value)}\n        />\n        <button type=\"submit\" className=\"btn\">\n          Search\n        </button>\n      </form>\n      <div className=\"ui two column grid\">\n        {recipes !== [] &&\n          recipes.map((recipe) => (\n            <Recipe\n              key={recipe.recipe.url}\n              label={recipe.recipe.label}\n              calories={recipe.recipe.calories}\n              image={recipe.recipe.image}\n              url={recipe.recipe.url}\n              ingredients={recipe.recipe.ingredients}\n            />\n          ))}\n      </div>\n    </div>\n  );\n};\n\nexport default FoodRecipe;\n")),Object(c.b)("p",null,Object(c.b)("img",{alt:"ice-cream",src:t(109).default})),Object(c.b)("p",null,"Time to enjoy your ice creams! I hope you liked the project."))}l.isMDXComponent=!0}}]);