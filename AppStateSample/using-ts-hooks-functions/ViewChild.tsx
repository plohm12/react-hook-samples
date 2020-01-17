import * as React from 'react';
import { StateContext } from './App';

const ViewChild: React.FC = () => {
    const state = React.useContext(StateContext);

    return (
        <div>
            <h1>Number of clicks: {state.clicks}</h1>
        </div>
    );
};

export default ViewChild;