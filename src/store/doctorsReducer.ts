import {Dispatch} from "redux";
import {EmployeesType} from "../api/mock-fetch";
import {getEmployees} from "../api/api";



const initialState: Array<DoctorType> = []

export const doctorsReducer = (state: Array<DoctorType> = initialState, action: ActionsType): Array<DoctorType> => {
    switch (action.type) {
        case "SET-EMPLOEES":
            return action.employees.map(el => {
                return {
                    id: el.id,
                    fio: `${el.lastName} ${el.firstName} ${el.middleName}`,
                    birthDate: el.birthDate.split('-').reverse().join('-')
                }
            })
        case "SET-WORKLOG":


        default:
            return state;
    }
}

//AC

export const setEmployeesAC = (employees: EmployeesType) => ({
    type: 'SET-EMPLOEES', employees
} as const)


export const setWorklogAC = (  ) => ({
    type: 'SET-WORKLOG'
} as const)


//TC

export const setDoctorsTC = () => (dispatch: Dispatch<ActionsType>) => {
    // + крутилка
    getEmployees().then((res: any) => {
        // сделать логику по массиву и передать в AC
        dispatch(setEmployeesAC(res))
            // - крутилку
    })
}


// types

export type DoctorType = {
    id: number
    fio: string
    birthDate: string
}

export type ActionsType = ReturnType<typeof setEmployeesAC> | ReturnType<typeof setWorklogAC>


