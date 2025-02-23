const url = "https://ping.telex.im/v1/webhooks/01952b31-501e-7104-8f54-edbca5141040";
const data = {
  "event_name": "string",
  "message": "javascript post",
  "status": "success",
  "username": "collins"
};

fetch(url, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(console.log)
.catch(console.error);