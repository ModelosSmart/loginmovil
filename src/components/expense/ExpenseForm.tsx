import * as React from "react";
import { useState } from "react";

interface ExpenseFormProps {
    onSubmit: (description: string, amount: string, date: string) => void;
}

export function ExpenseForm({ onSubmit }: ExpenseFormProps) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSubmit = () => {
        if (description && amount && date) {
            onSubmit(description, amount, date);
            setDescription("");
            setAmount("");
            setDate(new Date().toISOString().split('T')[0]);
        }
    };

    return (
        <stackLayout className="bg-white p-4 rounded-lg shadow">
            <label className="text-xl font-bold mb-4">Registrar Nuevo Gasto</label>
            
            <label className="text-sm text-gray-600">Descripción:</label>
            <textField
                className="border rounded p-2 mb-2"
                text={description}
                onTextChange={(e) => setDescription(e.value)}
                hint="Ingrese la descripción"
            />

            <label className="text-sm text-gray-600">Cantidad:</label>
            <textField
                className="border rounded p-2 mb-2"
                text={amount}
                keyboardType="number"
                onTextChange={(e) => setAmount(e.value)}
                hint="Ingrese la cantidad"
            />

            <label className="text-sm text-gray-600">Fecha:</label>
            <textField
                className="border rounded p-2 mb-4"
                text={date}
                onTextChange={(e) => setDate(e.value)}
                hint="YYYY-MM-DD"
            />

            <button
                className="bg-green-500 text-white p-3 rounded-lg"
                onTap={handleSubmit}
            >
                Agregar Gasto
            </button>
        </stackLayout>
    );
}