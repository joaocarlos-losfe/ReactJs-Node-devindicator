const bcrypt = require("bcrypt");

async function encriptData (data)
{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(data, salt);
}

async function decryptData(data_for_comparison, data)
{
    return await bcrypt.compare(data, data_for_comparison);    
}

module.exports = {encriptData, decryptData}