import {TableCell, TableHead, TableRow} from "@material-ui/core";
import React from "react";


export const TableHeader = (props: any) => {



    return <TableHead>
        <TableRow>
            <TableCell key='name'>
                DoctorName
            </TableCell>

            <TableCell key='wt'>
                Work time
            </TableCell>
        </TableRow>
    </TableHead>
}