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
            <HStack ml="auto">
                <SearchIcon mr={10} w={4} />
                <div styles={{marginRight: '5', width: '4'}}>
                    <FaMapMarkerAlt mr={5} />
                </div>
            </HStack>
        </NavBarContainer>
    )
}

export default Customheader
