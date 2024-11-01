import * as React from "react";
import { Expense } from "../../services/expenseService";

interface ExpenseListProps {
    expenses: Expense[];
    onDelete: (id: string) => void;
}

export function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
    return (
        <stackLayout className="bg-white p-4 rounded-lg shadow">
            <label className="text-xl font-bold mb-2">Lista de Gastos</label>
            {expenses.length === 0 ? (
                <label className="text-gray-500 text-center p-4">
                    No hay gastos registrados
                </label>
            ) : (
                expenses.map((expense) => (
                    <gridLayout key={expense.id} columns="*, auto" className="border-b border-gray-200 p-2">
                        <stackLayout col="0">
                            <label className="font-bold">{expense.description}</label>
                            <label className="text-sm text-gray-600">
                                ${expense.amount.toFixed(2)} - {expense.date}
                            </label>
                        </stackLayout>
                        <button
                            col="1"
                            className="bg-red-500 text-white p-1 rounded"
                            onTap={() => onDelete(expense.id)}
                        >
                            Eliminar
                        </button>
                    </gridLayout>
                ))
            )}
        </stackLayout>
    );
}