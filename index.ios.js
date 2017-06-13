import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  Button,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';
import colors from './components/colors';

import Ball from './components/Ball';
import TopBar from './components/Topbar';
import Bkey from './components/Bkey';
import Skip from './components/Skip';
import Feature from './components/Feature';
import Category from './components/Category';
import CategoryTitle from './components/CategoryTitle';
import CategoryList from './components/CategoryList';
import Logo from './components/Logo';
import Span from './components/Span';
import Title from './components/Title';
import response from './response';


class PlacesScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: (<TopBar onBack={() => {}} />)
  })

  state = {
    qlo: []
  }


  fetchData() {
    setTimeout(() => {
      this.setState({ qlo: response })
    }, 1000);
  }

  render() {
    const { navigate } = this.props.navigation;
    this.fetchData();
    const entries = this.state.qlo.map(({ title, entries }, j) => {
      const categories = entries.map(({ name, photo, types = [], rating }, i) => {
        const type = types[0] || 'restaurant';
        return (
          <Category type={type} rating={rating} key={i + j} photo={photo}>
            {name}
          </Category>
        );
      });

      return (
        <View>
          <CategoryTitle>{title}</CategoryTitle>
          <CategoryList>
          {categories}
          </CategoryList>
        </View>
      );
    });

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle='light-content'
        />
        <View style={{ flexDirection: 'column', backgroundColor: colors.darkishBlue, paddingBottom: 32, paddingTop: 32, alignItems: 'center', flex: 1 }}>
          <Title>
            ¿Qué te gustaría hacer durante tu estancia?
          </Title>
        </View>
        <Bkey onPress={() => navigate('Main')} />
        <View style={{ flex: 3 }}>
        <ScrollView style={{ backgroundColor: '#d8d8d8', padding: 10 }} contentContainerStyle={{ justifyContent: 'space-between' }}>
          <CategoryTitle>En tu alojamiento.</CategoryTitle>
            <CategoryList>
              <Feature type='wifi' />
              <Feature type='help' />
              <Feature type='services' />
            </CategoryList>
            {entries}
        </ScrollView>
        </View>
      </View>
    );
  }

}

class WelcomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: (<TopBar onBack={() => {}} />)
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle='light-content'
        />
        <View style={{ flexDirection: 'column', backgroundColor: colors.darkishBlue, paddingBottom: 32, paddingTop: 32, alignItems: 'center' }}>
          <Title>¡Bienvenido a Guadalajara!</Title>
          <Span>
            Estas a
            <Text style={{ fontWeight: 'bold' }}> 40 minutos </Text>
            de tu alojamiento.
            Te ayudamos a llegar a tu lugar de hospedaje.
          </Span>
        </View>
        <View style={{ backgroundColor: '#d8d8d8', flex: 7, padding: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingRight: 20  }}>
              <Ball type='car' />
            </View>
            <View style={{ flex: 3 }}>
              <Text style={{ fontWeight: 'bold' }}>Alquila un auto.</Text>
              <Text>Encontramos 7 opciones para alquilar cerca de tu ubicación.</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingRight: 20  }}>
              <Ball type='shuttle' />
            </View>
            <View style={{ flex: 3, }}>
              <Text style={{ fontWeight: 'bold' }}>Transporte local.</Text>
              <Text>Encontramos 4 rutas que podrías tomar.</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingRight: 20  }}>
              <Ball type='phone' />
            </View>
            <View style={{ flex: 3 }}>
              <Text style={{ fontWeight: 'bold' }}>Usar Uber.</Text>
              <Text>Viaja allí con Uber $65-$78, te pasarán a buscar en 3 minutos.</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#d8d8d8', flex: 1, alignItems: 'center' }}>
          <Skip onPress={() => navigate('Main')} />
        </View>
      </View>
    );
  }
}

class MainScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const { navigate } = navigation;


    return {
      headerLeft: (<Button title='X' onPress={() => navigate('Places')} color={colors.white} fontWeight='bold' />),
      headerStyle: { backgroundColor: colors.darkishBlue, marginBottom: -20 },
      headerTintColor: colors.white
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#003680', paddingTop: 32, alignItems: 'center' }}>
        <StatusBar
          barStyle='light-content'
        />
        <Logo />
        <Span>
          ¡Haz llegado a tu alojamineto!
        </Span>
        <Title>
          Tu habitación es la 666
        </Title>
        <Image source={require('./img/qr.png')} style={{ width: 190, height: 190 }} />
        <View style={{ marginTop: 30, marginBottom: 30, borderStyle: 'dashed', borderWidth: 1, borderColor: '#0998ff' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, letterSpacing: 6, padding: 10, paddingLeft: 50, paddingRight: 40 }}>
            8345631
          </Text>
        </View>
        <Span>
          Para hacer tu check-in escanea el código QR.
          Para abrir la puerta de tu habitación usa el código numérico.
        </Span>
      </View>
    );
  }
}

const BasicApp = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Places: { screen: PlacesScreen },
  Main: { screen: MainScreen },
}, {
  initialRouteName: 'Welcome',
  headerMode: 'screen'
});

AppRegistry.registerComponent('bookey', () => BasicApp);
