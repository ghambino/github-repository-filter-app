import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, Button } from 'react-native';
import { Styles } from '../themes/theme';

const styles = StyleSheet.create({
    images: {
        height: 70,
        width: 70,
        borderRadius: 7
    }, 
    MainContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        padding: 20,
        backgroundColor: 'white'
    },
    MinContainer1: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start'
    },
    MinContainer1b: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 5
    },
    MinContainer2: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        padding: 5
    },
    text: Styles.Normaltext,
    button: {
        backgroundColor: '#0366d6',
        color: 'white',
    },
    lowerPart: {
        display: 'flex',
         flexDirection: 'column', 
         justifyContent: 'center', 
         alignItems: 'center'
    }
})



const RepositoryItems = ({name, description, language, stars, forks, reviews, rating, image}) => {
    
    const roundup = (value) => {
        if(value && !isNaN(value) && value > 1000){
            const newValue = (value / 1000).toFixed(1);
            return `${newValue}k`
        } 
        return value 
    };
    
    return (
        <View style={styles.MainContainer}>

            <View style={styles.MinContainer1}>
            <View>
            <Image 
                style={styles.images}
                source={{
                    uri: image
                }}
            />
             </View>

             <View style={styles.MinContainer1b}>
                
            <Text style={Styles.subHeading}> {name}</Text>
            <Text style={styles.text}> {description}</Text>

            <Button 
            title={language}
            color={styles.button.backgroundColor}
            />
           
            </View>   
            
           
            </View>

           <View style={styles.MinContainer2}>

               <View style={styles.lowerPart}>
               <Text> {roundup(stars)} </Text>
               <Text>Stars</Text>
               </View>

               <View style={styles.lowerPart}>
               <Text> {roundup(forks)} </Text>
               <Text>Forks</Text>
               </View>

               <View style={styles.lowerPart}>
               <Text> {roundup(reviews)} </Text>
               <Text>Reviews</Text>
               </View>

               <View style={styles.lowerPart}>
               <Text> {roundup(rating)} </Text>
               <Text>Ratings</Text>
               </View>
          
           </View>
           
        </View>
    )
}

export default RepositoryItems