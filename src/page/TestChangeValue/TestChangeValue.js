import React from "react";

class TestChangeValue extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            btnClick: 'left'
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
        return (
            <div>
                <h3>Your Number is</h3>
                <div>
                    <button onClick={this.changeClick('left')}>Left</button>
                    <button onClick={this.changeClick('right')}>Right</button>
                </div>
            </div>
        )
    }
}

export default TestChangeValue;