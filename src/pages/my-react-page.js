import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState('');

    const verifyVPCConnection = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const text = await response.text();
            setResult(text);
        } catch (error) {
            setResult('Error: ' + error.message);
        }
    };

    return (
        <Layout>
            <h1>My React page</h1>
            <form onSubmit={verifyVPCConnection}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter internal URL"
                />
                <button type="submit">Verify</button>
            </form>
            <div id="result">
                {result}
            </div>
        </Layout>
    );
}
