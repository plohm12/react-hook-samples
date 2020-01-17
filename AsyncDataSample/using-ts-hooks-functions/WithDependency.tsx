import * as React from 'react';
import { asyncAction } from './action';

interface IWithDependencyProps {
    dataId: string;
}

const WithDependency: React.FC<IWithDependencyProps> = (props) => {
    const [data, setData] = React.useState(null);

    const loadData = async () => {
        let dataResponse = await asyncAction(props.dataId);
        setData(dataResponse);
    };

    React.useEffect(() => {
        loadData();
    }, [props.dataId]);

    return (
        <div>{data}</div>
    );
};

export default WithDependency;