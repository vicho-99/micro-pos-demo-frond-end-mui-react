'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Home from '@mui/icons-material/Home';
import MenuItems from '@/components/MenuItems';

import { drawerStyles as styles } from '@/styles/drawerStyles';
import { Drawer } from '@mui/material';



export default function DrawerList() {

    const FireNav = styled(List)(styles.fireNav);

    return (
        <Drawer
            sx={styles.drawerMain}
            variant="permanent"
            anchor="left"
        >

            <Box sx={styles.drawerBox}>

                <ThemeProvider theme={createTheme(styles.drawerTheme)}>
                    
                    <Paper elevation={0} sx={styles.drawerPaper}>

                        <FireNav component="nav" disablePadding>

                            <ListItemButton component="a" href="#customized-list">

                                <ListItemText
                                    primary="POINT OF SALE"
                                    primaryTypographyProps={styles.drawerTitle}
                                />

                            </ListItemButton>

                            <Divider />

                            <ListItem component="div" disablePadding>

                                <ListItemButton sx={{ height: 56 }}>

                                    <ListItemIcon>
                                        <Home color="primary" />
                                    </ListItemIcon>

                                    <ListItemText
                                        primary="DASHBOARD"
                                        primaryTypographyProps={styles.drawerListItemTitle}
                                    />

                                </ListItemButton>

                            </ListItem>
                            <Divider />
                            <Box
                                sx={styles.drawerBoxItems}
                            >

                                <MenuItems />

                            </Box>
                        </FireNav>
                    </Paper>
                </ThemeProvider>
            </Box>
        </Drawer>
    );
}

