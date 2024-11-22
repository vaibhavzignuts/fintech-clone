import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'


// typeof Ionicons.defaultProps;

type Roundbtnprops = {
    icon: typeof Ionicons.defaultProps;
    text: string;
    onPress?: () => void;
}

const Roundbtn = ({ icon, text, onPress }: Roundbtnprops) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TouchableOpacity onPress={onPress}>
                <ImageBackground
                    style={{
                        height: 60,
                        width: 60,
                        borderRadius: 30,
                        backgroundColor: Colors.lightGray,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Ionicons name={icon} size={30} color={Colors.dark} />


                </ImageBackground>
            </TouchableOpacity>

            <Text>{text}</Text>

        </View>
    )
}

export default Roundbtn

const styles = StyleSheet.create({})