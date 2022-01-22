import React from 'react';
import Avatar from './Avatar';

function NameToLetters(name) {

    let newname = name.split('');
    return newname[0].toUpperCase()
}

let userTag = (tag) => {
    if (tag) {
        return <span className='user__tag'>{tag}</span>
    } else {
        return false
    }
}

let userPoints = (points) => {
    if (points) {
        return <span className='user__points'>{points}</span>
    } else {
        return false
    }
}

let User = (props) => {
    return <div className='user'>
        <div className='user__info'>
            <Avatar letter={NameToLetters(props.name)}/>
            <span className='user__name'>
                {props.name}
            </span>
            {userTag(props.tag)}
        </div>
        {userPoints(props.points)}
    </div>
}

export default User