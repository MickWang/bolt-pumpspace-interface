import React from 'react';
import { Navbar } from './components/navigation/Navbar';
import { TokenContainer } from './components/tokens/TokenContainer';
import { RightSidebar } from './components/sidebar/RightSidebar';
import { I18nProvider } from './i18n/I18nProvider';
import { ToastContainer } from './components/ui/ToastContainer';

export function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 min-w-0 flex h-[calc(60vh-4rem)] md:h-auto order-1 md:order-none">
            <TokenContainer />
          </div>
          <div className="w-full md:w-80 lg:w-96 flex-shrink-0 
                       border-b md:border-b-0 md:border-l border-gray-800
                       h-[40vh] md:h-auto order-2 md:order-none">
            <RightSidebar />
          </div>
        </div>
        <ToastContainer />
      </div>
    </I18nProvider>
  );
}