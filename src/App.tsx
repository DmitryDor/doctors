import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {EmployeesPage} from "./components/EmployeesPage";
import {WorklogPage} from "./components/WorklogPage";


export function App() {
    return (
        <div>
            <Route path={'/'} exact render={() => <EmployeesPage/>}/>
            <Route path={'/Worklog'} exact render={() => <WorklogPage/>}/>
        </div>
    );
}