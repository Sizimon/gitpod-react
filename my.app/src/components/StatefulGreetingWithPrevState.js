import React from 'react';

class StatefulGreetingWithPrevState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello!',
            buttonText: 'Exit',
            counter: 0
        };
    };

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State', prevState)
            console.log('Previous Properties', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        });
    };

    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State', prevState)
            console.log('Previous Properties', prevProps)
            return {
                counter: prevState.counter + 1
            }
        })
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render () {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
                <button onClick={() => this.increment()}>
                    Increment
                </button>
                <p>You've clicked {this.state.counter} times.</p>
            </div>
        )
    };
};

export default StatefulGreetingWithPrevState