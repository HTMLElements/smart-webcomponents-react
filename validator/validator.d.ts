import React from "react";
import { ValidatorProperties } from "./../index";
import { ValidatorRule } from './../index';
export { ValidatorProperties } from "./../index";
export { ValidatorRuleType, ValidatorRule } from './../index';
export declare const Smart: any;
export interface ValidatorProps extends ValidatorProperties {
    className?: string;
    style?: React.CSSProperties;
    onCreate?: ((event?: Event) => void) | undefined;
    onReady?: ((event?: Event) => void) | undefined;
}
/**
 Validator plug-in is used to validate form elements.
*/
export declare class Validator extends React.Component<React.HTMLAttributes<Element> & ValidatorProps, any> {
    private _id;
    private nativeElement;
    private componentRef;
    get id(): string;
    /**
    *	Property type: ValidatorRule[]
    */
    get rules(): ValidatorRule[];
    set rules(value: ValidatorRule[]);
    /** A valid CSS selector of an element on the page to be used as a container for validation error messages.
    *	Property type: string
    */
    get validationSummarySelector(): string;
    set validationSummarySelector(value: string);
    get properties(): string[];
    /**  This event occurs, when the React component is created.
    *  @param event. The custom event. 	*/
    onCreate?: ((event?: Event) => void) | undefined;
    /**  This event occurs, when the React component is completely rendered.
    *  @param event. The custom event. 	*/
    onReady?: ((event?: Event) => void) | undefined;
    get eventListeners(): string[];
    /** Clears the error messages.
    */
    reset(): void;
    /** Opens the dropDown.
    * @param {Function} result?. A callback function to call when validating inputs.
    */
    validate(result?: Function): void;
    constructor(props: any);
    componentDidRender(initialize: boolean): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: any;
    }, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default Validator;
