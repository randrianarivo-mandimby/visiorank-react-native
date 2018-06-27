import React from "react";
import { DrawerNavigator } from "react-navigation";


import DashboardContainer from '../../dashboard/dashboard.container';
import UserListContainer from '../../usermanager/userlist/userlist.container';
import DrawerContent from "../sidebar/Sidebar";

export const Drawer = DrawerNavigator(
    {
        TableauBord: {
            screen: DashboardContainer,
        },
        Utilisateur: {
            screen: UserListContainer,
        },
        
    }, 
    {
        contentComponent: DrawerContent,
        drawerWidth: 250,
        drawerPosition: 'left',
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
);

