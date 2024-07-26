import { CustomFlowbiteTheme, Datepicker } from 'flowbite-react';
import { FC } from 'react';

const customDatepickerTheme: CustomFlowbiteTheme["datepicker"] = {
    root: {
        base: "relative",
        input: {
            base: "bg-secondary-100 rounded-lg ",
            field: {
                input: {
                    base: "border-[1px] border-borderPrimary-100 w-full",
                    colors: {
                        gray: 'bg-secondary-100 text-text-primary'
                    }
                },
                base: 'bg-secondary-100 rounded-lg'
            },
        },

    },
    popup: {
        root: {
            base: "absolute top-10 z-50 block pt-2",
            inline: "relative top-0 z-auto",
            inner: "inline-block rounded-lg bg-secondary-100 p-4 shadow-lg"
        },
        header: {
            base: "",
            title: "px-2 py-3 text-center font-semibold text-text-primary",
            selectors: {
                base: "mb-2 flex justify-between",
                button: {
                    base: "rounded-lg border-[1px] border-borderPrimary-100 px-5 py-2.5 text-sm font-semibold text-text-primary hover:bg-borderPrimary-100 focus:outline-none focus:ring-2 focus:ring-borderPrimary-100",
                    prev: "",
                    next: "",
                    view: ""
                }
            }
        },
        view: {
            base: "p-1"
        },
        footer: {
            base: "mt-2 flex space-x-2",
            button: {
                base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
                today: "bg-purple-300 text-white hover:bg-purple-200",
                clear: "border-[1px] border-borderPrimary-100 text-text-primary hover:bg-borderPrimary-100"
            }
        }
    },
    views: {
        days: {
            header: {
                base: "mb-1 grid grid-cols-7",
                title: "h-6 text-center text-sm font-medium leading-6 text-text-primary bg-secondary-100"
            },
            items: {
                base: "grid w-64 grid-cols-7",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-text-primary hover:bg-borderPrimary-100",
                    selected: "bg-purple-300 text-text-primary hover:bg-purple-200",
                    disabled: "text-gray-800"
                }
            }
        },
        months: {
            items: {
                base: "grid w-64 grid-cols-4",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                    selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                    disabled: "text-gray-500"
                }
            }
        },
        years: {
            items: {
                base: "grid w-64 grid-cols-4",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                    selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                    disabled: "text-gray-500"
                }
            }
        },
        decades: {
            items: {
                base: "grid w-64 grid-cols-4",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                    selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                    disabled: "text-gray-500"
                }
            }
        }
    }
}

export const FiltersWrapper: FC = () => {
    return (
        <div className='grid grid-cols-12 space-x-3'>
            <div className='col-span-3'>
                <Datepicker labelClearButton='Limpiar' labelTodayButton='Hoy' language='es' theme={customDatepickerTheme} maxDate={new Date()} />
            </div>
            <div className='col-span-3'>
                <Datepicker labelClearButton='Limpiar' labelTodayButton='Hoy' language='es' theme={customDatepickerTheme} maxDate={new Date()} />
            </div>
        </div>
    )
}

