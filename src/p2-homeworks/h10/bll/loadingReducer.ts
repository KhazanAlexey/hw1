
const initState = {
loading:false
}
type initStateType= {
    loading:boolean
}
const isfetching='isfetching'
type ActionsType=ReturnType<typeof fetchingAC>
export const fetchingAC=(state:boolean)=>({type:'isfetching',state})
export const loadingReducer = (state = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        case isfetching: {
            return  {...state,loading:action.state}

        }
        default: return state
    }
}

