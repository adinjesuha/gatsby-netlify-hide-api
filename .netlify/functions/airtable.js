exports.handler = async (event, context, callback) => {

  const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}

  try {
    let response = await fetch("https://api.airtable.com/v0/appZIRfmaKuc0qMGi/Table%201", {
      method: event.httpMethod,
      headers: {
        "Authorization": `Bearer ${process.env.GATSBY_AIRTABLE_API}`, 
        "Content-Type": "application/json"
      },
      body: event.body
    })
    let data = await response.json()
    await pass(data)
  } 
  
  catch(err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({error: err.message})
    }
    await pass(error)
  }
  
}
