const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatpractice');

}

const Allchat = [
    { from: 'Alice', to: 'arya', msg: "hey arya how are you", created_at: new Date(), },
    { from: 'Bob', to: 'babli', msg: "are you excited to interview", created_at: new Date(), },
    { from: 'Charlie', to: 'chaman', msg: "are you ready to go college", created_at: new Date(), },
    { from: 'Diana', to: 'Diskha', msg: "Hey Diksha how are you", created_at: new Date(), },
];

Chat.insertMany(Allchat)
    // .then((docs) => {
    //     console.log('Inserted users:', docs);
    // })
    // .catch((error) => {
    //     console.error('Error inserting users:', error);
    // });