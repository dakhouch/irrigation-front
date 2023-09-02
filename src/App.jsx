import {RouterProvider} from 'react-router-dom';
import './index.css';
import { router } from './routes/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {ConfigProvider} from "antd";
import frFR from 'antd/locale/fr_FR';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                locale={frFR}
                theme={{
                    token: {
                        // Seed Token
                        colorPrimary: '#00b96b',
                    },
                    components: {
                        Button: {
                            colorTextPlaceholder: '#000000',
                            colorText:'#000000',
                            controlHeight: '40',
                            size: 'large',
                            colorPrimary: '#000000',
                            colorPrimaryActive: '#000000',
                            colorBorder: '#A3C68C',
                            colorPrimaryHover: '#000000',
                            controlItemBgActiveHover: '#000000',
                        },
                        DatePicker: {
                            size: 'large',
                            controlHeight: '40',
                            colorTextPlaceholder: '#4A5568',
                            colorPrimary: '#A3C68C',
                            colorLink: '#A3C68C',
                            colorBorder: '#A3C68C',
                            colorPrimaryBorder: '#A3C68C',
                            colorPrimaryHover: '#A3C68C',
                        },
                        Select: {
                            size: 'large',
                            controlHeight: '40',
                            colorTextPlaceholder: '#4A5568',
                            colorPrimary: '#A3C68C',
                            colorLink: '#A3C68C',
                            colorBorder: '#A3C68C',
                            colorPrimaryBorder: '#A3C68C',
                            colorPrimaryHover: '#A3C68C',
                            colorPrimaryBg:'#A3C68C',
                            active:'#A3C68C'
                        },
                    },
                }}
            >
                <div className="bg-slate-100 min-h-screen mx-auto overflow-auto">
                    <RouterProvider router={router} />
                </div>
            </ConfigProvider>
            <ReactQueryDevtools position="bottom-right" />
        </QueryClientProvider>
    );
};

export default App;