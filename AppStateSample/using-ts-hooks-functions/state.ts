/* TYPES */

export interface IState {
    clicks: number;
}

enum ActionType {
    IncrementClicks,
};

export interface IAction {
    type: ActionType;
}

/* REDUCER */

export const defaultState: IState = {
    clicks: 0,
};

export const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionType.IncrementClicks:
            return {
                ...state,
                clicks: state.clicks + 1
            };
        
        default:
            throw `No known handler for action payload: ${JSON.stringify(action)}`;
    }
};

/* ACTIONS */

export const incrementClicks: IAction = {
    type: ActionType.IncrementClicks,
};