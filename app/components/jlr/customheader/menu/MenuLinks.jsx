import React from 'react'
import {Box, Stack} from '@chakra-ui/react'
import MenuItem from './MenuItem'
import PropTypes from 'prop-types'

const MenuLinks = (props) => {
    return (
        <Box
            display={{base: props.isOpen ? 'block' : 'none', md: 'block'}}
            flexBasis={{base: 'auto', md: 'auto'}}
        >
            <Stack
                spacing={6}
                align="left"
                justify={['flex-start', 'flex-start', 'flex-start', 'flex-start']}
                direction={['column', 'row', 'row', 'row']}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">VEHICLES</MenuItem>
                <MenuItem to="/how">PURCHASE</MenuItem>
                <MenuItem to="/how">OWNERS</MenuItem>
                <MenuItem to="/how">EXPLORE</MenuItem>
            </Stack>
        </Box>
    )
}
MenuLinks.propTypes = {
    isOpen: PropTypes.bool
}
export default MenuLinks
