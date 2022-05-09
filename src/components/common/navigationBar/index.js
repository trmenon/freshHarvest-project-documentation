import React, {useState, useEffect} from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import config from '../../../constants/config.json';
import trmProfile from '../../../assets/trmProfile.jpg';

// Material UI imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { lightGreen } from "@mui/material/colors";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

const NavigationBar = ()=> {
    const navigate = useNavigate();
    const current = useLocation();
    const [state, setState]= useState({
        selected: "profile"
    });

    const handleChange = (event, newValue) => {        
        setState({...state, selected: newValue});
    };

    useEffect(() => {        
        const route = config?.routes.find((element)=> {
            return element?.name === state?.selected
        })['route'];
        if(current['pathname'] !== route) {
            navigate(route);
        }
    });

    return (
        <AppBar position="static" color="inherit">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 4 }}
                    >
                        <Avatar
                            alt="Fresh Harvest" 
                            sx={{ bgcolor: lightGreen[500], width: 46, height: 46 }}
                        >
                            FH                   
                        </Avatar>
                        Fresh Harvest
                    </Typography>

                    <Box sx={{ flexGrow: 1, typography: 'body1' }}>
                        <TabContext value={state?.selected}>
                            <Box sx={{ borderColor: 'divider' }}>
                                <TabList 
                                    onChange={handleChange} 
                                    aria-label="lab API tabs example"
                                >
                                    {config.routes.map((element)=> {
                                        return(
                                            <Tab 
                                                key={element?.id}
                                                label={element?.display}
                                                value={element?.name} 
                                            />
                                        )
                                    })}
                                </TabList>
                                </Box>
                        </TabContext>
                    </Box>                   
                    <Box sx={{py: 1}}>
                        <Stack spacing={1}>
                            <Chip
                                avatar={<Avatar alt="trMenon" src={trmProfile} />}
                                label="Tushar Ramdas Menon"
                                variant="outlined"
                            />
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={0}
                            >
                                <Link href="https://www.linkedin.com/in/tushar-menon-8314101b7/">
                                    <IconButton color="secondary">
                                        <LinkedInIcon/>
                                    </IconButton>
                                </Link>
                                <Link href="https://github.com/trmenon">
                                    <IconButton color="secondary">
                                        <GitHubIcon/>
                                    </IconButton>
                                </Link>
                            </Stack>
                        </Stack>
                        
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavigationBar;