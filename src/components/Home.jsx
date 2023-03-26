import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import Image from "mui-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    const theme = useTheme();

    return (
        <Box sx={{padding: 2}}>
            <Paper elevation={10} sx={{bgcolor:`${theme.palette.info.main}`, color: 'black', fontWeight: 'bold', padding: 2, maxWidth: 900, margin: 'auto'}}>
                <Typography variant="h3" sx={{overflowWrap: 'break-word', textAlign: 'center', mb: 3}}>
                    What is The Mob?
                </Typography>
                <Box display="flex" justifyContent="center" sx={{mb: 3}} >
                    <Carousel sx={{maxWidth: 300, width: "90%"}} animation="slide" interval="4500">
                        <Image src={`/images/godfather.png`} height="100%" width="100%" alt="The Godfather" />
                        <Image src={`/images/mobster1.png`} height="100%" width="100%" alt="OOPA Mobster" />
                        <Image src={`/images/mobster2.png`} height="100%" width="100%" alt="OOPA Mobster" />
                        <Image src={`/images/mobster3.png`} height="100%" width="100%" alt="OOPA Mobster" />
                    </Carousel>
                </Box>
                <Typography variant="h5" sx={{overflowWrap: 'break-word', textAlign: 'center', mb: 3}}>
                    The Mob is a subDAO of the &nbsp;
                    <Link to={{ pathname: "https://oopa.io" }} target="_blank" rel="_norefferer">OOPA collection</Link> on Avalanche.
                    Originally formed around the 'Mafioso' trait, the DAO has since expanded to allow additional members.
                </Typography>
                <Typography variant="h5" sx={{overflowWrap: 'break-word', textAlign: 'center', mb: 3}}>
                    Find out more on Discord or Twitter:
                </Typography>
                <Box display="flex" justifyContent="center" sx={{mb: 3}}>
                    <Link to={{ pathname: "https://discord.oopamob.com" }} target="_blank" rel="_norefferer">
                        <FontAwesomeIcon icon={faDiscord} color="black" fontSize="32px" shake className="icons"/>
                    </Link>
                    <Link to={{ pathname: "https://twitter.com/oopa_MOB" }} target="_blank" rel="_norefferer">
                        <FontAwesomeIcon icon={faTwitter} color="black" fontSize="32px" shake className="icons"/>
                    </Link>
                </Box>
            </Paper>
        </Box>
    );
}