import {HeaderDiv, Column, FirstButton, SecondButton, IconSpaced} from "../styled/Header.js";
import {mdiMagnify } from '@mdi/js'
import Icon from '@mdi/react'
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <>
            <HeaderDiv>
                <Column>
                    Search Bar
                    <IconSpaced path={mdiMagnify} title='Search Bar' size={1.2}/>

                </Column>
                <Column>
                   <SearchBar></SearchBar>
                    <SecondButton>Submit</SecondButton>
                </Column>
2
            </HeaderDiv>
        </>
    )
}