import React from 'react'

//chakra components
import {SimpleGrid, Container} from '@chakra-ui/react'
//customn components
import Mycard from './mycard'
//other
import PropTypes from 'prop-types'

const myGrid = (props) => {
    return (
        <Container>
            <SimpleGrid spacing={1} columns={[1, 2, 3, 3]} pb={20}>
                {props.cards.map((card, index) => {
                    const linksmapped = card.links.map((link) => {
                        return {
                            text: link.text,
                            href: link.href
                        }
                    })
                    return (
                        <Mycard
                            key={index}
                            src={card.src}
                            price={card.price}
                            name={card.name}
                            description={card.description}
                            links={linksmapped}
                        />
                    )
                })}
            </SimpleGrid>
        </Container>
    )
}
myGrid.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
}
export default myGrid
