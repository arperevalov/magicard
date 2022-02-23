import React from 'react';
import { render, screen } from '@testing-library/react'
import Turner from './Turner'


let data = {
    rounds: 1,
    turns: 24,
    currentPlayer: 0,
    nextPlayer: 1,
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
    }, {
        id: 3,
        name: "Brondo Marlondo",
        tag: false,
        params: {roads: 132,
            villages: 0,
            cities: 0,
            warriors: 0}
    }],
}

describe('Turner Component', ()=> {

  test('renders', () => {
    render(<Turner rounds={data.rounds} turns={data.turns} currentPlayer={data.currentPlayer} nextPlayer={data.nextPlayer} users={data.users}/>);
    expect(screen.getByText(/1/gi)).toBeInTheDocument();
    expect(screen.getByText(/24/gi)).toBeInTheDocument();
    expect(screen.getByText(/James Belascos/gi)).toBeInTheDocument();
    expect(screen.getByText(/Robert California/gi)).toBeInTheDocument();
  }) 
})