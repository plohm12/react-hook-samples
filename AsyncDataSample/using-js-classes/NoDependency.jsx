import * as React from 'react';
import { asyncAction } from './action';

class NoDependency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        const loadData = async () => {
            let responseData = await asyncAction();
            this.setState({
                data: responseData
            });
        };
        loadData();
    }

    render() {
        return (
            <div>{this.state.data}</div>
        );
    }
}

export default NoDependency;