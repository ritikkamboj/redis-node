const client = require('./client')

async function init() {
    const result = await client.get("user:3");
    console.log("results is ", result)
}

init();