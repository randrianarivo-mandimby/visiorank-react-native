import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Button } from 'react-native';
import styles from './Sidebar.style';
import PropTypes from 'prop-types';


class DrawerContent extends Component {

  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.separatorTop}>
          </Text>

          <Button
            title='Tableau de bord'
            style={styles.button}
            onPress={this.navigateToScreen('TableauBord')}/>

            <Text style={styles.sectionHeadingStyle}>
            </Text>

          <Button
            title='Utilisateurs'
            style={styles.button}
            onPress={this.navigateToScreen('Utilisateur')}/>

            <Text style={styles.sectionHeadingStyle}>
           </Text>

          
        </ScrollView>
      </View>
    );
  }
}

DrawerContent.propTypes = {
  navigation: PropTypes.object
};

export default DrawerContent;