const axios = require('axios');

async function getUsers() {

    return await axios.get('/api/users');
}

async function getContacts() {

    return await axios.get('/api/contacts');
    
}

async function getAddresses() {

    return await axios.get('/api/addresses');
    
}

export async function getUserInfo() {

    try{
        
        const users = await getUsers();
        const contacts = await getContacts();
        const addresses = await getAddresses();
        const result = [];
        
        users.data.map((user) => {
          result.push({
            ...user, 
            ...contacts.data.find((contact) => contact.userId === user.userId), 
            ...addresses.data.find((address) => address.userId === address.userId)})
        });
        console.log(result)
        return result;
        
    }catch(error) {
        return [];
    }
}