import {Container, Heading, Box} from '@chakra-ui/react'
import React from 'react'
// import Carousel from '../../components/jlr/carrousel/carousel'

import Grid from '../../components/jlr/grid'
// import CustomJLRNavSection from '../../components/custom_jlr_nav_section'
// import NearestRetailer from '../../components/custom_nearest_retailer'
// import LiveShowcase from '../../components/custom_live_showcase'
//dummy data
import {vehicles, explore1, explore2} from './dummy_data'
// import RightMenu from '../../components/jlr/rightMenu'
// import PointsMenu from '../../components/jlr/pointsMenu'

const jlr = () => {
    return (
        <>
            {/* <Carousel /> */}

            {/* <CustomJLRNavSection /> */}
            <Container centerContent>
                <Grid cards={vehicles} />
                <Heading fontSize={25} fontFamily="AvenirNext, arial, helvetica, sans-serif" m={5}>
                    FIND OUT MORE
                </Heading>
                <Grid cards={explore1} />
            </Container>
            {/* <NearestRetailer />
            <LiveShowcase /> */}
            {/* <RightMenu /> */}
            {/* <PointsMenu /> */}
        </>
    )
}

jlr.getTemplateName = () => 'jlr'

export default jlr
