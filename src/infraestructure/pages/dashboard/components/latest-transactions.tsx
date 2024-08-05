import ExpenseTypeIcon from "../../../../assets/landmark.svg";
import PlusIcon from "../../../../assets/plus.svg";
import MinusIcon from "../../../../assets/minus.svg";
import { formatCurrency } from "../../../utils/currency";
import { TransactionTypes } from "../../../../domain/models/TransactionType";
import { Transaction } from "../../../../domain/models/Transaction";
import { EmptyTransactions } from "./empty-transactions";

interface LatestTransactions {
  transactions?: Transaction[];
}

export default function LatestTransactions(props: LatestTransactions) {
  const { transactions } = props;
  return (
    <div className="flex flex-col gap-5">
      <p className="text-text-primary capitalize text-lg">
        Últimas transacciones
      </p>
      <div className="p-3 bg-secondary-100 border-borderPrimary-100 rounded-[6px] border-[1px]">
        <Table latestTransactions={transactions} />
      </div>
    </div>
  );
}

interface TableProps {
  latestTransactions?: Transaction[];
}

function Table(props: TableProps) {
  const { latestTransactions } = props;
  return (
    <div className="flex flex-col gap-5 p-3 ">
      {!latestTransactions || latestTransactions.length === 0 ? (
        <EmptyTransactions />
      ) : (
        latestTransactions.map((item) => (
          <div key={item.id} className="grid grid-cols-4 w-full items-center">
            <div className="flex-1 flex space-x-2 md:space-x-4 items-center col-span-3">
              <div className="rounded-md bg-primary-100 w-12 h-12 relative flex items-center justify-center">
                {item.type.name === TransactionTypes.EXPENSE ? (
                  <MinusIcon
                    className="absolute w-3 h-3 top-1 right-1 text-error-100"
                    style={{ strokeWidth: 5 }}
                  />
                ) : (
                  <PlusIcon
                    className="absolute w-3 h-3 top-1 right-1 text-success-100"
                    style={{ strokeWidth: 5 }}
                  />
                )}
                <ExpenseTypeIcon className="h-4 w-4 text-text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-text-primary text-xs md:text-sm font-medium tracking-wide">
                  {item.category.name}
                </p>
                <p className="text-text-secondary text-xs">
                  {new Date(item.created).toLocaleDateString("es-AR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="flex gap-1 md:gap-2 justify-end flex-col md:flex-row items-center md:items-start">
              <p className="text-text-primary text-xs md:text-sm">
                {item.type.name === TransactionTypes.EXPENSE
                  ? `${formatCurrency(item.amount, "USD")}`
                  : `${formatCurrency(item.amount, "USD")}`}
              </p>
              <p className="text-text-primary text-xs md:text-sm">
                {item.currency.code}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
