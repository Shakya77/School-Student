import { useState } from 'react';

const usePostRequest = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const postData = async (url, data, headers = { 'Content-Type': 'application/json' }) => {
        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Request failed');
            }

            const result = await res.json();
            setResponse(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { postData, response, loading, error };
};

export default usePostRequest;
