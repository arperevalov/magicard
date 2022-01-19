import React from 'react';

let Home = () => {
    return <div className="home">
        <div className="period">
            <span className="date">This month</span>
            <ul className="games">
                <li><a href="/" className="game">
                    <span className="game__title">Game Title</span>
                    <div><span className="game__param">Players</span><div className="game__playersList">1, 2, 3</div></div>
                    <div><span className="game__param">Total time</span><div className="game__time">35 mins</div></div>
                    <div><span className="game__param">Winner</span><div className="game__winner">35 mins</div></div>
                    </a></li>
                <li><a href="/game" className="game">
                    <span className="game__title">Game Title</span>
                    <div><span className="game__param">Players</span><div className="game__playersList">1, 2, 3</div></div>
                    <div><span className="game__param">Total time</span><div className="game__time">35 mins</div></div>
                    <div><span className="game__param">Winner</span><div className="game__winner">35 mins</div></div>
                    </a></li>
                <li><a href="#" className="game">
                    <span className="game__title">Game Title</span>
                    <div><span className="game__param">Players</span><div className="game__playersList">1, 2, 3</div></div>
                    <div><span className="game__param">Total time</span><div className="game__time">35 mins</div></div>
                    <div><span className="game__param">Winner</span><div className="game__winner">35 mins</div></div>
                    </a></li>
                <li><a href="#" className="game">
                    <span className="game__title">Game Title</span>
                    <div><span className="game__param">Players</span><div className="game__playersList">1, 2, 3</div></div>
                    <div><span className="game__param">Total time</span><div className="game__time">35 mins</div></div>
                    <div><span className="game__param">Winner</span><div className="game__winner">35 mins</div></div>
                    </a></li>
            </ul>
        </div>
    </div>
};

export default Home