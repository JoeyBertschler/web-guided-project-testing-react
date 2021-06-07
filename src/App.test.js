import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

import { fetchMissions as mockFetchMissions }
from './api/fetchMissions'
jest.mock('./api/fetchMissions')

mockFetchMissions.mockResolvedValueOnce({
    data: 
    [
        {
        mission_name: "Mission1", 
        mission_id: "mission_id_1",
        },
        {
        mission_name: "Mission2",
        mission_id: "mission_id_2"
        }

    ]
})

test('render App', () => {
    render(<App/>)
})

test('renders mission data when btn clckd'
, async ()=> {
    //arrange: render app
    render(<App/>)
    //act: get data from api
    const button = screen.getByRole('button')
    userEvent.click(button)
    //assert: shld see arr of 10 msns
    await waitFor( () => {
        expect(screen
            .getAllByTestId('mission'))
            .toHaveLength(2)
    })
})