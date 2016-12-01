This is a re-write of [js-assessment](https://github.com/rmurphey/js-assessment) using [cucumber-js](https://github.com/cucumber/cucumber-js).

# A BDD test-driven JS assessment

This repo includes a set of tests that can be used to assess the skills of
a candidate for a JavaScript position, or to evaluate and improve one's own
skills.

## I want to work on the tests; what do I do?
To use the tests, you will need to install [Node](https://nodejs.org/). You can clone or download this repo. Once you have done so, from the root directory of the repo, run:

    npm install
    npm start

You can then view the tests in your browser at
[http://localhost:4444](http://localhost:4444).

When you visit that page, all of the tests should be failing; your job is to
get the tests to pass. To do this, you'll need to refer to the tests in the
files in the `tests/app` directory, and edit the files in the `app/` directory.
Once you update a test, you can reload the test page in the browser to see
whether it worked.

### Available dependencies

The repo includes [vanilla-js](http://vanilla-js.com/). You can use this
library when writing your solutions!

## I want to contribute tests; what do I do?

Submit a pull request! The tests are currently loosely organized by topic, so
you should do your best to add tests to the appropriate file in `tests/app`, or
create a new file there if you don't see an appropriate one. If you do create
a new file, make sure to add it to `tests/runner.js`, and to add a stub for the
solution to the corresponding file in `app/`. Finally, it would be great if you
could update the [answers](https://github.com/OceanInternet/js-assessment-bdd-answers)
as well.

If you're not sure how or where to add a test, please open an issue.

### Data-driven tests

If your tests need data that can be fetched via XHR, stick a `.json` file in
the `data` directory; you can access it at `/data/<filename>.json`.

## I want to see the answers!

First, bear in mind that looking up the answers is going to teach you a whole
lot less than you'll learn by working on the tests, even if you occasionally get
stuck. I'd recommend only looking at the answers once you have the tests
passing, to see if there's another way you could have approached the
problem. When you're ready to look at the answers, you can find them
[here](https://github.com/rmurphey/js-assessment-answers); I'll do my best to
keep them up to date.

# Todos

There are a number of things that would make this project better; check out the
[issues](https://github.com/rmurphey/js-assessment/issues) for details, pull
requests welcome!

# License

Copyright &copy; 2016 with thanks to Rebecca Murphey for the original [js-assessment](https://github.com/rmurphey/js-assessment).

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>
