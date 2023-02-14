import { Box, styled } from '@mui/material';
import React from 'react';
import image1 from '../../../assets/brands/airbnb.png'
import image2 from '../../../assets/brands/google.png'
import image3 from '../../../assets/brands/netflix.png'
import image4 from '../../../assets/brands/slack.png'
import image5 from '../../../assets/brands/uber.png'

const Brands = () => {
    const brands = [
        image1, image2, image3, image4, image5
    ]

    const BrandWrapper = styled(Box)(({ theme }) => ({
        '&>img': {
            height: '60px',
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5rem',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            '&>img': {
                marginBottom: '2rem'
            }
        }
    }))

    return (
        <BrandWrapper>
            {
                brands.map((brand, i) => <img key={i} src={brand} alt='brand' />)
            }
        </BrandWrapper>
    );
};

export default Brands;