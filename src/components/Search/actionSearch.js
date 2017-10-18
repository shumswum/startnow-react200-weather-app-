export const types = {
    NEW_CALL: 'NEW_CALL_FULFILLED',
    NEW_INPUT: 'NEW_INPUT'
}


export function updateNewCall(data) {
    return {
        type: 'NEW_CALL_FULFILLED',
        payload: data
    };
}

export function updateInput(input) {
    return {
        type: 'NEW_INPUT',
        payload: input
    };
}