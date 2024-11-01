import * as React from "react";

interface ExpenseSummaryProps {
    dailyTotal: number;
    monthlyTotal: number;
}

export function ExpenseSummary({ dailyTotal, monthlyTotal }: ExpenseSummaryProps) {
    return (
        <stackLayout className="bg-white p-4 rounded-lg shadow">
            <label className="text-xl font-bold mb-2">Resumen</label>
            <label className="text-lg">
                Total Diario: ${dailyTotal.toFixed(2)}
            </label>
            <label className="text-lg">
                Total Mensual: ${monthlyTotal.toFixed(2)}
            </label>
        </stackLayout>
    );
}