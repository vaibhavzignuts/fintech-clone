import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = () => {

    const { top } = useSafeAreaInsets();
    return (
        <BlurView intensity={80} tint={'extraLight'} style={{ paddingTop: top }}>
            {/* <Text>CustomHeader</Text> */}
            <View style={styles.container}>
                <TouchableOpacity style={{
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                    backgroundColor: Colors.gray,
                }}>
                    <Text>SG</Text>
                </TouchableOpacity>


                <View style={styles.searchContainer}>
                    <Ionicons
                        name='search'
                        size={20}
                        color={Colors.dark}
                        style={{ padding: 10 }}
                    />
                    <TextInput
                        placeholder='search...'
                        overflow='hidden'

                    />
                </View>
                <View style={styles.circle}>
                    <Ionicons name={'stats-chart'} size={20} color={Colors.dark} />
                </View>
                <View style={styles.circle}>
                    <Ionicons name={'card'} size={20} color={Colors.dark} />
                </View>
            </View>
        </BlurView>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        gap: 10,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',


    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.lightGray,
        alignItems: 'center',
        borderRadius: 20,
        flex: 1
    },


})