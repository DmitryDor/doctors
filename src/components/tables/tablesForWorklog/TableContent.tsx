/*
import {TableCell, TableContainer, TableRow} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import {TableHeader} from "./TableHeader";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


import {NavLink} from "react-router-dom";


export const TableContent = () => {

    const dispatch = useDispatch()


    return (
        <>
            <TableContainer>
                <Table>
                    <TableHeader />

                    {

                            .map(el => (
                                <TableRow key={el.id}>
                                    <TableCell>
                                        {el.id}
                                    </TableCell>
                                    <TableCell>
                                        <NavLink to={'/Worklog'}>{el.fio}</NavLink>
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
}*/
export const a = 5