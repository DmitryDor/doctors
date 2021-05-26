import {Dispatch} from "redux";
import {EmployeesType} from "../api/mock-fetch";
import {getEmployees} from "../api/api";


export type DoctorType = {
    id: number
    fio: string
    birthDate: string
}

const initialState: Array<DoctorType> = []

export const doctorsReducer = (state: Array<DoctorType> = initialState, action: ActionsType): Array<DoctorType> => {
    switch (action.type) {
        case "SET-EMPLOEES":
           return  action.employees.map(el => {
                return {
                    id: el.id,
                    fio: `${el.lastName} ${el.firstName} ${el.middleName}`,
                    birthDate: el.birthDate
                }
            })


        default:
            return state;
    }
}

//AC


export const setEmployeesAC = (employees: EmployeesType) => ({
    type: 'SET-EMPLOEES', employees
} as const)


//TC

export const setDoctorsTC = () => (dispatch: Dispatch<ActionsType>) => {

    getEmployees().then((res: any) => {
        dispatch(setEmployeesAC(res))
    })
   /* todolistAPI.getTodolist()
        .then(res => {
                debugger
                dispatch(setTodolistsAC(res.data))
                dispatch(setAppStatusAC('idle'))
            }
        )
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })*/
}


// types





export type ActionsType = ReturnType<typeof setEmployeesAC>


