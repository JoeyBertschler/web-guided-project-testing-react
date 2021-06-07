import React from 'react'
import { render, screen } from '@testing-library/react'
import MissionsList from './MissionsList'

const missions = [
    {mission: 'msn', missionNr: 1,
     mission: 'msn2', missionNr: 2}
]

test('renders', 
    ()=> 
        { render(<MissionsList missions={[]} />) 
        } 
)

test('renders change in mission list', ()=> {
    //act
    const {rerender} = render(<MissionsList missions={[]}/>) //rerender only to test sth
    //arrange
    let missionObjects = screen.queryAllByTestId('mission')
    //assert
    expect(missionObjects).toEqual([])
    expect(missionObjects).toHaveLength(0)
    
    rerender(<MissionsList missions={missions}/>)
    missionObjects = screen.queryAllByTestId('mission')
    expect(missionObjects).toHaveLength(2)
})
