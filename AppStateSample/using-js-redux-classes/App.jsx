import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './state';

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                {/* place top-level app container/components here */}
            </Provider>
        );
    }
}

export default App;