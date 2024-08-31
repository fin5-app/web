import { FC } from "react";
import { SearchBar } from "./search-bar";
import { FiltersWrapper } from "./filters";
import { TransactionsTable } from "./transactions-table";

export const MyTransactions: FC = () => {
    return (
        <div className="w-full">
            <div className="w-full flex flex-col gap-5">
                <SearchBar placeholder={"Buscar transacción"} />
                <FiltersWrapper />
                <TransactionsTable />
            </div>
        </div>
    )
}
