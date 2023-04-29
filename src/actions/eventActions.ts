import axios from "axios";
import { Dispatch } from "react";
import { Data, Event } from "../types/types";

//Actions
export const FETCH_EVENT_START = "FETCH_EVENT_START";
export const FETCH_EVENT_FAILURE = "FETCH_EVENT_FAILURE";
export const FETCH_EVENT_SUCESS = "FETCH_EVENT_SUCESS";

//Interfaces

export interface FetchEventStartAction {
    type: typeof FETCH_EVENT_START;
}

export interface FetchEventFailureAction {
    type: typeof FETCH_EVENT_FAILURE;
    payload: string;
}

export interface FetchEventSucessAction {
    type: typeof FETCH_EVENT_SUCESS;
    payload: Data[];
}

export type EventActionTypes = FetchEventStartAction | FetchEventFailureAction | FetchEventSucessAction;

//Action Creators
export const fetchEventStart = (): FetchEventStartAction => ({
    type: FETCH_EVENT_START
});

export const fetchEventSucess = (data: Data[]): FetchEventSucessAction => ({
    type: FETCH_EVENT_SUCESS,
    payload: data,
});

export const fetchEventFailure = (error: string): FetchEventFailureAction => ({
    type: FETCH_EVENT_FAILURE,
    payload: error,
});

export const fetchEventCa =  () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(fetchEventStart());
        try {
            const response = await axios.get<Data[]>('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=CA&apikey=1o7zShZObRbn5kxf017TEBOC3mhBXiqL');
            dispatch(fetchEventSucess(response.data));
            console.log(response.data, "FROM API");
        } catch (error: any) {
            dispatch(fetchEventFailure(error.message));
        }
    }
}


export const fetchEventUs =  () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(fetchEventStart());
        try {
            const response = await axios.get<Data[]>('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=1o7zShZObRbn5kxf017TEBOC3mhBXiqL');
            dispatch(fetchEventSucess(response.data));
            console.log(response.data, "FROM API");
        } catch (error: any) {
            dispatch(fetchEventFailure(error.message));
        }
    }
}


export const fetchEventDiscovery =  () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(fetchEventStart());
        try {
            const response = await axios.get<Data[]>('https://app.ticketmaster.com/discovery/v2/events.json?apikey=1o7zShZObRbn5kxf017TEBOC3mhBXiqL&size=4&page=1');
            dispatch(fetchEventSucess(response.data));
            console.log(response.data, "FROM API");
        } catch (error: any) {
            dispatch(fetchEventFailure(error.message));
        }
    }
}