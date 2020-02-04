import React from 'react';
import {View} from 'react-native';
import Instagram from './src/instagram';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Login, Camera, Profil,Register, Loading } from './src/components/screens';




const TabBarComponent = props => <BottomTabBar {...props} />;
const TabNavigator = createBottomTabNavigator(
                    {
                        feeds: Instagram,
                        camera: Camera,
                        profil:Profil,
                    },
                    
                    {
                        tabBarComponent: props => (
                          <TabBarComponent {...props}
                            style=
                                {{ 
                                    height:30,
                                    flexDirection:'row',
                                    justifyContent:'space-around',
                                    alignItems:'center',
                                    paddingBottom:5,
                                    
                                }} />
                        ),
                    });

const AppStack = createStackNavigator(
                    { 
                        home:TabNavigator
                    },
                    {
                        defaultNavigationOptions:
                            {
                                headerShown:false,
                            }


                    }
                   
                    
                      
                );
const   authStack = createStackNavigator(
                    { 
                        login: Login ,
                        register:Register,
                    },
                    {
                        defaultNavigationOptions:
                            {
                                headerShown:false,
                            }


                    }
                   
                    
                      
                );

const AppNavigator = createSwitchNavigator({
    loading:Loading,    
    auth:authStack,
    main: AppStack,
});

export default createAppContainer(AppNavigator)

