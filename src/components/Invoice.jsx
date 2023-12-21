import React from 'react';
import { UilTrashAlt, UilPlusCircle } from '@iconscout/react-unicons';
import { useState, useRef } from 'react';

const Invoice = () => {
  const [invoiceItems, setInvoiceItems] = useState([
    { sr: 1, item: '', price: '', quantity: '', total: '' },
  ]);

  const invoiceContainerRef = useRef(null);

  const addRow = () => {
    setInvoiceItems((prevItems) => [
      ...prevItems,
      {
        sr: prevItems.length + 1,
        item: '',
        price: '',
        quantity: '',
        total: '',
      },
    ]);
  };

  const deleteRow = (sr) => {
    setInvoiceItems((prevItems) => prevItems.filter((item) => item.sr !== sr));
  };

  const handleInputChange = (sr, field, value) => {
    setInvoiceItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.sr === sr
          ? {
              ...prevItem,
              [field]: value,
              total:
                field === 'price' || field === 'quantity'
                  ? calculateTotal(prevItem.price, prevItem.quantity)
                  : prevItem.total,
            }
          : prevItem
      )
    );
  };

  const calculateTotal = (price, quantity) => {
    // Convert price and quantity to numbers
    const numericPrice = parseFloat(price);
    const numericQuantity = parseFloat(quantity);

    // Check if the inputs are valid numbers
    if (isNaN(numericPrice) || isNaN(numericQuantity)) {
      return ''; // or any default value you want to display
    }

    // Check if quantity is not zero to avoid division by zero
    if (numericQuantity === 0) {
      return 0; // or any default value you want to display
    }

    // Calculate the total
    const total = numericPrice * numericQuantity;

    // Return the total
    return total;
  };

  const calculateSubtotal = () => {
    let subtotal = 0;

    // Iterate through each item in the invoiceItems array
    invoiceItems.forEach((item) => {
      // Convert price and quantity to numbers
      const numericPrice = parseFloat(item.price);
      const numericQuantity = parseFloat(item.quantity);

      // Check if the inputs are valid numbers
      if (!isNaN(numericPrice) && !isNaN(numericQuantity)) {
        // Calculate the total for each item and add it to the subtotal
        subtotal += numericPrice * numericQuantity;
      }
    });

    // Return the calculated subtotal
    return subtotal.toFixed(2); // Adjust to the desired number of decimal places
  };
  const [selectedGST, setSelectedGST] = useState(5);

  const handleGSTchange = (event) => {
    setSelectedGST(parseInt(event.target.value, 10));
  };

  const tax = () => {
    // Convert subtotal to a number
    const numericSubtotal = parseFloat(calculateSubtotal());

    // Check if the subtotal is a valid number
    if (isNaN(numericSubtotal)) {
      return ''; // or any default value you want to display
    }

    // Calculate tax based on selected GST rate
    const taxAmount = (numericSubtotal * selectedGST) / 100;

    // Return the calculated tax amount
    return taxAmount.toFixed(2); // Adjust to the desired number of decimal places
  };
  const netTotal = () => {
    const numericSubtotal = parseFloat(calculateSubtotal());
    const numericTax = parseFloat(tax());

    if (isNaN(numericSubtotal) || isNaN(numericTax)) {
      return '';
    }
    const total = numericSubtotal + numericTax;

    return total.toFixed(2);
  };
  const printInvoice = () => {
    if (invoiceContainerRef.current) {
      const originalDisplay = invoiceContainerRef.current.style.display;
      invoiceContainerRef.current.style.display = 'block';
      window.print();
      invoiceContainerRef.current.style.display = originalDisplay || '';
    } else {
      console.error("Ref 'invoiceContainerRef' not found.");
    }
  };

  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  console.log(phoneNumber);

  return (
    <div>
      <div>
        <h1>Invoice </h1>
        <div className="flex justify-between mt-6 border border-border-stroke rounded-lg p-8 bg-white shadow-lg">
          <div>
            <h1>Invoice ID:</h1>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => printInvoice('invoice-container')}
              className="py-2 px-4 rounded-md b border border-blue-500 text-sm font-semibold hover:text-white hover:bg-blue-600"
            >
              Print Invoice
            </button>
            <button className="py-2 px-4 rounded-md b border border-blue-500 text-sm font-semibold hover:text-white hover:bg-blue-600">
              Send Invoice
            </button>
          </div>
        </div>
        <div
          id="invoice-container"
          ref={invoiceContainerRef}
          className=" invoice-container flex flex-col justify-between mt-6 border border-border-stroke rounded-lg p-8 bg-white shadow-lg"
        >
          <div className="flex flex-row justify-between gap-4 w-full my-4 ">
            <div className="flex  gap-4">
              <span className="bg-gray-light py-2 px-4 rounded-md font-semibold">
                Invoice ID{' '}
              </span>
              <input
                className="border-border-stroke w-[250px] border rounded-lg py-2 px-4 outline-none focus:border-indigo-400"
                type="number"
                placeholder="Enter Invoice Number"
                id="invoiceId"
              />
            </div>
            <div className="flex gap-4">
              <span className="bg-gray-light py-2 px-4 rounded-md font-semibold">
                Company Name{' '}
              </span>
              <input
                className="border-border-stroke border rounded-lg py-2 px-4 outline-none focus:border-indigo-400"
                type="Text"
                placeholder="Enter Company Name"
                id="CompanyName"
              />
            </div>
          </div>
          <hr className="text-slate-500 border-dashed my-4 w-10/12 mx-auto" />
          <div className="flex justify-start gap-14 w-full my-4">
            <div className="flex  gap-4">
              <span className=" w-[100px] text-center  bg-gray-light py-2 px-4 rounded-md font-semibold">
                Issued{' '}
              </span>
              <input
                className=" w-[250px] border-border-stroke border rounded-lg py-2 px-4 outline-none focus:border-indigo-400"
                type="date"
                placeholder="Issued Date"
                id="Issued"
              />
            </div>
            <div className="flex gap-4">
              <span className="  text-center bg-gray-light py-2 px-4 rounded-md font-semibold">
                Phone No{' '}
              </span>
              <input
                className="border-border-stroke border rounded-lg py-2 px-4 outline-none focus:border-indigo-400"
                type="Text"
                placeholder="Enter Phone Number"
                id="phoneNumber"
                maxLength={10}
                value={phoneNumber}
                onChange={handlePhoneInputChange}
              />
            </div>
          </div>
          <div className="flex flex-row justify-start gap-14 w-full my-4">
            <div className="flex  gap-4">
              <span className="w-[100px] text-center bg-gray-light py-2 px-4 rounded-md font-semibold">
                From{' '}
              </span>
              <input
                className="w-[250px] border-border-stroke border rounded-lg py-2 px-4 outline-none focus:border-indigo-400"
                type="text"
                placeholder="Enter Details"
                id="from"
              />
            </div>
            <div className="flex gap-4">
              <span className="w-[100px] text-center bg-gray-light py-2 px-4 rounded-md font-semibold">
                To{' '}
              </span>
              <input
                className="w-[250px] border-border-stroke border rounded-lg py-2 px-4 outline-none focus:border-indigo-400"
                type="Text"
                placeholder="Enter Detail"
                id="to"
              />
            </div>
          </div>
          <div className="mt-10">
            Invoice Items
            <div className="rounded-lg">
              <table className="w-full border border-border-stroke rounded-lg ">
                <thead className=" border border-border-stroke rounded-lg ">
                  <tr>
                    <th className="py-2 px-4"># Sr </th>
                    <th className="py-2 px-4">Details</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Quantity</th>
                    <th className="py-2 px-4">Total Price</th>
                  </tr>
                </thead>
                <tbody id="tBody">
                  {invoiceItems.map((item, index) => (
                    <tr
                      key={index}
                      className="text-center items-center border border-border-stroke"
                    >
                      <td>{item.sr}</td>
                      <td>
                        <input
                          className="py-2 px-4 border border-border-stroke focus:border-indigo-400 outline-none rounded-md my-2"
                          type="text"
                          placeholder="Item"
                          value={item.item}
                          onChange={(e) =>
                            handleInputChange(item.sr, 'item', e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="py-2 px-4 border border-border-stroke focus:border-indigo-400 outline-none rounded-md "
                          type="number"
                          placeholder="Price"
                          value={item.price}
                          onChange={(e) =>
                            handleInputChange(item.sr, 'price', e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="py-2 px-4 border border-border-stroke focus:border-indigo-400 outline-none rounded-md "
                          type="number"
                          placeholder="Quantity"
                          value={item.quantity}
                          onChange={(e) =>
                            handleInputChange(
                              item.sr,
                              'quantity',
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>{calculateTotal(item.price, item.quantity)}</td>
                      <td>
                        <button
                          onClick={() => deleteRow(item.sr)}
                          className="py-2 px-4 rounded-md b border border-white text-sm font-semibold my-5 text-white bg-red-500"
                        >
                          <UilTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={addRow}
                className=" print:hidden flex  gap-3 items-center py-2 px-4 rounded-md b border border-white text-sm font-semibold my-5 text-white bg-blue-600"
              >
                <UilPlusCircle />
                Add Item
              </button>
            </div>
            <div className="my-10 flex   mr-20">
              <h1 className="py-2 px-4 print:hidden ">Please Select GST</h1>
              <select
                className=" print:hidden w-72 border-border-stroke border py-2 px-4 rounded-lg outline-none"
                name="gst"
                id=""
                placeholder="Please Select GST"
                onChange={handleGSTchange}
                value={selectedGST}
              >
                <option value={5}>5%</option>
                <option value={12}>12%</option>
                <option value={18}>18%</option>
                <option value={28}>28%</option>
                <option value={0}>With Out GST</option>
              </select>
            </div>
            <div className="flex justify-end mr-20">
              <div>
                <div className="font-semibold text-lg text-end flex justify-between gap-10">
                  <h1 className="text-gray">Sub Total : </h1>
                  <span className="text-start"> {calculateSubtotal()}</span>
                </div>
                <div className="font-semibold text-lg text-end flex justify-between gap-10">
                  <h1 className="text-gray"> GST ({selectedGST}%) : </h1>
                  <span className="text-start"> {tax()}</span>
                </div>
                <div className=" mt-4 font-semibold text-lg text-blue-600 text-end flex justify-between gap-10">
                  <h1>Total : </h1>
                  <span className="text-start">{netTotal()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
