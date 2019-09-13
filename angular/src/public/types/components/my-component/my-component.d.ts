export declare class MyComponent {
    /**
     * The first name
     */
    first: string;
    /**
     * The middle name
     */
    middle: string;
    /**
     * The last name
     */
    last: string;
    private textInitYear?;
    private textInitMonth?;
    private textInitDay?;
    private textEndYear?;
    private textEndMonth?;
    private textEndDay?;
    private getText;
    deleteInitialMonth(e: any): void;
    toggleEnabledInitialMonth(e: any): void;
    deleteInitialDay(e: any): void;
    toggleEnabledInitialDay(e: any): void;
    deleteEndYear(e: any): void;
    toggleEnabledEndYear(e: any): void;
    deleteEndMonth(e: any): void;
    toggleEnabledEndMonth(e: any): void;
    deleteEndDay(e: any): void;
    toggleEnabledEndDay(e: any): void;
    format(): string;
    render(): any;
}
