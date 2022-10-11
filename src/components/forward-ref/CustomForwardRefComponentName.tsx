import React, { PropsWithRef } from 'react';

// React forwardRef accepts a render function. React DevTools uses this function to determine what to display for the ref forwarding component.

const ForwardRef = React.forwardRef<HTMLButtonElement, React.PropsWithChildren>(
    function CustomComponentName(props, ref) {
        return <button ref={ref}>{props.children}</button>;
    }
);
const CustomForwardRefComponentName = () => {
    return <ForwardRef>Hi</ForwardRef>;
};

function CustomComponentNameToHOCWithForwardRef(
    Component: React.ComponentClass<PropsWithRef<any>>
) {
    class LogProps extends React.Component<PropsWithRef<any>> {
        componentDidMount(): void {
            console.log('old props:', this.props);
            console.log('new props:', this.props);
            setTimeout(() => {
                if (this.props.forwardedRef.current) {
                    this.props.forwardedRef.current.style.border =
                        '4px solid blue';
                }
            }, 2000);
        }

        render() {
            const { forwardedRef, ...rest } = this.props;
            const customProps = {
                greeting: 'Hello',
                ...rest,
            };
            return (
                <>
                    <h2>Component {Component.name || Component.displayName}</h2>{' '}
                    <Component forwardedRef={forwardedRef} {...customProps} />
                </>
            );
        }
    }

    function CustomNameToForwardRef(
        props: React.ComponentPropsWithoutRef<any>,
        ref: React.Ref<any>
    ) {
        return <LogProps {...props} forwardedRef={ref} />;
    }

    const name = Component.displayName || Component.name;

    CustomNameToForwardRef.displayName = `CustomNameToForwardRef(${name})`;

    return React.forwardRef(CustomNameToForwardRef);
}

export {
    CustomForwardRefComponentName,
    CustomComponentNameToHOCWithForwardRef,
};
