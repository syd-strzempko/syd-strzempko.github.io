# Personal Website

## Table of Contents

- [Description](#description)
- [Site Link](#site-link)
- [Technical Notes](#technical-notes)
  - [Fibonacci Pinwheel](#fibonacci-pinwheel)
  - [CRA Eject Workarounds](#eject-custom-workarounds--solutions)
      - [require.context](#custom-babel-plugin-setup)
      - [Inline .css](#inline-css-workaround)
      - [canvas](#canvas-workaround)
- [Commands](#commands)

## Description

Straightforward React app built from [create-react-app](https://create-react-app.dev/) hosted on github using [gh-pages](https://www.npmjs.com/package/gh-pages) package. All content on this site is created by me for the purpose of showcasing work experience as well as personal pursuits. All links to external sites indicate a past affiliation with these companies. For all questions, concerns, and business inquiries please contact me at __syd.strzempko@gmail.com__.

## Site Link

[https://syd-strzempko.github.io/](https://syd-strzempko.github.io/)

## Technical Notes 

### Fibonacci Pinwheel

TODO

### Eject Custom Workarounds & Solutions

As of 7/12/24, app was ejected (see [documentation](https://create-react-app.dev/docs/available-scripts/#npm-run-eject)) for the purposes of advanced testing configuration.

Namely, `require.context` which is provided as a [webpack function](https://webpack.js.org/guides/dependency-management/#requirecontext) is not recognized by jest and thus requires a workaround. As this is a common issue there are several Babel plugins available to resolve this issue.

#### Custom Babel Plugin setup

I elected to go with [babel-plugin-require-context-hook](https://www.npmjs.com/package/babel-plugin-require-context-hook) which required these additional setup steps:

Install package
```
npm i babel-plugin-require-context-hook
```

Modify `config\jest\babelTransform.js`
```

```javascript
module.exports = babelJest.createTransformer({
    ...
    babelrc: true,
    ...
});
```

Create `.babelrc`
```
{
    "env": {
      "test": {
        "plugins": ["require-context-hook"]
      }
    }
}
```

In `package.json`, remove any extant babel config as duplicate (copy values to `.babelrc` to consolidate into one config)

In `src/setupTests.js`, add registration instantiation:

```javascript
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();
```

*Note* - For a clean example of this modification please refer to my [standalone](https://github.com/syd-strzempko/CRA_test-eject_require-context-workaround) repository.

#### Inline .css Workaround

Was encountering issues with importing `node_module` css file directly into js:
```
 SyntaxError: Unexpected token '.'

    > 3 | import 'react-responsive-carousel/lib/styles/carousel.min.css';
```

CRA already has some pretty dense webpack logic to ensure that 'style-loader' & 'css-loader' packages correctly transform css depending on environment (see `config/jest/cssTransform.js`, as well as `module.rules` array in `webpack.config.js`). However, for the purposes of testing functionality, where css is essentially beside the point, we can mock this css model in Jest config per [documentation](https://jestjs.io/docs/webpack#mocking-css-modules) - and, again, CRA already has provided `identity-obj-proxy` package and a regex that just needs some tweaking.

Update `package.json` to include `.min.css` pattern as well:
```
"moduleNameMapper" : {
    "^.+\\.(min|module)\\.(css|sass|scss)$": "identity-obj-proxy"
}
```

#### Canvas Workaround

The dynamic fibonacci pattern seen in the background of all pages of the app was generated using [react-konva](https://www.npmjs.com/package/react-konva), a React-specific wrapper around [konva](https://konvajs.org/) core framework.

React-konva seems to have some pretty well-known issues with Jest that manifested in a couple of ways for me:

First issue was missing `canvas` module, repro'd [here](https://github.com/konvajs/konva/issues/1175). 

```
    Cannot find module 'canvas' from 'node_modules/konva/lib/index-node.js'

    Require stack:
      node_modules/konva/lib/index-node.js
      node_modules/react-konva/lib/ReactKonva.js
```

Solution was pretty straightforward, I manually installed `canvas` package per NodeJs solution in official documentation [here](https://github.com/konvajs/konva?tab=readme-ov-file#4-nodejs-env).

```
npm install konva canvas
```

*Note* - I was not able to get `jest-canvas-mock` workaround as suggested in initial thread working but given that one solution provides additional support for an existing package and the other adds a package that provides a mock of that package to alias those references to, the issue is moot.

Second issue was less consistently documented and manifested as this:
```
  console.error
    Error: Uncaught 'Stage has no container. A container is required.'
```

In underlying konva framework, the `Stage` component is passed a `container` parameter as a kind of DOM anchor (per [documentation](https://konvajs.org/api/Konva.Stage.html)), although no React-konva-specific examples show this parameter in use with the corresponding `<Stage>` component and no errors are thrown when it is rendered on dev/prod. When I added this parameter it did not resolve the issue with Jest testing.

Ultimately, I decided to follow the Jest-documented [manual mock](https://jestjs.io/docs/manual-mocks) pattern for the `Circles` component & create a placeholder component using the specified file structure:

In `...Circles/__mocks__/Circles.js` 
```javascript
const Circles = () => () => <mock-Circles />;
export default Circles;
```

And then import to component tests which rely upon this as:
```javascript
jest.mock('<PATH_TO_COMPONENT>/Circles');
```

## Commands

### Run & Deploy

```
npm run start # Local server on port 3000 - verifies
npm run deploy # Uses gh-pages package
```

### Testing

```
npm run test [ -- -u ] # Flag to update snapshots
```

