import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GameCreator from './GameCreator'

let data = {
  availablePieces: ['Mocker', 'Bram Stocker'],
  users: [{
    id: 1,
    name: "James Belascos",
    tag: false
    }, {
    id: 2,
    name: "Robert California",
    tag: false
}]

}

describe('GameCreator Component', ()=> {

  test("if no data, don't render", () => {
    render(<GameCreator/>);
    expect(screen.getByText(/sorry, something is wrong with the state/gi)).toBeInTheDocument();
  });

  test('if no players, renders', () => {
    render(<GameCreator availablePieces={data.availablePieces} users={[]}/>);
    expect(screen.getByText(/mocker/gi)).toBeInTheDocument();
    expect(screen.getByText(/Bram Stocker/gi)).toBeInTheDocument();
  }) 
  
  test('renders with all data', () => {
    render(<GameCreator availablePieces={data.availablePieces} users={data.users}/>);
    expect(screen.getByText(/James Belasco/gi)).toBeInTheDocument();
    expect(screen.getByText(/Robert California/gi)).toBeInTheDocument();
  }) 
})