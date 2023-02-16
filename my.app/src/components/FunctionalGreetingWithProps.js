import React from 'react';

// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
     return <h1>Hello {props.name}, {props.greeting}! You're short for being {props.age} years old! </h1>;
}
export default FunctionalGreetingWithProps;