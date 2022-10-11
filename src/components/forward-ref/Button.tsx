import React, { PropsWithChildren } from 'react';

const ForwardRefButton = React.forwardRef<HTMLButtonElement, PropsWithChildren>(
    (props, ref) => <button ref={ref}>{props.children}</button>
);

export default ForwardRefButton;
