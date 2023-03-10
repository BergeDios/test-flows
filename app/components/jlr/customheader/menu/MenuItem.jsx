import React from 'react'
import {Link, Text} from '@chakra-ui/react'
import PropTypes from 'prop-types'

const MenuItem = ({children, to = '/', ...rest}) => {
    return (
        <Link href={to}>
            <Text
                fontSize={10}
                fontWeight="bold"
                display="block"
                {...rest}
                fontFamily="AvenirNext,Arial,Helvetica,sans-serif"
            >
                {children}
            </Text>
        </Link>
    )
}
MenuItem.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string
}
export default MenuItem