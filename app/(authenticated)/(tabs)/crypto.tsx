import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Currency } from '@/interfaces/crypto'
import { Link } from 'expo-router'
import { useHeaderHeight } from '@react-navigation/elements'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const crypto = () => {
    const headerheight = useHeaderHeight()
    const currencies = useQuery({
        queryKey: ['listings'],
        queryFn: async () => await fetch('/api/listing').then((res) => res.json())
    })


    const ids = currencies.data?.map((currency: Currency) => currency.id).join(',')
    console.log(ids);


    const { data } = useQuery({
        queryKey: ['info', ids],
        queryFn: async () => await fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
        enabled: !!ids,
    })
    return (
        <ScrollView contentContainerStyle={{
            // paddingTop: headerheight,
        }}>
            <Text style={defaultStyles.sectionHeader}>Latest crypto</Text>
            <View style={defaultStyles.block}>
                {currencies.data?.map((currency: Currency) => (
                    <Link href={`/crypto/${currency.id}`} key={currency.id} asChild>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }} >
                                <Image
                                    source={{ uri: data?.[currency.id]?.logo }}
                                    style={{ width: 40, height: 40 }}
                                />
                                <View style={{ flex: 1, gap: 5 }}>
                                    <Text style={{ fontWeight: '600', color: Colors.dark }}> {currency.name}</Text>
                                    <Text style={{ color: Colors.gray }}>{currency.symbol}</Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                                    <Text>{currency.quote.EUR.price.toFixed(2)}€</Text>
                                    <View style={{ flexDirection: "row", gap: 4 }}>
                                        <Ionicons name={currency.quote.EUR.percent_change_1h > 0 ? 'caret-up' : 'caret-down'} size={16} color={currency.quote.EUR.percent_change_1h > 0 ? 'green' : 'red'} />
                                        <Text style={{ color: currency.quote.EUR.percent_change_1h > 0 ? 'green' : 'red' }}> {currency.quote.EUR.percent_change_1h.toFixed(2)}%</Text>
                                    </View>
                                </View>
                            </View>

                        </TouchableOpacity>
                    </Link>
                )
                )}
            </View>
        </ScrollView>

    )
}

export default crypto

const styles = StyleSheet.create({})