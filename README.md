# yahoo-works


## How to use it
* Development
    * run
        1. `npm i`
        2. `npm run dev`
        3. browse `localhost:3001`

* Production (build and run)
        1. `npm i`
        2. `npm run build`
        3. `npm run start`
        4. browse `localhost:3001`


## Form-Preview
* [Requirements](https://github.com/han3zeng/yahoo-works/wiki/Form-Requirements)
* [Original CodeSandbox](https://codesandbox.io/s/jolly-worker-f7t97?file=/src/App.js)

#### Features

* Maintainable
    * single reducer state for all input

* Flexible
    * You can just modify maxLength prop to set the maxLength for the input.

    ```js

    <TextInput
      id="longTitle"
      type="text"
      text="Long title"
      data={data.longTitle}
      dispatch={dispatch}
      maxLength={40}
    />

    ```

* debounce for input validation
* customized input style
* customized dropdown menu

#### Performance Optimization
* To improve render performacne, each Input element of the form is optimized by React.memo. Although it may seem trivial in this case, but we may have great impact for the complex form with single uplifted data state.

#### Possible Improvements
* prop-checks

## Dan's Sorting Sheet
* [Requirements & Original CodeSandbox](https://codesandbox.io/s/kind-haibt-z5hun?file=/app.js)

* render all input field through data array.
