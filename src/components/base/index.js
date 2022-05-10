import React from "react";
import { BrowserRouter, Routes, Route, MemoryRouter } from 'react-router-dom';
import {Gate, Docs } from '../lib';
import { ProfileWidget, LaunchWidget} from '../widgets';

function FreshHarvest(){
    return (
        <MemoryRouter initialEntries={[""]}>
            <Routes>
                <Route path="/" element={<Gate/> }/>
                <Route path="/docs" element={<Docs/>}>
                    <Route path="profile" element={<ProfileWidget/>}/>
                    <Route path="launch" element={<LaunchWidget/>}/>
                </Route>
            </Routes>        
        </MemoryRouter>
    );
}


export default FreshHarvest;