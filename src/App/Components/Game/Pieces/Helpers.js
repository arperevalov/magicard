import React from 'react';
import Header from './components/Header';

let Helpers = (props) => {
    return <div className='piece piece__helpers' id='helpers'>
        <Header title='Helpers'/>
        <div className='content'>
            <div className='helpers'>
            <a className='helper h2' href='#'> <div className='helper__icon'><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.28355 1.12899C4.08351 1.21672 2.15601 2.62878 1.40905 4.69999C1.38898 4.7559 1.33234 4.78997 1.27355 4.78149L0.429048 4.65449C0.334738 4.6424 0.241457 4.68336 0.186548 4.76099C0.132623 4.84003 0.128546 4.94293 0.176048 5.02599L1.51555 7.37599C1.55412 7.44345 1.62186 7.48914 1.69886 7.49962C1.77586 7.5101 1.85335 7.48419 1.90855 7.42949L3.79355 5.55649C3.86087 5.48984 3.88474 5.39087 3.85519 5.30086C3.82565 5.21085 3.74777 5.14528 3.65405 5.13149L2.79655 5.00349C2.75773 4.99784 2.72381 4.9743 2.70494 4.93991C2.68608 4.90552 2.68445 4.86426 2.70055 4.82849C3.52496 2.96197 5.58903 1.9774 7.55842 2.51126C9.52782 3.04513 10.8121 4.93735 10.5809 6.96469C10.3498 8.99204 8.67257 10.5466 6.63355 10.6235C6.41026 10.6275 6.20607 10.7503 6.09791 10.9457C5.98974 11.1411 5.99403 11.3794 6.10916 11.5707C6.22428 11.7621 6.43276 11.8775 6.65605 11.8735H6.67955C8.60702 11.8143 10.3551 10.7273 11.2606 9.02473C12.1662 7.32218 12.0903 5.26503 11.0619 3.63377C10.0335 2.0025 8.21014 1.04708 6.28355 1.12999V1.12899Z" fill="#393939"/>
</svg></div>
Actions History</a>
            <a className='helper h2' href='#'> <div className='helper__icon'><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3C1.5 2.44772 1.94772 2 2.5 2H9.5C10.0523 2 10.5 2.44772 10.5 3V3C10.5 3.55228 10.0523 4 9.5 4H2.5C1.94772 4 1.5 3.55228 1.5 3V3Z" fill="#393939"/>
<path d="M1.5 6.5C1.5 5.94772 1.94772 5.5 2.5 5.5H9.5C10.0523 5.5 10.5 5.94772 10.5 6.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H2.5C1.94772 7.5 1.5 7.05228 1.5 6.5V6.5Z" fill="#393939"/>
<path d="M1.5 10C1.5 9.44772 1.94772 9 2.5 9H9.5C10.0523 9 10.5 9.44772 10.5 10V10C10.5 10.5523 10.0523 11 9.5 11H2.5C1.94772 11 1.5 10.5523 1.5 10V10Z" fill="#393939"/>
</svg>
</div>
                Game Rules</a>
            <a className='helper h2' href='#'> <div className='helper__icon'><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6 0.5C5.58579 0.5 5.25 0.835786 5.25 1.25V5.75H0.75C0.335787 5.75 0 6.08579 0 6.5C0 6.91421 0.335786 7.25 0.75 7.25H5.25V11.75C5.25 12.1642 5.58579 12.5 6 12.5C6.41421 12.5 6.75 12.1642 6.75 11.75V7.25H11.25C11.6642 7.25 12 6.91421 12 6.5C12 6.08579 11.6642 5.75 11.25 5.75H6.75V1.25C6.75 0.835786 6.41421 0.5 6 0.5Z" fill="#393939"/>
</svg></div>
                Add new players</a>
            <a className='helper h2' href='#'> <div className='helper__icon'><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6 0.5C5.58579 0.5 5.25 0.835786 5.25 1.25V5.75H0.75C0.335787 5.75 0 6.08579 0 6.5C0 6.91421 0.335786 7.25 0.75 7.25H5.25V11.75C5.25 12.1642 5.58579 12.5 6 12.5C6.41421 12.5 6.75 12.1642 6.75 11.75V7.25H11.25C11.6642 7.25 12 6.91421 12 6.5C12 6.08579 11.6642 5.75 11.25 5.75H6.75V1.25C6.75 0.835786 6.41421 0.5 6 0.5Z" fill="#393939"/>
</svg></div>
                Add tool</a>
            </div>
            <div className='info'>
                
                <div className='info__item'>
                    <span className='title'>Rounds</span>
                    <span className='value'>{props.rounds}</span>
                </div>

                <div className='info__item'>
                    <span className='title'>Turns</span>
                    <span className='value'>{props.turns}</span>
                </div>
                <div className='info__item'>
                    <span className='title'>Total time</span>
                    <span className='value'>49 mins</span>
                </div>
                
                <div className='info__item'>
                    <span className='title'>Game time</span>
                    <span className='value'>35 mins</span>
                </div>
            </div>
        </div>
    </div>
}

export default Helpers