import * as React from 'react';
import { asyncAction } from './action';

class WithDependency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.loadData = this.loadData.bind(this);
    }

    loadData = async () => {
        let responseData = await asyncAction(this.props.dataId);
        this.setState({
            data: responseData
        });
    };

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.dataId !== this.props.dataId) {
            this.loadData();
        }
    }

    render() {
        return (
            <div>{this.state.data}</div>
        );
    }
}

export default WithDependency;