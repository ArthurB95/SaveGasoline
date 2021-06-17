import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import {UserIdentification} from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { GasSelect } from '../pages/GasSelect';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (

  <stackRoutes.Navigator headerMode='none' screenOptions={{ cardStyle: {backgroundColor: colors.background}}}>

  <stackRoutes.Screen name="Welcome" component={Welcome} />

  <stackRoutes.Screen name="UserIdentification" component={UserIdentification} />

  <stackRoutes.Screen name="Confirmation" component={Confirmation} />

  <stackRoutes.Screen name="GasSelect" component={GasSelect} />

  </stackRoutes.Navigator>

)

export default AppRoutes;