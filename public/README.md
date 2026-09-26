1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript or TypeScript. It is used in React because it makes UI code easier to read and write.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update data in a React component. In this project, I used it to store the selected technologies in the stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to handle side effects such as data fetching. However, in this project I did not use useEffect. I loaded the JSON data using fetch(), a Promise, React use(), and Suspense.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item correctly when items are added, removed, or updated.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it to show the empty stack message when no technology is selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from parent to child using props. A child can communicate back to the parent by calling a function passed through props.