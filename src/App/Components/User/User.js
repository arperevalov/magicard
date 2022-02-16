import React from 'react';
import Avatar from './Avatar';

let User = (props) => {

    function NameToLetters(name) {
        let newname = name.split('');
        return newname[0].toUpperCase()
    }

    let userTag = () => {
        if (props.user.tag) {
            return <span className='user__tag'>{props.user.tag}</span>
        } else {
            return false
        }
    }

    let userPoints = () => {
        if (props.points) {
            return <span className='user__points'>{props.points}</span>
        } else {
            return
        }
    }

    return <div className='user'>
        <div className='user__info'>
            <Avatar letter={NameToLetters(props.user.name)}/>
            <span className='user__name'>
                {props.user.name}
            </span>
            {userTag()}
        </div>
        {userPoints()}
    </div>
}

export default User