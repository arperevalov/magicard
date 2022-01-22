import React from 'react';
import SettingsBtn from './SettingsBtn';

let Header = (props) => {
    return <div className='header'>
        <h2 className='h2'>
            {props.title}
        </h2>
        <SettingsBtn/>
    </div>
}

export default Header