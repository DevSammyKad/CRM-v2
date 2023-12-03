import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Payment from './pages/Payment';

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-bg-light-gray p-4">
            {/* <Dashboard /> */}
            <Clients />
            {/* <Payment /> */}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
