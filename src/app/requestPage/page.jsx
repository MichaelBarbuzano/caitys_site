'use client'
import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar'; // Import the NavBar component
import mailjet from 'node-mailjet';
const mailjetClient = mailjet.apiConnect('538e13fbfb551c395fd24ef4b2f5422b', '2def79d8eae16dc4bdfcdee12bf5aad3',
);


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
    const request = mailjetClient
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": "primrosevt@primrosevt.com",
            "Name": "Michael"
          },
          "To": [
            {
              "Email": "primrosevt@primrosevt.com",
              "Name": "Michael"
            }
          ],
          "Subject": "Greetings from Mailjet.",
          "TextPart": "My first Mailjet email",
          "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
          "CustomID": "AppGettingStartedTest"
        }
      ]
    })
    request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log(err.statusCode)
      });
  
    try {
      const result = await request;
      console.log(result);
    } catch (err) {
      console.error(err);
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