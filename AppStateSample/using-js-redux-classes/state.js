/* REDUCER */

const defaultState = {
    clicks: 0,
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT_CLICKS:
            return {
                ...state,
                clicks: state.clicks + 1,
            };

        default:
            throw `No known handler for action payload: ${JSON.stringify(action)}`;
    }  
};

/* ACTIONS */

const INCREMENT_CLICKS = 'INCREMENT_CLICKS';
export const incrementClicks = {
    type: INCREMENT_CLICKS,
};