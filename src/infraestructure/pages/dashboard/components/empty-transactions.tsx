import EmptyIlustration from "../../../../assets/empty-ilustration.svg";

export const EmptyTransactions = () => {
  return (
    <div className="w-full flex items-center flex-col justify-center py-3">
      <div className="flex items-center flex-col justify-center h-full w-full">
        <div className=" ">
          <EmptyIlustration className="text-text-primary h-[10rem]" />
        </div>
        <div className="relative w-full -top-[1rem]">
          <div className="absolute top-0 w-full">
            <p className="text-sm font-light text-text-secondary text-center">
              No tienes ninguna transacción registrada en el último mes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
