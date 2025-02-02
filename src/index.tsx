import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ConfigProvider } from 'antd'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <StoreProvider>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                    borderRadius: 2,
                    colorBgContainer: '#ffffff',
                },
            }}
        >
            <App />
        </ConfigProvider>
    </StoreProvider>,
);
