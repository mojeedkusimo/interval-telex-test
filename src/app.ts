import express from 'express';
import cors from 'cors';
import axios from 'axios';

import { telexIntegrationConfig } from './telex-integration-config';

const app = express();
app.use(express.json());
// app.use(cors());
const port = 3000;

app.get('/', async (req, res) => {

  const call = await axios.get("https://google.com");
  console.log(call.status);

  res.json({
    status: "success",
    message: `Google site is going fine!!`,
    username: "Uptime Monitor",
    event_name: "Uptime Check"
  })
});

app.post('/webhook', async (req, res) => {

  try {

    console.log(req.body);
    const url = "https://ping.telex.im/v1/webhooks/01952b31-501e-7104-8f54-edbca5141040";
    const data = {
      "event_name": "github-push-demo",
      "message": "there was a push event on your repo",
      "status": "success",
      "username": "github notification app"
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
      

    res.json({
      status: "success",
      message: `Website is up and running`,
      username: "Github webhook test",
      event_name: "Uptime Check"
    })

  } catch (e) {
    res.json({
      status: "error",
      message: e.message,
      username: "Uptime Monitor",
      event_name: "Uptime Check"
    })
  }

});

app.get('/telex-integration-specification', (req, res) => {

  res.json(telexIntegrationConfig);
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});