'use client'
import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar'; // Import the NavBar component



const requestPage = () => {

  const [value, setValue] = useState(null);
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Parse the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('v');

    // Update the state with the parsed value
    setValue(value);
  }, []);
  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async () => {
    try {
      const mailjetApiKey = '538e13fbfb551c395fd24ef4b2f5422b';
      const mailjetApiSecret = '2def79d8eae16dc4bdfcdee12bf5aad3';
  
      const response = await fetch('https://prim-1ed6100f7f0f.herokuapp.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: description,
        email: email,
        apiKey: mailjetApiKey,
        apiSecret: mailjetApiSecret,
        emailData: {
          From: {
            Email: 'michaelbarbuzano2@yahoo.com',
            Name: 'Your Name',
          },
          To: [
            {
              Email: 'michaelbarbuzano2@yahoo.com',
              Name: 'Recipient Name',
            },
          ],
          Subject: `Commission Email from ${email}`,
          TextPart: `Description: ${description}`,
        },
        // Include description and email values in the request body
      }),
    });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
  
      const result = await response.text(); // Read the response as plain text
      console.log(result); // Log the plain text response
  
      // Optionally, you can check if the response indicates success or failure
      if (result === 'Email sent successfully') {
        // Handle success
        console.log('Email sent successfully');
      } else {
        // Handle failure
        console.error('Email sending failed');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      {/* Your page content */}
      <h1 className="text-4xl font-bold text-center mb-8 z-10">Services</h1>
      <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <p>Integer Value: {value}</p>
      <select value={value} onChange={handleSelectChange} style={{ backgroundColor: 'white', color: 'black', border: '1px solid white' }}>
        <option value="1">Commission Number 1</option>
        <option value="2">Commission Number 2</option>
        <option value="3">Commission Number 3</option>
      </select>
      <p>Description:</p> 
      <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Enter description" style={{ backgroundColor: 'white', color: 'black', border: '1px solid white' }} />
      <p>Email Address:</p> 
      <input type="text" value={email} onChange={handleEmailChange} placeholder="Enter email" style={{ backgroundColor: 'white', color: 'black', border: '1px solid white' }} />
      <button onClick={handleSubmit}> Submit</button>
    </div>
    </div>
  );
};
export default requestPage;