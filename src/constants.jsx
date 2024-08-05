export const jsQuizz = {
  questions: [
    {
      question: " 1.What is the primary function of the render() method in a React component?",
      choices: ["A) To update the component’s state", "B) To return a React element describing how the UI should look", "C) To handle user input", "D) To set up event listeners"],
      type: "MCQs",
      correctAnswer: "B) To return a React element describing how the UI should look",
    },
    {
      question: "2. Which lifecycle method is called after a component is first rendered to the DOM?",
      choices: ["A) componentDidUpdate", "B) componentWillUnmount", "C) componentDidMount", "D) shouldComponentUpdate"],
      type: "MCQs",
      correctAnswer: "C) componentDidMount",
    },
    {
      question: "3. How do you create a new React component?",
      choices: ["A) By extending the React.Component class", "B) By calling React.createComponent()", "C) By using the createReactClass() function", "D) By invoking React.createElement()"],
      type: "MCQs",
      correctAnswer: "A) By extending the React.Component class",
    },
    {
      question: "4. What is the purpose of props in a React component?",
      choices: ["A) To manage the component's state", "B) To configure the component’s behavior", "C) To pass data from a parent component to a child component", "D) To control the component’s lifecycle"],
      type: "MCQs",
      correctAnswer: "C) To pass data from a parent component to a child component",
    },
    {
      question: "5. How do you handle events in React?",
      choices: ["A) Using traditional HTML event handlers", "B) By adding event listeners directly to the DOM", "C) By passing a function to an event handler prop", "D) By using jQuery event methods"],
      type: "MCQs",
      correctAnswer: " C) By passing a function to an event handler prop",
    },
    {
      question: "6. What is the useState hook used for in a functional component?",
      choices: ["A) To manage local state in a functional component", "B) To access lifecycle methods", "C) To perform side effects", "D) To create context"],
      type: "MCQs",
      correctAnswer: "A) To manage local state in a functional component",
    },
    {
      question: "7. What does JSX stand for?",
      choices: ["A) JavaScript XML", "B) JavaScript Extension", "C) JavaScript Syntax Extension", "D) JavaScript eXtended"],
      type: "MCQs",
      correctAnswer: "A) JavaScript XML",
    },
    {
      question: "8. Which method is used to update the state in a class component?",
      choices: ["A) setState()", "B) updateState()", "C) modifyState()", "D) changeState()"],
      type: "MCQs",
      correctAnswer: "A) setState()",
    },
    {
      question: "9. How do you pass data from a parent component to a child component?",
      choices: ["A) Using state", "B) Using props", "C) Using context", "D) Using refs"],
      type: "MCQs",
      correctAnswer: "B) Using props",
    },
    {
      question: "10. What does the key prop do in a list of React elements?",
      choices: ["A) Identifies each element uniquely to help React identify which items have changed", "B) Stores the value of the item", "C) Sets the CSS class of the item", "D) Defines the event handler for the item"],
      type: "MCQs",
      correctAnswer: "A) Identifies each element uniquely to help React identify which items have changed",
    },
    {
      question: "11. How can you optimize performance in a React application?",
      choices: ["A) By using the forceUpdate() method", "B) By avoiding the use of functional components", "C) By using PureComponent and React.memo", "D) By increasing the number of components"],
      type: "MCQs",
      correctAnswer: "C) By using PureComponent and React.memo",
    },
    {
      question: "12. What is ReactDOM.render() used for?",
      choices: ["A) To create a new React component", "B) To mount a React component to a DOM node", "C) To update the state of a React component", "D) To handle events in React"],
      type: "MCQs",
      correctAnswer: "B) To mount a React component to a DOM node",
    },
    {
      question: "13. How can you share data between components without passing props?",
      choices: ["A) By using refs", "B) By using the context API", "C) By using local storage", "D) By directly modifying the DOM"],
      type: "MCQs",
      correctAnswer: "B) By using the context API",
    },
    {
      question: "14. What is the difference between controlled and uncontrolled components?",
      choices: ["A) Controlled components use state to manage their values, while uncontrolled components do not", "B) Controlled components have no user input, while uncontrolled components do", "C) Controlled components are managed by context, while uncontrolled components are managed by props", "D) Controlled components are functional, while uncontrolled components are class-based"],
      type: "MCQs",
      correctAnswer: "A) Controlled components use state to manage their values, while uncontrolled components do not",
    },
    {
      question: "15. What is the purpose of the useEffect hook in a functional component?",
      choices: ["A) To manage the component's state", " B) To perform side effects in function components", "C) To create a new component", "D) To handle component lifecycle methods"],
      type: "MCQs",
      correctAnswer: "B) To perform side effects in function components",
    },
  ],
}
export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
}
