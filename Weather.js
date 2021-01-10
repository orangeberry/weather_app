import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ['#283E51','#4B79A1'],
        title: "Haze",
        subtitle: "Watch out your sight."

    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ['#FFE000','#636363'],
        title: "TunderStorm",
        subtitle: "Crazy weather, Don't go outside."
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ['#021B79','#0575E6'],
        title: "Rainny",
        subtitle: "Annoying rain, Don't forget umbrella!"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ['#E0EAFC','#CFDEF3'],
        title: "Snow",
        subtitle: "Go outside, enjoy snowfight~"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ['#56ab2f','#a8e063'],
        title: "Atmosphere",
        subtitle: "What is this? Part of earth's outside?"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ['#6DD5FA','#6DD5FA'],
        title: "Clear",
        subtitle: "Good for go outside and activities."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#292E49','#536976'],
        title: "Cloudy",
        subtitle: "Outside is dark and maybe it rains."
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ['#3E5151','#DECBA4'],
        title: "Mist",
        subtitle: "Full of moisture, but not manufactured."
    },
    Dust: {
        iconName: "weather-windy-variant",
        gradient: ['#333333','#e9d362'],
        title: "Dust",
        subtitle: "Because of China...🦠"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ['#757F9A','#D7DDE8'],
        title: "Foggy",
        subtitle: "Becareful of drive, watch out for accident."
    }
};

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
    >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
        <MaterialCommunityIcons
        size={100}
        name={weatherOptions[condition].iconName} 
        color="white" 
        />
        <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>

    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 38,
        color: "white"
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontWeight: "500",
        fontSize: 40,
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "200",
        fontSize: 20
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
        marginBottom: 40
    }
})