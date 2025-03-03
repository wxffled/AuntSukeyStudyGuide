const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS (optional, you can remove this if you don't need it)
app.use(cors());

// Route that will proxy DuckDuckGo search
app.get('/', async (req, res) => {
    const query = req.query.q;  // Grab the search query parameter
    
    if (!query) {
        return res.status(400).send('Query parameter "q" is required');
    }

    try {
        // Use Axios to fetch results from DuckDuckGo (HTML search page)
        const response = await axios.get(`https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`);
        
        // Send the HTML response back to the client
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching DuckDuckGo results:', error);
        res.status(500).send('Error fetching DuckDuckGo results');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
