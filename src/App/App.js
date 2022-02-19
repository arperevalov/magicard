import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Game from './Components/Game/Game';
import GameCreatorContainer from './Components/GameCreator/GameCreatorContainer';
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
                        <Route path="/game" element={<Game/>}/>
                        <Route path="/newgame" element={<GameCreatorContainer/>}/>
                    </Routes>
                </div>
                <Nav/>
            </div>
    )
}