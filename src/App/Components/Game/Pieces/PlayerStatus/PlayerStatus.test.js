import React from 'react';
import { render, screen } from '@testing-library/react'
import PlayerStatus from './PlayerStatus';


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

describe('PlayerStatus Component', ()=> {

  test('renders', () => {
    render(<PlayerStatus users={data.users} currentPlayer={data.currentPlayer}/>);
    expect(screen.getByText(/James Belascos/gi)).toBeInTheDocument();
    expect(screen.getByText(/roads/gi)).toBeInTheDocument();
    expect(document.querySelector('input').value).toBe('2288');
  }) 
})