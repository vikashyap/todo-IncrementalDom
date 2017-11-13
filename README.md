# Case Study: Extend a simple list application

Welcome to  Todo List application! 

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
## The tasks


### WEB-103: Add status filtering test

As a user, I want the option to hide todo items that I am not interested in based
on their status.

The feature should be implemented as a feature test (similar to "renderBottom") and
should be called "filter".

Implement a filter bar at the bottom of the list which contains three radio buttons:

- Show all (enabled by default)
- Show open
- Show closed

Those radio buttons are supposed to be mutually exclusive so that only one of them
can be selected at any given time.

If "Show open" is selected, only todo items whose `done` state is `false` should
be displayed in the list.

If "Show closed" is selected, only todo items whose `done` state is `true` should
be displayed in the list.

### WEB-104: Filter position test

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

### WEB-301: Optimize the view rendering
For this particular task, i choosed Incremental dom library, though this is my first time i am 
using this library Incremental DOM is a library for expressing and applying updates to DOM trees. JavaScript can be used to extract, iterate over and transform data into calls generating HTMLElements and Text nodes. It differs from Virtual DOM approaches in that a diff operation is performed incrementally (that is one node at a time) against the DOM, rather than on a virtual DOM tree.

Rather than targeting direct usage, Incremental DOM aims to provide a platform for higher level libraries or frameworks and yes i learned a new technology by doing this case task.
