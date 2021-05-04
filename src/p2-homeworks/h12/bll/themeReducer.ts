const initState = {
theme:''
};
export type initialStateType={
    theme:string
}
export type actionTypes=ReturnType<typeof changeThemeAC>

const CHANGETHEME='changetheme'

export const themeReducer = (state = initState, action: actionTypes): initialStateType => { // fix any
    switch (action.type) {
        case CHANGETHEME: {
            return {...state,theme:action.theme};
        }
        default: return state;
    }
};

export const changeThemeAC = (theme:string)=> ({type:CHANGETHEME,theme}); // fix any
