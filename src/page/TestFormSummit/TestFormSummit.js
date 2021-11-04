import React from "react";
import SaveFullNameApi from "../../api/saveFullNameAPI";

class TestFormSummit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    handleChangeFor = (fieldName, value) => {
        this.setState({ [fieldName]: value });
    }

    onSubmit = async (event) => {
        const data = this.state;
        
        event.preventDefault();
        
        try {
            SaveFullNameApi.save(data)
        } catch{
            console.log('Error')
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <label>
                        First Name:
                        <input type="text" onChange={(event) => this.handleChangeFor('firstName', event.target.value)} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" onChange={(event) => this.handleChangeFor('lastName', event.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default TestFormSummit;