import React from 'react';
import {Route, Routes} from 'react-router-dom';
import GameContainer from './Components/Game/GameContainer';
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
                        <Route path="/game" element={<GameContainer/>}/>
                        <Route path="/newgame" element={<GameCreatorContainer/>}/>
                    </Routes>
                </div>
                <Nav/>
            </div>
    )
}