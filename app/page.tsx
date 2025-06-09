import React from 'react';
import Testimonials from '@/components/cards';

function App() {
  return (
    <div
      className='min-h-screen bg-gradient-to-br from-blue-50 to-white p-8'
      style={{ backgroundImage: 'url(/back.jpg)' }}
    >
      <Testimonials />
    </div>
  );
}

export default App;
