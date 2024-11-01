import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { expenseService, Expense } from "../../services/expenseService";
import { ExpenseForm } from "../expense/ExpenseForm";
import { ExpenseList } from "../expense/ExpenseList";
import { ExpenseSummary } from "../expense/ExpenseSummary";

type DashboardScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Dashboard">,
};

export function DashboardScreen({ navigation }: DashboardScreenProps) {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dailyTotal, setDailyTotal] = useState(0);
    const [monthlyTotal, setMonthlyTotal] = useState(0);

    useEffect(() => {
        loadExpenses();
    }, []);

    const loadExpenses = () => {
        try {
            setIsLoading(true);
            const loadedExpenses = expenseService.getAll();
            setExpenses(loadedExpenses);
            
            const today = new Date();
            const dailySum = expenseService.getDailyTotal(today.toISOString().split('T')[0]);
            const monthlySum = expenseService.getMonthlyTotal(
                today.getMonth(),
                today.getFullYear()
            );
            
            setDailyTotal(dailySum);
            setMonthlyTotal(monthlySum);
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        navigation.navigate("Login");
    };

    const handleAddExpense = (description: string, amount: string, date: string) => {
        try {
            expenseService.add({
                description,
                amount: parseFloat(amount),
                date
            });
            loadExpenses();
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    const handleDeleteExpense = (id: string) => {
        try {
            expenseService.delete(id);
            loadExpenses();
        } catch (error) {
            console.error('Error deleting expense:', error);
        }
    };

    if (isLoading) {
        return (
            <flexboxLayout style={styles.loadingContainer}>
                <activityIndicator busy={true} />
            </flexboxLayout>
        );
    }

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            <stackLayout row="0" className="bg-blue-500 p-4">
                <flexboxLayout justifyContent="space-between" alignItems="center">
                    <label className="text-2xl font-bold text-white">Control de Gastos</label>
                    <button 
                        className="bg-red-500 text-white p-2 rounded-lg"
                        onTap={handleLogout}
                    >
                        Cerrar Sesión
                    </button>
                </flexboxLayout>
            </stackLayout>

            <scrollView row="1" className="p-4">
                <stackLayout className="space-y-4">
                    <ExpenseForm onSubmit={handleAddExpense} />
                    <ExpenseSummary dailyTotal={dailyTotal} monthlyTotal={monthlyTotal} />
                    <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});