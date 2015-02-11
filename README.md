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
