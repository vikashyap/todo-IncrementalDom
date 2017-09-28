# Case Study: Extend a simple list application

Welcome to the world's best Todo List application! At trivago, we deeply care about
our users, thus, we often introduce new features as tests that will be enabled only
for a few users. This approach offers us the ability to test if a new feature
is helpful for users or affects them negatively.

During this case study, you'll be asked to extend and modify a simple todo list
application.

## Requirements

Please make sure that you have Node.js and npm installed on your system. This
application is built with webpack, and without those two tools, you can't proceed.

- Node.js (recommended: 4.x)
- npm (recommended: 2.x or 3.x)

## Setup

Once you're sure everything is in order, please install all required npm modules
by using the command:

```sh
npm install
```

To build the project, please type

```sh
npm run build
```

and to keep rebuilding it while you're working on the project, use

```sh
npm start
```

Once you've compiled the bundle, you can open the `index.html` in your browser
and check out the application.

## How to enable a test?

As this is supposed to be a case study and not a real world application,
you can enable a specific test by appending "#testName" to the URL.

For example, to enable the "renderBottom" test, you would open the `index.html` 
and append a "#renderBottom" to it.


Below tasks that are solved for this case study.


## The tasks

### WEB-101: Support enter key for add todo field------------done

We'd like to be able to add a new todo by using the `enter` key on the keyboard.

### WEB-102: Adding a new todo causes text field focus to be lost---------done

Ever since we've added the ability to enter new todo items by pressing the `enter` key
on the keyboard, our users have started to complain about the fact that after adding their
new todo, they have to manually focus the text field again.

Please ensure that after adding a new todo item, the focus will stay with the text
field.

### WEB-103: Add status filtering test--------------done

As a user, I want the option to hide todo items that I am not interested in based
on their status.

The feature should be implemented as a feature test (similar to "renderBottom") and
should be called "filter".

Please implement a filter bar at the bottom of the list which contains three radio buttons:

- Show all (enabled by default)
- Show open
- Show closed

Those radio buttons are supposed to be mutually exclusive so that only one of them
can be selected at any given time.

If "Show open" is selected, only todo items whose `done` state is `false` should
be displayed in the list.

If "Show closed" is selected, only todo items whose `done` state is `true` should
be displayed in the list.

### WEB-104: Change filter position test---------------done

It turns out that the filter test performed quite negatively for users who also have the
`renderBottom` feature enabled.
Our UX experts are fairly sure that this is because, with both features enabled
(append `#renderBottom#filter` to the `index.html` URL), the lower part of the
user interface feels a bit overloaded.

We would like to test positioning the filter at the top when the input is placed at
the bottom of the application.

This test should be called "filterTop" and should only be usable when both `renderBottom`
and `filter` are active, i.e. the URL could be something like 
`index.html#filter#renderBottom#filterTop`.

### WEB-110: Improve visual appearance-------------done

Our design department believes that the design used for the todo application is
not particularly suited for the application and could be improved to be more visually
pleasing.

Please improve the design of the application. You are free to make your own design,
or to implement an existing design. If you can't decide on how you would like the application
to look, our proposal would be [this one](https://dribbble.com/shots/2084038-Just-Do).

You are free to add a CSS preprocessor such as Sass or PostCSS to the webpack build
to make your live a bit easier.

### WEB-120: Save users todo items------------done

We would like to add the ability to save the todo items that a user has entered
into the application so that even if the user reloads the page, he won't lose
his todo list.

For this functionality i am saving todo list in session Storage,it means after reload 
your page you can see saved todo list, but once you close your browser tab the list will vanish.


### WEB-201: Extract CSS into separate file----------------done

Currently, the CSS for the application is included within the `bundle.js`.
However, our users have started to complain about the initially unstyled application
and we'd like to deliver the CSS separately instead.

Please integrate the extract-text-webpack-plugin into the webpack configuration 
and load the generated CSS file separately from the JavaScript bundle.

### WEB-202: Optimized bundle generation------------pending

Currently, the generated bundle is not optimized and quite large for such a small application.
Please adjust the webpack configuration so that we can create an optimized bundle instead.
Ideally, we'd like to have both the JavaScript and the CSS minified and optimized.


### WEB-203: Replace lib/state.js------------pending, did not understand the task.

It turns out our developers are not immune to the "not invented here syndrome", and
thought it would be a good idea to just reimplement a popular library.
As there is no good reason to maintain our own library in this case, we'd like
to replace "lib/state.js" with the original library that it was influenced by.

Please identify the original library and refactor the code to use that library instead
of our incomplete and untested version.

### WEB-301: Optimize the view rendering------------done
For this particular task, i choosed Incremental dom library, though this is my first time i am 
using this library Incremental DOM is a library for expressing and applying updates to DOM trees. JavaScript can be used to extract, iterate over and transform data into calls generating HTMLElements and Text nodes. It differs from Virtual DOM approaches in that a diff operation is performed incrementally (that is one node at a time) against the DOM, rather than on a virtual DOM tree.

Rather than targeting direct usage, Incremental DOM aims to provide a platform for higher level libraries or frameworks and yes i learned a new technology by doing this case study.

### WEB-303: Improve developer experience--------------done

We've noticed that our developers are not as productive as they could be due to the
need to constantly reload the page and having to wait for the webpack watcher to finish.
We believe that by using the webpack dev server, they could be more productive.

Please adjust all necessary parts of the application so that they're able to use
the webpack-dev-server and ideally enable hot reloading for at least the CSS.
