import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
    const [url, setUrl] = useState('');

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const redirectToUrl = () => {
        if (url.trim() !== '') {
            window.location.href = url;
        }
    };

    return (
        <Layout>
            <h1>My React page</h1>
            <input
                type="text"
                value={url}
                onChange={handleUrlChange}
                placeholder="Enter URL"
            />
            <button onClick={redirectToUrl}>Go</button>
        </Layout>
    );
}
