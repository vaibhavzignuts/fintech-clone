


import { create } from 'zustand';
import { zustandStorage } from '@/store/mmkv-storage';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface Transaction {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

export interface BalanceState {
    transactions: Array<Transaction>;
    runTransaction: (transaction: Transaction) => void;
    balance: () => number;
    clearTransactions: () => void;
    removeTransaction: any
}

export const useBalanceStore = create<BalanceState>()(
    persist(
        (set, get) => ({

            transactions: [],
            runTransaction: (transaction: Transaction) => {
                console.log('hello');
                set((state) => ({ transactions: [...state.transactions, transaction] }));
            },
            removeTransaction: (id: string) => {

                set((state) => ({
                    transactions: state.transactions.filter((transaction) => transaction.id !== id),

                }));
            },
            balance: () => get().transactions.reduce((acc, transaction) => acc + transaction.amount, 0),
            clearTransactions: () => {
                console.log('hi');
                set({ transactions: [] });
            },
        }),
        {
            name: 'balances',
            storage: createJSONStorage(() => zustandStorage),
        }
    )
);