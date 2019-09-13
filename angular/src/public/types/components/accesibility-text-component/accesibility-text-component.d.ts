export declare class AccesibilityTextComponent {
    private maxSize;
    private minSize;
    private normalSize;
    lang: string;
    element: HTMLElement;
    strings: any;
    componentWillLoad(): Promise<any>;
    normalClick(e: any): void;
    plusClick(e: any): void;
    minusClick(e: any): void;
    enClick(e: any): void;
    esClick(e: any): void;
    render(): any;
}
