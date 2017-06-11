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

import Bkey from './components/Bkey';
import Skip from './components/Skip';
import Feature from './components/Feature';
import Category from './components/Category';
import CategoryTitle from './components/CategoryTitle';
import CategoryList from './components/CategoryList';
import Logo from './components/Logo';
import Span from './components/Span';
import Title from './components/Title';


class PlacesScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  });

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'column', backgroundColor: colors.darkishBlue, paddingBottom: 32, paddingTop: 32, alignItems: 'center', flex: 1 }}>
          <Logo />
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
            <CategoryTitle>Para comer.</CategoryTitle>
            <CategoryList>
              <Category type='Pasear'>343</Category>
              <Category type='Pasear'>343</Category>
              <Category type='Pasear'>343</Category>
              <Category type='Pasear'>343</Category>
              <Category type='Pasear'>343</Category>
            </CategoryList>
          <CategoryTitle>Cerca de ti.</CategoryTitle>
          <CategoryList>
            <Category type='Restaurant'>343</Category>
            <Category type='Pasear'>343</Category>
            <Category type='Pasear'>343</Category>
            <Category type='Pasear'>343</Category>
          </CategoryList>
          <CategoryTitle>Vida de noche.</CategoryTitle>
          <CategoryList>
            <Category type='Cumbia'>La Lupita</Category>
            <Category type='Cumbia'>La Lupita</Category>
            <Category type='Blues'>Escarabajo Scratch</Category>
            <Category type='Trance'>Bar Américas</Category>
          </CategoryList>
        </ScrollView>
        </View>
      </View>
    );
  }

}

class WelcomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  });

  state = { a: 'que onda pinche perro' };

  fetchData() {
    fetch('http://bokey.herokuapp.com/')
      .then((res) => res.text())
      .then((text) => {
        this.setState({ a: text });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    this.fetchData();

    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'column', backgroundColor: colors.darkishBlue, paddingBottom: 32, paddingTop: 32, alignItems: 'center' }}>
          <Logo />
          <Title>¡Bienvenido a Guadalajara!</Title>
          <Span>{this.state.a}</Span>
          <Span>
            Estas a 40 minutos de tu alojamiento.
            Te ayudamos a llegar a tu lugar de hospedaje.
          </Span>
        </View>
        <View style={{ backgroundColor: '#d8d8d8', flex: 8, padding: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingRight: 20  }}>
              <View style={{ borderRadius: 60, width: 60, height: 60, backgroundColor: '#0998ff' }}>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <Text style={{ fontWeight: 'bold' }}>Alquila un auto.</Text>
              <Text>No sé que escribir aquí solo hay un texto que dice que pida un carro.</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingRight: 20  }}>
              <View style={{ borderRadius: 60, width: 60, height: 60, backgroundColor: '#0998ff' }}>
              </View>
            </View>
            <View style={{ flex: 3, }}>
              <Text style={{ fontWeight: 'bold' }}>Usar UBER.</Text>
              <Text>Pues nada aquí hay un texto casualón. Y pues así.</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingRight: 20  }}>
              <View style={{ borderRadius: 60, width: 60, height: 60, backgroundColor: '#0998ff' }}>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <Text style={{ fontWeight: 'bold' }}>Abrir Mapa.</Text>
              <Text>No sé que escribir aquí solo hay un texto que dice que pida un carro.</Text>
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
  static navigationOptions = ({navigation}) => ({
    header: null
  });
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
  initialRouteName: 'Places'
});

AppRegistry.registerComponent('bookey', () => BasicApp);
