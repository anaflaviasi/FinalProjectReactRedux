import { EventActionTypes, FETCH_EVENT_FAILURE, FETCH_EVENT_START, FETCH_EVENT_SUCESS } from "../actions/eventActions";
import { Data } from "../types/types";

export interface EventState {
    data: Data[];
    isLoading: boolean;
    isError: unknown
}

const initialState: EventState = {
    data: [],
    isLoading: false,
    isError: null

}

export function EventReducer(state = initialState, action: EventActionTypes): EventState {
    console.log("eventreducer", action);
    
    switch (action.type) {
        case FETCH_EVENT_START:
            return{
                ...state,
                isLoading: true
            };
        case FETCH_EVENT_SUCESS:
            console.log(action.payload, 'inside reducer');
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        case FETCH_EVENT_FAILURE:
            return{
                ...state,
                isLoading: false,
                isError: action.payload
            }    
        default:
            return state;
    }

} 