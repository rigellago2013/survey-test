import React from 'react';
import ClientSOPForm from './components/ClientSOPForm';

function App() {
  return (
    <div className="App min-h-screen py-8 px-4">
      <header className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Client SOP Form</h1>
        <p className="text-gray-600">Standard Operating Procedures Configuration</p>
      </header>
      <main>
        <ClientSOPForm />
      </main>
      <footer className="max-w-4xl mx-auto mt-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;