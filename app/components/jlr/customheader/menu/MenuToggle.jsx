import React from 'react'
import {IconButton} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import {HamburgerIcon, SmallCloseIcon} from '@chakra-ui/icons'

const MenuToggle = (props) => {
    return (
        <IconButton
            display={{base: 'block', md: 'none'}}
            onClick={props.onClick}
            icon={props.isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
            color="black"
            bg="white"
        />
    )
}

MenuToggle.propTypes = {
    onClick: PropTypes.func,
    isOpen: PropTypes.bool
}
export default MenuToggle
