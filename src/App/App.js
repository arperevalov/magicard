import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Game from './Components/Game/Game';
import Header from './components/Header';
import Home from './Components/Home';
import Nav from './Components/Nav';



export default function App(props) {
    
    return (
            <div className='container'>
                <Header/>
                <div className='inpage'>
                    <Routes>
                        <Route exact path={"/"} element={<Home/>}/>
                        <Route path="/game" element={<Game store={props.store.getState()} dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
                <Nav/>
            </div>
    )
}