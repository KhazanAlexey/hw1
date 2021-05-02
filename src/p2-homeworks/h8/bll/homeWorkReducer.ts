import {Statetype, UserType} from "../HW8";


const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]
type ActionType={type: 'sort', payload: 'up'}|{type: 'sort', payload: 'down'}|{type: 'check', payload: number}

export const homeWorkReducer = (state: Statetype, action: ActionType): Statetype => { // need to fix any
    switch (action.type) {
        case 'sort': {
           let statecop=[...state]
            state=statecop.sort(function (a:UserType,b:UserType){
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA < nameB) //сортируем строки по возрастанию
                    return -1
                if (nameA > nameB)
                    return 1
                return 0 // Никакой сортировки


            })
            return action.payload==='up'?state: state.reverse()
        }
        case 'check': {
            let filtered=state.filter(p=> p.age>=action.payload)
            return filtered
        }
        default: return state
    }
}