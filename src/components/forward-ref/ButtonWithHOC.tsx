import React from 'react';

function logProps(Component: React.FC<any>) {
    class LogProps extends React.Component<{
        forwardedRef: React.ForwardedRef<any>;
    }> {
        componentDidUpdate(prevProps: any) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }
        render() {
            const { forwardedRef, ...rest } = this.props;
            return <Component ref={forwardedRef} {...rest} />;
        }
    }

    return React.forwardRef((props, ref: React.ForwardedRef<any>) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}

export default logProps;
