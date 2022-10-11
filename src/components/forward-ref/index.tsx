import React, { useState } from 'react';
import ForwardedRefComponent from './ForwardedRefComponent';

const ForwardedRefExample = () => {
    const [changed, setChanged] = useState(false);
    const ref = React.createRef<HTMLInputElement>();
    if (ref.current) {
        console.log({ inputValue: ref.current.value });
        setChanged(true);
    }
    return (
        <div>
            <h1>Forwarded Ref Example</h1>
            <p>It was changed: {changed ? 'Yes' : 'No'}</p>
            <ForwardedRefComponent ref={ref} />{' '}
        </div>
    );
};

export default ForwardedRefExample;
