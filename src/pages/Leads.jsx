import React, { useEffect, useState } from 'react';
import NewleadForm from '../components/NewleadForm';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import toast, { Toaster } from 'react-hot-toast';

const Leads = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const closeModal = () => setShowModal(false);

  // * CODE For Data Tables    ////

  const loadLeads = async () => {
    try {
      const res = await fetch('http://localhost:3000/leads');
      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (err) {
      console.error(err);
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const columns = [
    { name: 'lead_name', label: 'Lead Name' },
    { name: 'lead_contact', label: 'Lead Contact' },
    { name: 'lead_email', label: 'Lead Email' },
    { name: 'status', label: 'Status' },
    { name: 'date', label: 'Date' },
    { name: 'problem', label: 'Problem' },
    { name: 'source', label: 'Source' },
    { name: 'gender', label: 'Gender' },
    { name: 'note', label: 'Note' },
  ];

  const deleteLead = async (leadId) => {
    try {
      await fetch(`http://localhost:3000/leads/${leadId}`, {
        method: 'DELETE',
      });
      // Remove the deleted lead from the state
      setUsers(users.filter((user) => user.id !== leadId));
      console.log('Lead deleted successfully');
      toast.success('Lead deleted successfully');
      loadLeads();
    } catch (error) {
      console.error('Error deleting lead:', error);
      toast.error('Please Try again');
    }
  };

  const options = {
    elevation: 1,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 20, 30],
    responsive: 'standard',
    customBodyRender: (value) => (
      <span className={statusStyle(value)}>{value}</span>
    ),
  };

  const tableStyle = {
    borderRadius: '15px',
    overflow: 'hidden',
  };

  const genderStyle = (value) => {
    if (value === 'Male') {
      return 'text-green-600 bg-green-200 py-2 px-4 rounded-full';
    } else if (value === 'Female') {
      return 'text-pink-600 bg-pink-200 py-2 px-4 rounded-full';
    }
    return '';
  };

  const statusStyle = (value) => {
    switch (value) {
      case 'Confused':
        return 'bg-yellow-100 text-yellow-600  py-2 px-4 rounded-full ';
      case 'Interested':
        return 'bg-blue-100 text-blue-600  py-2 px-4 rounded-full';
      case 'Not Interested':
        return 'bg-red-100 text-red-600  py-2 px-4 rounded-full';
      case 'Onboard':
        return 'bg-green-100 text-green-600  py-2 px-4 rounded-full';
      case 'Close':
        return 'bg-pink-100 text-pink-600  py-2 px-4 rounded-full';
      case 'Other':
        return 'bg-slate-100 text-slate-800  py-2 px-4 rounded-full';
      default:
        return '';
    }
  };

  const getMuiTheme = () =>
    createTheme({
      palette: {
        background: {
          paper: '#ffffff',
        },
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: '10px 4px',
              color: '#9291A5',
            },
          },
        },
      },
    });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div className="flex justify-between items-center my-8 bg-white py-8 px-5 rounded-lg border border-border-stroke shadow-sm ">
        <div>Leads </div>
        <div className="flex gap-4">
          <button
            className="bg-indigo-500 text-sm font-semibold  text-white py-3 px-4 rounded-lg"
            onClick={() => setShowModal(true)}
          >
            Add New Lead
          </button>
          <button className="bg-blue-500 text-sm font-semibold  text-white py-3 px-4 rounded-lg">
            Import Lead
          </button>
        </div>
      </div>
      {showModal && <NewleadForm closeModal={closeModal} />}

      <ThemeProvider theme={getMuiTheme()}>
        <div style={tableStyle}>
          <MUIDataTable
            // Other props
            customBodyRender={(value, tableMeta, updateValue) => (
              <button onClick={() => deleteLead(tableMeta.rowData[0])}>
                Delete
              </button>
            )}
            title={`All Leads : ${users?.length}`}
            data={users}
            options={options}
            columns={columns.map((column) => ({
              ...column,
              options: column.options
                ? { ...column.options, ...options }
                : options,
            }))}
          />
        </div>
      </ThemeProvider>
      <Toaster />
    </div>
  );
};

export default Leads;
