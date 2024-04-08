'use client'
import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar'; // Import the NavBar component
import Image from 'next/image';


const requestPage = () => {

  const [value, setValue] = useState(null);
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [discordID, setDiscordID] = useState('');

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
  const handleDiscordIDChange = (event) => {
    setDiscordID(event.target.value);
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
          Subject: `Commission Email from Email: ${email}, Discord ID: ${discordID}`,
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
        console.error('Email sent successfully');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      {/* Your page content */}
      <h1 className="text-4xl font-bold text-center mb-8 z-10"></h1>
      <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <select value={value} onChange={handleSelectChange} style={{ backgroundColor: 'white', color: 'black', border: '1px solid white' }}>
        <option value="1">Custom Icon And Banner</option>
        <option value="2">Character Illustration</option>
        <option value="3">V-Tuber Creation</option>
      </select>
      {value === "1" && (
    <Image
      src="/assets/card1.png"
      alt="Service Card 1"
      width={400}
      height={100}
      style={{ paddingTop: '10px' }} // Add padding to the top of the image
    />
  )}
  {value === "2" && (
    <Image
      src="/assets/card2.png"
      alt="Service Card 2"
      width={400}
      height={100}
      style={{ paddingTop: '10px' }} // Add padding to the top of the image
    />
  )}
  {value === "3" && (
    <Image
      src="/assets/card3.png"
      alt="Service Card 3"
      width={400}
      height={100}
      style={{ paddingTop: '10px' }} // Add padding to the top of the image
    />
  )}
      <p>Email Address:</p> 
      <input type="text" value={email} onChange={handleEmailChange} placeholder="Enter email" style={{ 
        backgroundColor: 'white', color: 'black', border: '1px solid white' }} />
        <p>Discord ID (Optional):</p> 
      <input type="text" value={discordID} onChange={handleDiscordIDChange} placeholder="Enter discord ID" style={{ 
        backgroundColor: 'white', color: 'black', border: '1px solid white' }} />
      <p>Description:</p> 
      <div style={{ width: '100%', maxWidth: '550px' }}>
      <div style={{ display: 'flex', justifyContent: 'center'  }}>
  <textarea
    id="description"
    value={description}
    onChange={handleDescriptionChange}
    placeholder="Enter description"
    style={{
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid white',
      resize: 'vertical', // Allow vertical resizing
      minHeight: '200px', // Set minimum height
      paddingTop: '8px', // Adjust padding for text to start from top left
      width: '100%', // Adjust width to fill its parent container
      boxSizing: 'border-box', // Include padding and border in the width calculation

    }}
  />
  </div>
</div>
      <button onClick={handleSubmit}> Submit</button>
    </div>
    </div>
  );
};
export default requestPage;