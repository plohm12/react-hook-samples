import * as React from 'react';
import { asyncAction } from './action';

const NoDependency: React.FC = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const loadData = async () => {
            let responseData = await asyncAction();
            setData(responseData);
        };
        loadData();
    }, []);

    return (
        <div>{data}</div>
    );
};

export default NoDependency;