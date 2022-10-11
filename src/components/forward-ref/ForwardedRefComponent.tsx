import { Component, PropsWithRef, RefObject } from 'react';
import { CustomComponentNameToHOCWithForwardRef } from './CustomForwardRefComponentName';

interface IProps {
    forwardedRef: RefObject<HTMLInputElement>;
}
class ForwardRefComponent extends Component<IProps> {
    forwardedRef: RefObject<HTMLInputElement>;
    constructor(props: IProps) {
        super(props);
        this.forwardedRef = this.props.forwardedRef;
    }
    componentDidMount(): void {
        if (this.forwardedRef && this.forwardedRef.current) {
            this.forwardedRef.current.placeholder =
                'I was changed in root component';
        }
        console.log({ ForwardRefComponentProps: this.props });
    }

    render() {
        return (
            <input ref={this.forwardedRef} value="" placeholder="Click me" />
        );
    }
}

export default CustomComponentNameToHOCWithForwardRef(ForwardRefComponent);
