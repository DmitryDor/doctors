import {TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";
import React from "react";


export const TableHeader = (props: any) => {

    const {orderDirection, valueToOrderBy, handleRequestSort} = props

    const createSortHandler = (property: any) => (event: any) => {
        handleRequestSort(property, event)
    }
    return <TableHead>
        <TableRow>
            <TableCell key='id'>
                ID
            </TableCell>

            <TableCell key='fio'>
                <TableSortLabel
                    active={valueToOrderBy === 'fio'}
                    direction={valueToOrderBy === "fio" ? orderDirection : 'asc'}
                    onClick={createSortHandler('fio')}
                >
                    ФИО
                </TableSortLabel>
            </TableCell>

            <TableCell key='dr'>
                Дата рождения
            </TableCell>
        </TableRow>
    </TableHead>
}