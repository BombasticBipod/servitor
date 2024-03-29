const getPreformedEmbed = require('../utils/getPreformedEmbed');
const { prefix } = require('../config/data.json');
module.exports = {
    name: 'ping',
    description: 'echos the sent message or replies pong! if there is no content',
    execute: (message) => {

        let response_text = "pong!";
        const message_content_no_prefix = message.content.slice(prefix.length).split(' ');
        if(message_content_no_prefix.length > 1) {
            response_text = message_content_no_prefix.slice(1).join(' ');
        }
        message.channel.send(getPreformedEmbed.execute(message.client).setTitle(response_text));
    }
}