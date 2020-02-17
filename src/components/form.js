import React, { useState } from "react"

const Contact= () => {
  const [ data, setData ] = useState({})


  const handleSubmit = e => {
    const fields = {"fields": {"Name": data.name, "Notes": data.notes}}
    fetch("https://api.airtable.com/v0/appZIRfmaKuc0qMGi/Table%201 ", {
      method: "POST",
      headers: {"Authorization": `Bearer ${process.env.GATSBY_AIRTABLE_API}`,
                "Content-Type": "application/json"},
      body: JSON.stringify(fields)
    })
    .then(() => alert("Form Sent!"))
    .catch(error => alert(error))
  
    e.preventDefault();
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