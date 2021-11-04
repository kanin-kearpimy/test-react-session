import React from "react";

class TestChangeValue extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            btnClick: ''
        }
    }

    changeClick = (value) => {
        this.setState((state, props) => {
            return {
                btnClick: value
            }
        })
    }

    render () {
        const { btnClick } = this.state
        return (
            <div>
                <h3>Your Number is: {btnClick}</h3>
                <div>
                    <button onClick={() => this.changeClick('left')}>Left</button>
                    <button onClick={() => this.changeClick('right')}>Right</button>
                </div>
            </div>
        )
    }
}

export default TestChangeValue;