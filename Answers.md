# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JS library that helps address the expensive nature of updating the DOM. React introduces the virtual DOM which becomes what is reconciled against the actual DOM. Instead of updating the DOM directly, which re-renders every part of an application regardless if it changes or not, with React you update the virtual DOM which then communicates with DOM and re-renders ONLY the parts of the application that change. 

1. What does it mean to think in react?

To think in React means to emphasis composability and to break things into parts whenever necessary. This helps tremendously when building large applications because you create many reusable components that can easily be tailored given a new setting. It also helps with debugging since most errors will be able to traced back to a single component.

1. Describe state.

State is an object that details the parts of a component/application that may change given some event or new data. When the state object changes, a re-render of the application in needed.

1. Describe props.

Props are arguments of a component that appear, and are passed to children, as attributes of a JSX element. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are used to affect thing outside the scope of a function or access data that lives outside the scope of the function, making it well suited for asynchronous functions and bypassing the virtual DOM to update the DOM. To sync a side effect with a change inside the scope of the function (state or prop of a component), you can use a React effect hook which has a second parameter exactly for specifying changes to which props, part of state, or state in general require the use of a particular side effect.