const hooks = module(({ baseUrl }, { preact }) => {
    const { useState, useEffect, useRef } = preact;

    const useInterval  = (callback = () => {}, interval = 1000) => {
        const intervalRef = useRef();

        const start = (params) => (intervalRef.current = setInterval(() => callback(params), interval));
        const stop = () => clearInterval(intervalRef.current);

        useEffect(() => { return stop }, []);

        return { start, stop };
    };

    const useRequest = () => {
        const [loading, setLoading] = useState(false);
        const [response, setResponse] = useState({});

        const get = async (url = '') => {
            if(loading) return Promise.reject();

            setLoading(true);
            try {
                const data = await fetch(url);
                const json = await data.json();

                setResponse({ payload: json });
            } catch (error) {
                setResponse({ error });
            }
            setLoading(false);
        };

        return { response, loading, get };
    };

    const useNetworks = () => {
        const { response, loading, get } = useRequest();
        useEffect(() => get(`${baseUrl}/networks`), []);

        return { response, loading };
    };

    return {
        useRequest,
        useNetworks,
        useInterval,
    }
});
