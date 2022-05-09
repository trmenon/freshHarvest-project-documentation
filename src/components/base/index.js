import React from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import {Gate, Docs } from '../lib';
import { ProfileWidget, LaunchWidget} from '../widgets';

function FreshHarvest(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="freshHarvest-project-documentation/" element={<Gate/> }/>
                <Route path="freshHarvest-project-documentation/docs" element={<Docs/>}>
                    <Route path="profile" element={<ProfileWidget/>}/>
                    <Route path="launch" element={<LaunchWidget/>}/>
                </Route>
            </Routes>        
        </BrowserRouter>
    );
}


export default FreshHarvest;