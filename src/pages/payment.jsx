// // Payment.jsx
// import React from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

const Payment = () => {
  //   const paymentData = [
  //     {
  //       id: 1,
  //       name: 'John Doe',
  //       status: 'Failed',
  //       amount: 100.0,
  //       method: 'Credit Card',
  //       contactNo: '123-456-7890',
  //       date: '2023-01-15',
  //     },
  //     {
  //       id: 2,
  //       name: 'Jane Smith',
  //       status: 'Success',
  //       amount: 75.5,
  //       method: 'PayPal',
  //       contactNo: '987-654-3210',
  //       date: '2023-01-18',
  //     },
  //     {
  //       id: 3,
  //       name: 'Bob Johnson',
  //       status: 'Success',
  //       amount: 50.0,
  //       method: 'PayPal',
  //       contactNo: '1234567890',
  //       date: '2023-01-20',
  //     },
  //     {
  //       id: 4,
  //       name: 'Alice Brown',
  //       status: 'Failed',
  //       amount: 120.75,
  //       method: 'Venmo',
  //       contactNo: '5551234567',
  //       date: '2023-01-22',
  //     },
  //     {
  //       id: 5,
  //       name: 'Sam Wilson',
  //       status: 'Success',
  //       amount: 30.25,
  //       method: 'Stripe',
  //       contactNo: '7890123456',
  //       date: '2023-01-25',
  //     },
  //     {
  //       id: 6,
  //       name: 'Emily Davis',
  //       status: 'Failed',
  //       amount: 90.5,
  //       method: 'Apple Pay',
  //       contactNo: '1112223333',
  //       date: '2023-01-28',
  //     },
  //     {
  //       id: 7,
  //       name: 'Michael White',
  //       status: 'Success',
  //       amount: 60.0,
  //       method: 'CashApp',
  //       contactNo: '9998887777',
  //       date: '2023-01-30',
  //     },
  //     {
  //       id: 8,
  //       name: 'Olivia Black',
  //       status: 'Failed',
  //       amount: 45.75,
  //       method: 'Zelle',
  //       contactNo: '4445556666',
  //       date: '2023-02-02',
  //     },
  //     {
  //       id: 9,
  //       name: 'David Green',
  //       status: 'Success',
  //       amount: 85.5,
  //       method: 'Square Cash',
  //       contactNo: '2223334444',
  //       date: '2023-02-05',
  //     },
  //     {
  //       id: 10,
  //       name: 'Sophia Taylor',
  //       status: 'Pending',
  //       amount: 110.25,
  //       method: 'Stripe',
  //       contactNo: '6667778888',
  //       date: '2023-02-08',
  //     },
  //     // Add more payment data as needed
  //   ];
  //   const columnDefs = [
  //     { headerName: 'ID', field: 'id', checkboxSelection: true },
  //     { headerName: 'Name', field: 'name' },
  //     {
  //       headerName: 'Status',
  //       field: 'status',
  //       cellStyle: (params) => {
  //         let backgroundColor = '';
  //         let textColor = '';
  //         switch (params.value.toLowerCase()) {
  //           case 'failed':
  //             backgroundColor = '#FFEAEA';
  //             textColor = '#B83131';
  //             break;
  //           case 'success':
  //             backgroundColor = '#EDFFEA';
  //             textColor = '#165E3D';
  //             break;
  //           case 'pending':
  //             backgroundColor = '#FFF6E9';
  //             textColor = '#B5850B';
  //             break;
  //           default:
  //             backgroundColor = 'transparent';
  //         }
  //         return { background: backgroundColor, color: textColor };
  //       },
  //     },
  //     { headerName: 'Amount', field: 'amount' },
  //     { headerName: 'Method', field: 'method' },
  //     { headerName: 'Contact No', field: 'contactNo' },
  //     { headerName: 'Date', field: 'date' },
  //   ];
  //   const defaultColDef = {
  //     flex: 1,
  //     minWidth: 100,
  //     resizable: true,
  //     sortable: true,
  //     filter: true,
  //     floatingFilter: true,
  //     cellStyle: {
  //       padding: '8px', // Adjust padding as needed
  //       textAlign: 'start', // Adjust text alignment as needed
  //     },
  //   };
  //   const gridStyle = {
  //     border: '71px solid #ddd',
  //     borderRadius: '55px',
  //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  //   };
  //   return (
  //     <div
  //       className="ag-theme-alpine"
  //       style={{
  //         height: '100%',
  //         width: '100%',
  //       }}
  //     >
  //       <AgGridReact
  //         rowData={paymentData}
  //         columnDefs={columnDefs}
  //         defaultColDef={defaultColDef}
  //         pagination={true}
  //         paginationPageSize={10}
  //         gridStyle={gridStyle}
  //         rowHeight={60}
  //       />
  //     </div>
  //   );
};

export default Payment;
