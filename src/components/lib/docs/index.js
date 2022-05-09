import React from 'react';
import { NavigationBar} from '../../common';
import { Outlet} from 'react-router-dom';
import '../../../responsive/index.css';

function Docs() {    
    
    return (        
        <div className="min-vh-100">
            <NavigationBar/>
            <div className="content">  
                <Outlet/>
            </div>            
        </div>
    );
}


export default Docs;