# REACTING
This is my 'commit-by-commit' documentation of learning [React](http://facebook.github.io/react/).

My goal is to use pure React to document the different features of the framework. I will document each commit down below.

To get to a specific commit: ```git checkout <commithash>```

### Generic Build Information
I chose to use [browserify](http://browserify.org/) with [reactify](https://github.com/andreypopp/reactify) for builds. [reactify](https://github.com/andreypopp/reactify) is a transform for [browserify](http://browserify.org/) so that we can use [JSX](http://facebook.github.io/react/docs/displaying-data.html#jsx-syntax).

Commands:
* ```npm run bundle``` - uses browserify to bundle things together
* ```npm run server``` - runs bundle and serves locally on port 8080

### Commit [01e8c7441814963df553e06b6a79d8e644158d83](https://github.com/austburn/reacting/commit/01e8c7441814963df553e06b6a79d8e644158d83)
First commit.

The idea here was to demonstrate the _basics_ of [React](http://facebook.github.io/react/). The building blocks are [React Components](http://facebook.github.io/react/docs/component-specs.html). The main functionality of a component lies in [```component.render```](http://facebook.github.io/react/docs/component-specs.html#render). Here, we return the [JSX](http://facebook.github.io/react/docs/displaying-data.html#jsx-syntax) representation of the component. The main goal behind [JSX](http://facebook.github.io/react/docs/displaying-data.html#jsx-syntax) is to provide an HTML-like syntax that allows for developers to immediately understand both the structure and behavior of a component.

As you can see in [```app.jsx```](https://github.com/austburn/reacting/commit/01e8c7441814963df553e06b6a79d8e644158d83#diff-87f84d90334ed8e17a1c699810ecc526R8) we are just going to render the ever classic ```Hello, World!```.

At [React](http://facebook.github.io/react/)'s top level, we need to provide a way to actually render our application into the DOM. [React.render](http://facebook.github.io/react/docs/top-level-api.html#react.render) accomplishes that [here](https://github.com/austburn/reacting/commit/01e8c7441814963df553e06b6a79d8e644158d83#diff-cc09b7152c6a648c48bb7ff59e510e41R8). By wrapping our App class into a JSX style syntax, a la ```<App />```, React will create the ReactElement for us. This was new in [React v0.12](http://facebook.github.io/react/blog/2014/10/14/introducing-react-elements.html#upgrading-to-0.12). In addition, we must render this onto a DOM element, in this case ```<div id="#main"></div>```.

### Commit [393acd9cdd438370e617accdd729339c8550f865](https://github.com/austburn/reacting/commit/393acd9cdd438370e617accdd729339c8550f865)
This commit mainly demonstrates dynamic children. Now, our application is rendering a list of [People](https://github.com/austburn/reacting/commit/fdbe8312ad59ddbf665be578347c6526c7cc8c0b#diff-87f84d90334ed8e17a1c699810ecc526R21). At the top level, we have a list of [people](https://github.com/austburn/reacting/commit/fdbe8312ad59ddbf665be578347c6526c7cc8c0b#diff-87f84d90334ed8e17a1c699810ecc526R6) that we actually pass down to our People component. This is done via [props](http://facebook.github.io/react/docs/transferring-props.html). In React, we pass props to children for them to render.

Our props in this case is just an array of people objects. We're just using Javascript primitives here, the Array and Object. In People, we [loop](https://github.com/austburn/reacting/commit/fdbe8312ad59ddbf665be578347c6526c7cc8c0b#diff-1639a4704b68dee0eac1c4120522adcdR10) over these and return a [Person](https://github.com/austburn/reacting/commit/fdbe8312ad59ddbf665be578347c6526c7cc8c0b#diff-feec86747753cb511908cb9ff1887692R1) per entry in the array. The prop attributes are passed down to children via properties on the element. As you can see [here](https://github.com/austburn/reacting/commit/fdbe8312ad59ddbf665be578347c6526c7cc8c0b#diff-1639a4704b68dee0eac1c4120522adcdR11) we set the ```name``` and ```number``` on the element and [here](https://github.com/austburn/reacting/commit/fdbe8312ad59ddbf665be578347c6526c7cc8c0b#diff-feec86747753cb511908cb9ff1887692R7) we inherit those props as ```this.props.name``` and ```this.props.number``` respectively.

### Commit [8faca77d42360172a8f362acb94ebd1e086444ca](https://github.com/austburn/reacting/commit/8faca77d42360172a8f362acb94ebd1e086444ca)
Now that we have a collection, the next step is to remove stuff! This commit might actually have bitten off more than I could chew. I'll first begin by discussing the differentiation between ```prop``` and ```state``` in React. Basically, ```props``` are immutable. Anything that needs to change and should alter the display as a result should live in ```state```. Generally, it is recommended to handle component ```state``` at a high level, passing down as ```props``` to child components for display. This means that at the top level, in our case [```app.jsx```](https://github.com/austburn/reacting/commit/8faca77d42360172a8f362acb94ebd1e086444ca#diff-87f84d90334ed8e17a1c699810ecc526R19), we will provide the state and the necessary functionality to alter state.

In our new render function, we pass [People](https://github.com/austburn/reacting/commit/8faca77d42360172a8f362acb94ebd1e086444ca#diff-87f84d90334ed8e17a1c699810ecc526R34) both the collection and the callback to remove a person from the collection.

A step lower, in People, we render Person with a key as well as a callback to fire our top level callback, removePerson. The key helps us know which person to remove.

At the lowest level, in Person, we actually have our click handler which in turn calls back up the chain to eventually remove the Person from the collection. Upon doing so, we call ```setState``` which triggers the component to re-render, this time without the Person we removed.
