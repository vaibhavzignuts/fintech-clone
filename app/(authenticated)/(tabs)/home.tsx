import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useRef } from 'react'
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Roundbtn from '../../../components/Roundbtn';
import Dropdown from '@/components/Dropdown';
import { useBalanceStore } from '@/store/balanceStore';
import { defaultStyles } from '@/constants/Styles';
import { transformSync } from '@babel/core';
import WidgetList from '@/components/SortableList/WidgetList';
import { useHeaderHeight } from '@react-navigation/elements'
import SwipeableItem, {
    useSwipeableItemParams,
    OpenDirection,
} from "react-native-swipeable-item";
import ListItem from '@/components/ListItem';


const home = () => {
    // const balance = 1450;



    const headerheight = useHeaderHeight()
    const { balance, runTransaction, clearTransactions, transactions } = useBalanceStore();
    const onAddMoney = () => {
        runTransaction({
            id: Math.random().toString(),
            amount: Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1),
            date: new Date(),
            title: 'Added Money',
        })
    }

    const scrollRef = useRef(null);

    // const onDismiss = useCallback((task: any) => {
    //     setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
    //   }, []);


    return (
        <ScrollView contentContainerStyle={{
            paddingTop: headerheight,

        }}>
            <View style={styles.balance}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: 10 }}>
                    <Text style={styles.balancetext}>{balance()}</Text>
                    <Text style={styles.uro}>€</Text>
                </View>
                <View>
                </View>
            </View>
            <View style={{ marginHorizontal: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Roundbtn text={'add money'} icon={'add'} onPress={onAddMoney} />
                <Roundbtn text={'Exchange'} icon={'refresh'} onPress={clearTransactions} />
                <Roundbtn text={'Details'} icon={'list'} onPress={clearTransactions} />
                <Dropdown />
            </View>
            <Text style={defaultStyles.sectionHeader}>Transactions </Text>
            <View style={styles.transaction}>

                {transactions.length === 0 && <Text style={{ padding: 14, color: Colors.gray }}>no Transaction found</Text>}
                {transactions.map((transaction) => (
                    // <TouchableOpacity>
                    //     <View key={transaction.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    //         <View style={styles.circle}>
                    //             <Ionicons size={24}
                    //                 name={transaction.amount > 0 ? 'add' : 'remove'}
                    //                 color={Colors.dark}
                    //             />
                    //         </View>
                    //         <View style={{ flex: 1 }}>
                    //             <Text>{transaction.title}</Text>
                    //             <Text style={{ color: Colors.gray, fontSize: 12 }}>{transaction.date.toLocaleString()}</Text>
                    //         </View>
                    //         <Text>{transaction.amount}€</Text>
                    //     </View>
                    // </TouchableOpacity>
                    <ListItem
                        simultaneousHandlers={scrollRef}
                        key={transaction.id}
                        transaction={transaction}
                    // onDismiss={onDismiss}
                    />

                ))}
            </View>
            <Text style={defaultStyles.sectionHeader}>Widgets</Text>
            <WidgetList />
        </ScrollView>
    )
}

export default home

const styles = StyleSheet.create({
    balance: {
        margin: 80,
        alignItems: 'center',
    },
    balancetext: {
        fontSize: 40,
        fontWeight: 'bold',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    transaction: {
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 16,
        gap: 20,
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 30,
        backgroundColor: Colors.lightGray,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',

    },

    uro: {
        fontSize: 20,
        fontWeight: 500,
    }
})