import React from 'react'
import PropTypes from 'prop-types'

import {Card, CardBody, Text, Image, Stack, Heading, Link} from '@chakra-ui/react'

import {ChevronRightIcon} from '@chakra-ui/icons'

const Mycard = (props) => {
    return (
        <Card boxShadow="none" w="100%">
            <CardBody p={0}>
                <Image src={props.src} alt={props.name} />
                <Heading size="xs" mt="6" mb="0">
                    {props.name}
                </Heading>
                <Stack mb="6" spacing="3" fontFamily="AvenirNext, arial, helvetica, sans-serif">
                    {props.price && (
                        <Text color="black.600" fontSize="xs">
                            {props.price}
                        </Text>
                    )}
                    <Text fontSize="sm">{props.description}</Text>
                    {props.links.map((link, index) => {
                        return (
                            <Link
                                fontWeight="bold"
                                key={index}
                                fontSize="xs"
                                href={link.href}
                                isExternal
                            >
                                <ChevronRightIcon mx="2px" /> {link.text}
                            </Link>
                        )
                    })}
                </Stack>
            </CardBody>
        </Card>
    )
}

Mycard.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object),
    src: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string
}
export default Mycard
