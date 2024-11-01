import { ApplicationSettings } from '@nativescript/core';

export interface Expense {
    id: string;
    description: string;
    amount: number;
    date: string;
}

const STORAGE_KEY = 'expenses';

export const expenseService = {
    getAll(): Expense[] {
        try {
            const data = ApplicationSettings.getString(STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading expenses:', error);
            return [];
        }
    },

    add(expense: Omit<Expense, 'id'>): Expense {
        try {
            const expenses = this.getAll();
            const newExpense = {
                ...expense,
                id: Date.now().toString(),
            };
            
            ApplicationSettings.setString(STORAGE_KEY, JSON.stringify([...expenses, newExpense]));
            return newExpense;
        } catch (error) {
            console.error('Error adding expense:', error);
            throw error;
        }
    },

    delete(id: string): void {
        try {
            const expenses = this.getAll();
            const updatedExpenses = expenses.filter(expense => expense.id !== id);
            ApplicationSettings.setString(STORAGE_KEY, JSON.stringify(updatedExpenses));
        } catch (error) {
            console.error('Error deleting expense:', error);
            throw error;
        }
    },

    getDailyTotal(date: string): number {
        try {
            const expenses = this.getAll();
            return expenses
                .filter(expense => expense.date === date)
                .reduce((sum, expense) => sum + expense.amount, 0);
        } catch (error) {
            console.error('Error calculating daily total:', error);
            return 0;
        }
    },

    getMonthlyTotal(month: number, year: number): number {
        try {
            const expenses = this.getAll();
            return expenses
                .filter(expense => {
                    const expenseDate = new Date(expense.date);
                    return expenseDate.getMonth() === month && 
                           expenseDate.getFullYear() === year;
                })
                .reduce((sum, expense) => sum + expense.amount, 0);
        } catch (error) {
            console.error('Error calculating monthly total:', error);
            return 0;
        }
    }
};