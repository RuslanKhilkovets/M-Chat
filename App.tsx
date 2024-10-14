import React from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import {Navigation} from '@/navigation';
import {ChatProvider} from '@/context/Chat/ChatContext';
import {AuthProvider} from '@/context/Auth/AuthContext';
import {ThemeProvider} from '@/context/Theme/ThemeContext';
import store from './src/store';

if (__DEV__) {
  require('./ReactotronConfig');
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1,
      cacheTime: 1000 * 60 * 1,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: false,
      select: ({data: {data}}) => data,
    },
    mutations: {
      cacheTime: 1000 * 60 * 1,
      retry: false,
    },
  },
});

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <ChatProvider>
            <ThemeProvider>
              <Toast />
              <Navigation />
            </ThemeProvider>
          </ChatProvider>
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
