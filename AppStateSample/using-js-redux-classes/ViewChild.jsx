import * as React from 'react';
import { connect } from 'react-redux';

class ViewChild extends React.Component {
    render() {
        return (
            <div>
                <h1>Number of clicks: {this.props.clicks}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clicks: state.clicks
    };
};

export default connect(mapStateToProps)(ViewChild);