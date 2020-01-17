import * as React from 'react';
import { reducer, defaultState, IState, IAction } from './state';

export const StateContext = React.createContext<IState>(null);
export const DispatchContext = React.createContext<React.Dispatch<IAction>>(null);

const App: React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, defaultState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {/* place top-level app container/components here */}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};

export default App;