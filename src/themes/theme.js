import { StyleSheet, Platform } from "react-native"

 const themes = {
    color: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        headerBackground: '#24292e',
    },
    fontSize: {
        body: 14,
        subheading: 16
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    },
    fonts: Platform.select({
        ios: 'Roboto',
        android: 'Arial',
        default: 'black'
    })
};


export const Styles = StyleSheet.create({
    Normaltext: {
        color: themes.color.textPrimary,
        fontSize: themes.fontSize.body,
        fontFamily: themes.fonts.main,
        fontWeight: themes.fontWeights.normal,
        paddingTop: 5,
        paddingBottom: 5
    },
    subHeading: {
        color: themes.color.textPrimary,
        fontSize: themes.fontSize.subheading,
        fontWeight: themes.fontWeights.bold,
    },
    colorPrimary: {
        color: themes.color.primary
    },
    colorTextSecondary: {
        color: themes.color.textSecondary
    },
    fontWeightBold: {
        fontWeight: themes.fontWeights.bold
    }

});