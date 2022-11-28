import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

export default function Start(props) {

    return (

        <View>
            <ScrollView showsVerticalScrollIndicator={false} >
                
                <View>
                    <Image source={require("../../Assets/icons/logo3.png")} />
                </View>
                <Text>Vamos transformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nivel.</Text>

            </ScrollView>
        </View>

    )

};