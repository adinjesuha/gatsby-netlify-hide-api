import React, { useState } from "react"
import { navigate } from "gatsby-link"

const Contact= () => {
  const [ data, setData ] = useState({})


  const handleSubmit = e => {
    e.preventDefault();

    const fields = {
      "fields": {
        "Name": data.name, 
        "Notes": data.notes
      }
    }

    fetch("../../.netlify/functions/airtable", {
      method: "POST",
      body: JSON.stringify(fields)
    })
    .then(() => setData({}))
    .then(() => navigate('/page-2'))
    .catch(error => alert(error))
  }
  
  const handleChange = e => setData({
    ...data,
    [e.target.name]: e.target.value
  })

  return(
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Notes
        <input type="text" name="notes" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contact