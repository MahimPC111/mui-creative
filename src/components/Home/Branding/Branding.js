import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import image from '../.../../../../assets/branding.png'

const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: '90vh',
    backgroundColor: 'rgba(122, 178, 89, 0.15)',
    padding: theme.spacing(8),
    margin: '1rem 0 4rem',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const Branding = () => {
    return (
        <BrandingWrapper>
            <Box>
                <Typography sx={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                }}>
                    Let's Grow Your <br />
                    Brand To The <br />
                    Next Level
                </Typography>
                <Typography sx={{ my: 4 }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolor earum maiores consectetur quasi consequatur. Perferendis
                </Typography>
                <Button>Hire Us</Button>
            </Box>
            <Box sx={{
                width: '75%',
                display: ['none', 'none', 'block']
            }}>
                <img src={image} alt="Branding" style={{ width: '100%' }} />
            </Box>
        </BrandingWrapper>
    );
};

export default Branding;