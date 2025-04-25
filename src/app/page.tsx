import ClientPage from './client-page';
import { Toaster } from 'react-hot-toast';
import React from 'react'

export default function Home() {
  return (
    <>
      <ClientPage />
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#4e1522',
            color: '#fff',
          },
        }} 
       />
    </>
  );
}
