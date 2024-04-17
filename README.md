# What is this?

This is a minimum reproducible example for <https://github.com/cfaester/enzyme-adapter-react-18/issues/12>.

When cloned, run `npm i`.

After that, you can run either run:

`npm run original-test`, which runs the reproduction test file with the original `@cfaester/enzyme-adapter-react-18`

or

`npm run changed-test`, which will run the reproduction test file with a changed `@cfaester/enzyme-adapter-react-18` that seems to let it work properly when calling `.simulate()` on an `@emotion/styled` styled component.
