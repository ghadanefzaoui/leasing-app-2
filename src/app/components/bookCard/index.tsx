import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { Button } from '../button'
import {Marginer} from '../marginer'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from '../responsive'


const CardContainer = styled.div`
min-height: 4.3em;
box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
animation: zoomIn 0.5s ease-out;
${tw`
flex
justify-center  
items-center 
rounded-md  
bg-white 
pt-1  
pb-1  
pr-2 
pl-2
md:pt-2  
md:pb-2 
md:pl-6 
md:pr-6
`}
`
const ItemContainer = styled.div`
position: relative;
${tw`flex`}
`
const Icon = styled.span`
${tw`
text-red-500
fill-current 
text-xs  
md:text-base  
mr-1  
md:mr-3  
`}
`
const SmallIcon = styled.span`
${tw`
text-gray-700  
fill-current  
text-xs  
md:text-base  
ml-1 
`}
`

const Name = styled.span`
${tw`
text-gray-600  
text-xs  
md:text-sm 
cursor-pointer
select-none
`}`

const LineSeparator = styled.span`
width: 2px;
height: 45%;
${tw`
bg-gray-300 
mr-2  
ml-2 
md:mr-5  
md:ml-5
`}
`
const DateCalendar = styled(Calendar)`
position: absolute;
max-width: none;
user-select: none;
top: 2em;
left: 0;

${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};

@media(min-width: ${SCREENS.md}){
top: 3.5em;
left: -2rem;
}
`as any;

export function BookCard() {
    const [startDate, setStartDate] = useState(new Date())
    const [isStartCalendarOpen, setIsCalendarOpen] = useState(false)

    const [returnDate, setReturnDate] = useState(new Date())
    const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false)

    const toggleDateCalendar = () => {
        setIsCalendarOpen(!isStartCalendarOpen);
        if (isReturnCalendarOpen) setIsReturnCalendarOpen(false)
    }
    const toggleReturnDateCalendar = () => {
        setIsReturnCalendarOpen(!isReturnCalendarOpen);
        if (isStartCalendarOpen) setIsCalendarOpen(false)
    }
    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name onClick={toggleDateCalendar}>Pick Up Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown}/>
                </SmallIcon>
                {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate}/>}
            </ItemContainer>
            <LineSeparator/>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}/>
                </SmallIcon>
                {isReturnCalendarOpen && <DateCalendar offset value={returnDate} onChange={setReturnDate as any}/>}
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em"/>
            <Button text="Book Ride"/>
        </CardContainer>
    )
}