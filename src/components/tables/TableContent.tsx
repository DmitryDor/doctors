import {TableCell, TableContainer, TableRow} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import {TableHeader} from "./TableHeader";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DoctorType, setDoctorsTC} from "../../store/doctorsReducer";
import {AppRootStateType, store} from "../../store/store";



/*const rowInformation = [
    {
        id: 1,
        firstName: "Леонид",
        lastName: "Старокадомский",
        middleName: "Михайлович",
        birthDate: "1875-03-27",
        phone: "+79975669545"
    },
    {
        id: 2,
        firstName: "Владимир",
        lastName: "Демихов",
        middleName: "Петрович",
        birthDate: "1916-06-18",
        phone: "+74951263366"
    },
    {
        id: 3,
        firstName: "Виктор",
        lastName: "Калнберз",
        middleName: "Константинович",
        birthDate: "1928-06-02",
        phone: "+37156698963"
    },
    {
        id: 4,
        firstName: "Алоис",
        lastName: "Альцгеймер",
        middleName: "Эдуардович",
        birthDate: "1864-06-14",
        phone: "+15559665599"
    }
]*/

export const TableContent = () => {

    const dispatch = useDispatch()
    const rowInformation = useSelector<AppRootStateType, Array<DoctorType>>(state => state.doctors)

    useEffect(() => {
        dispatch(setDoctorsTC())
    }, [])

    const [orderDirection, setOrderDirection] = useState('asc')
    const [valueToOrderBy, setValueToOrderBy] = useState('fio')
    const [page, setPage] = useState(0)
    const [roesPerPage, setRoesPerPage] = useState(1)

    function descendingComparator(a: any, b: any, orderBy: any) {
        debugger
        if (b[orderBy] < a[orderBy]) {
            return -1
        }
        if (b[orderBy] > a[orderBy]) {
            return 1
        }
        return 0
    }

    function getComparator(order: any, orderBy: any) {
        debugger
        return order === 'desc'
            ? (a: any, b: any) => descendingComparator(a, b, orderBy)
            : (a: any, b: any) => -descendingComparator(a, b, orderBy)
    }

    const sortedRowInformation = (rowArray: any, comparator: any) => {
        debugger
        //@ts-ignore
        const stabilizedRowArray = rowArray.map((el, index) => [el, index])
        stabilizedRowArray.sort((a: any, b: any) => {
            const order = comparator(a[0], b[0])
            if (order !== 0) return order
            return a[1] - b[1]
        })
        //@ts-ignore
        return stabilizedRowArray.map(el => el[0])
    }

    const handleRequestSort = (property: any, event: any,) => {

        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHeader
                        orderDirection={orderDirection}
                        valueToOrderBy={valueToOrderBy}
                        handleRequestSort={handleRequestSort}
                    />

                    {
                        sortedRowInformation(rowInformation, getComparator(orderDirection, valueToOrderBy))
                            //@ts-ignore
                            .map(el => (
                                <TableRow key={el.id}>
                                    <TableCell>
                                        {el.id}
                                    </TableCell>
                                    <TableCell>
                                        {el.fio}
                                    </TableCell>
                                    <TableCell>
                                        {el.birthDate}
                                    </TableCell>
                                </TableRow>
                            ))
                    }
                </Table>
            </TableContainer>
        </>
    )
}