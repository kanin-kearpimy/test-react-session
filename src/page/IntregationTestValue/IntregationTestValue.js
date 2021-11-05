import React from "react";
import SaveFullNameApi from "../../api/saveFullNameAPI";

class IntregationTestValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    fetchName = async () => {
        const { firstName, lastName } = await SaveFullNameApi.fetch();
        this.setState((prevState) => {
            return {
                ...prevState,
                firstName: firstName,
                lastName: lastName
            }
        })
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <div>
                <button onClick={() => this.fetchName()}>Fetch Data</button>
                <h4>Hello {firstName} {lastName}</h4>
            </div>
        )
    }
}

export default IntregationTestValue