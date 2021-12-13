# yahoo-works


## How to use it
* Development
  1. `npm i`
  2. `npm run dev`
  3. browse `localhost:3001`

* Production (build and run)
  1. `npm i`
  2. `npm run build`
  3. `npm run start`
  4. browse `localhost:3001`


## Architecture
* webpack
* client-side rendering
* client routing (react-router)
* node server
* react framework
* styled-component

## Site Map
* localhost:3001
    * /form-markup
    * /sorting-sheet
    * /e-commerce

## Form-Preview (Hugo)
* [Requirements](https://github.com/han3zeng/yahoo-works/wiki/Form-Requirements)
* url: `http://localhost:3001/form-markup`

#### Features

* Implemented all requirements
* Maintainable
    * Create single reducer state for all inputs

* Flexible
    * You can just specify maxLength prop to enable max-length validation mechanism.
    * Specify type to `url` to enable url validation

    ```js

    <TextInput
      id="longTitle"
      type="text"
      text="Long title"
      data={data.longTitle}
      dispatch={dispatch}
      maxLength={40}
    />

    <TextInput
      id="description"
      text="Description"
      type="description"
      data={data.description}
      dispatch={dispatch}
      maxLength={150}
    />

    <TextInput
      id="imageUrl"
      type="url"
      text="Image URL"
      data={data.imageUrl}
      dispatch={dispatch}
      placeholder={'https://www.example.com'}
    />

    ```

* implemented debounce for input validation
* customized input style
* customized dropdown menu

#### Performance Optimization
* To improve render performance, each Input element of the form is optimized by React.memo. Although it may seems trivial in this case, but we may have great impact for the complex form with single uplifted data-state.


## Sorting Sheet (Dan)
* [Requirements](https://codesandbox.io/s/kind-haibt-z5hun?file=/app.js)
* url: `http://localhost:3001/sorting-sheet`

#### Features
* Implemented all requirements.
* Implemented debounce for onChangeHandler of input field



## E-commerce (Paul)
* [Requirements & Markup](https://blog.lalacube.com/mei/yahoo/yec-picker/main.png)
* url: `http://localhost:3001/e-commerce`

#### Features
* Name Search Filter
* Tag Filter
    * Each card has only one unique tag.
* Infinite Scroll to Load More
* Responsive Design



## To Do
* [ ] type checks
* [ ] testing
