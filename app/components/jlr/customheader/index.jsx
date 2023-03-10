import React, {useState} from 'react'
import NavBarContainer from './NavBarContainer'
import Logo from './logo'
import MenuToggle from './menu/MenuToggle'
import MenuLinks from './menu/MenuLinks'
import {SearchIcon} from '@chakra-ui/icons'
import {HStack} from '@chakra-ui/react'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Customheader = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        console.log('toggle')
        setIsOpen(!isOpen)
    }
    console.log(isOpen)

    return (
        <NavBarContainer {...props}>
            <Logo />
            <MenuToggle onClick={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
            <HStack ml="auto" mr={5}>
                <SearchIcon mr={10} w={4} />
                <FaMapMarkerAlt w={4} />
            </HStack>
        </NavBarContainer>
    )
}

export default Customheader
