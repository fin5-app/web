export const formatCurrency = (amount: number, currency: string) => {
    return (amount).toLocaleString('en-EU', { style: 'currency', currency: currency });
};