import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './assets/style/styles.scss';
import Layout from './layouts';
import Main from './pages/Main';

function App() {
  const [page, setPage] = useState(0);

  return (
    <ChakraProvider>
      <Layout page={page}>
        <Routes>
          <Route index element={<Main />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
