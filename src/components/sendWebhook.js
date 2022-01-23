import discordInfo from '../data/data.json';
import request from 'request';

const sendWebhook = async (values) => {
    try{
      const embed = {
        username: discordInfo.username,
        avatarURL: discordInfo.avatar_url,
        embeds: [
          {
            color: 16776960,
            title: "NEW QUERY | ASK ENACTUS",
            author: {
              name: "Ask Enactus | Enactus Thapar",
              icon_url: discordInfo.avatar_url,
            },
            timestamp: Date().toLocaleString(),
            fields: [
              {
                name: "Email:",
                value: values.email,
                inline: true,
              },
              {
                name: "Phone:",
                value: values.phone,
                inline: true,
              },
              {
                name: "Question:",
                value: values.question,
                inline: true,
              },
            ],
          },
        ],
      };
      request.post({
        url: discordInfo.webhook,
        followAllRedirects: true,
        simple: false,
        resolveWithFullResponse: true,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(embed),
      });
    }catch(e){
      console.log('Error in response');
    }
  }

  export default sendWebhook;