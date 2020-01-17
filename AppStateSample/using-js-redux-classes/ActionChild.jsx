import * as React from 'react';
import { connect } from 'react-redux';
import { incrementClicks } from './state';

class ActionChild extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.incrementClicks()}>Click me!</button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    incrementClicks,
};

export default connect(null, mapDispatchToProps)(ActionChild);