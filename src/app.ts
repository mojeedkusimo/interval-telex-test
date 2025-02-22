import express from 'express';
import cors from 'cors';
import axios from 'axios';

import {telexIntegrationConfig} from './telex-integration-config';

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

// app.get('/', async (req, res) => {
//   // console.log(req.body);

//   const call = await axios.get("https://google.com");
//   console.log(call.status);
  
//   res.json({
//     status: "success",
//     message: `You typed in ${req.body.message}, right?`,
//     username: "Uptime Monitor",
//     event_name: "Uptime Check"
//   })
//   // res.send('Updated package.json again x 3!');
// });

app.get('/webhook', async (req, res) => {

  // const sitreq
  try {
    const call = await axios.get("https://google.com");
    console.log(call.status);
  
    if (call.status === 200) {
  
     res.json({
        status: "success",
        message: `Website is up and running`,
        username: "Slack github test",
        event_name: "Uptime Check"
      })
    }
  
    else {
     res.json({
      status: "error",
      message: `Something is wrong with website`,
      username: "Uptime Monitor",
      event_name: "Uptime Check"
    })
  }
  } catch (e) {
    res.json({
      status: "error",
      message: e.message,
      username: "Uptime Monitor",
      event_name: "Uptime Check"
    })
  }

  // res.send('Updated package.json again x 3!');
});

app.get('/telex-integration-specification', (req, res) => {

  console.log(req);
  res.json(telexIntegrationConfig);
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});