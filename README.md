# yahoo-works


## How to use it
* Development (view the tool)
    * run
        1. `npm i`
        2. `npm run dev`
        3. browse `localhost:3001`
    * test
        1. `npm i`
        2. `npm run test`

* Production (build and release)
    * build and publish to npm cloud server
        1. `npm i`
        2. `npm run build`
        3. `npm run publish:customized`


## Form-Preview
* [requirements](https://github.com/han3zeng/yahoo-works/wiki/Form-Requirements)

#### Features
* Flexible
    * You can just modify maxLength prop to set the maxLength for the input

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


#### Performance Optimization
* To improve render performacne, each Input element of the form is optimized by React.memo. Although it may seem trivial in this case, but we may have great impact for the complex form with single uplifted data state.

#### Possible Improvements
* prop-checks
* render all input field through data array.
