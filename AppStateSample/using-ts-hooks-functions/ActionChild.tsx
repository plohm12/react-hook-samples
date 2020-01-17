import * as React from 'react';
import { DispatchContext } from './App';
import { incrementClicks } from './state';

const ActionChild: React.FC = () => {
    const dispatch = React.useContext(DispatchContext);

    return (
        <div>
            <button onClick={() => dispatch(incrementClicks)}>Click me!</button>
        </div>
    );
};

export default ActionChild;