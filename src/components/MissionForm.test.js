import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/react'
import MissionForm from './MissionForm'

test('MissionForm renders correctly w/o errs', () => {
    render(<MissionForm />)
})

//does comp render when isFetchingData true?
test('render msg if isFetchingData true', () => {
    render(<MissionForm isFetchingData={true} />)
    const item = screen.queryByText(/we fetch data/i)
    expect(item).not.toBeNull()
    expect(item).toBeInTheDocument()
})

//does comp render when isFetchingData false?
test('render button if isFetchingData false', ()=> {
    render(<MissionForm isFetchingData={false}/>)
    const item = screen.queryByRole(/button/i)
    expect(item).toBeInTheDocument()
})

//when data, getData execute?
test('calls getData when button clicked', ()=> {
    const fakeGetData = jest.fn( ()=>{
        return('this is fake data')
    })
    render(<MissionForm isFetchingData={false} 
                        getData={fakeGetData} />) //mock=fake func
    const button = screen.getByRole(/button/i)
    userEvent.click(button)
    userEvent.click(button)

    // console.log(fakeGetData.mock)
    expect(fakeGetData.mock.calls.length).toBe(1)
    expect(fakeGetData.mock.calls).toHaveLength(1)
    expect(fakeGetData).toHaveBeenCalled()
    expect(fakeGetData).toHaveBeenCalledTimes(1)

})

