import React from 'react';
import { render, screen } from '@testing-library/react'
import GameCreator from './GameCreator'
import { MemoryRouter } from 'react-router-dom';

let data = {
  availablePieces: ['Mocker', 'Bramstocker'],
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

  test("if no data, renders", () => {
    render(<MemoryRouter>
      <GameCreator/>
    </MemoryRouter>);
    expect(screen.getByText(/sorry, something is wrong with pieces/gi)).toBeInTheDocument();
  });

  test('if no players, renders', () => {
    render(<MemoryRouter>
      <GameCreator availablePieces={data.availablePieces} users={[]}/>
    </MemoryRouter>);
    expect(screen.getByText(/mocker/gi)).toBeInTheDocument();
    expect(screen.getByText(/Bramstocker/gi)).toBeInTheDocument();
  }) 
  
  test('renders with all data', () => {
    render(<MemoryRouter>
      <GameCreator availablePieces={data.availablePieces} users={data.users}/>
    </MemoryRouter>);
    expect(screen.getByText(/James Belasco/gi)).toBeInTheDocument();
    expect(screen.getByText(/Robert California/gi)).toBeInTheDocument();
  }) 
})