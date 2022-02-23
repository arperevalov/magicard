import React from 'react';
import { render, screen } from '@testing-library/react'
import Scoreboard from './Scoreboard'
import {mapDispatchToProps} from './ScoreboardContainer'


let data = {
    users: [{
        id: 1,
        name: "James Belascos",
        tag: false,
        params: {roads: 2288,
            villages: 0,
            cities: 0,
            warriors: 0}
        }, {
        id: 2,
        name: "Robert California",
        tag: false,
        params: {roads: 132,
            villages: 0,
            cities: 0,
            warriors: 0}
    }],
    currentPlayer: 0
}

describe('Scoreboard Component', ()=> {

  test('renders', () => {
    render(<Scoreboard users={data.users} params={mapDispatchToProps().params}/>);
    expect(screen.getByText(/James Belascos/gi)).toBeInTheDocument();
    expect(screen.getByText(/2288/gi)).toBeInTheDocument();
  }) 
})