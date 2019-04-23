export const SOME_ACTION = "SOME_ACTION"

export const someAction = someThing => { 
    return { 
        type: SOME_ACTION,
        payload: someThing
    }
}