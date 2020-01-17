export const asyncAction = async (dataId: string = null) => {
    let url = dataId == null
        ? '/some/web/api/endpoint'
        : `/another/web/api/endpoint?id=${dataId}`;

    let response = await fetch(url);
    if (!response.ok) {
        return null;
    }

    let data = await response.json();
    return data;
};