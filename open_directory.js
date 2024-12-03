function sendToDiscordWebhook(webhookURL, content) {
    return new Promise(function(resolve, reject){
        fetch(webhookURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              content: content
            }),
          })
          .then(response => {
            if (response.ok) {
              resolve(true);
            } else {
                resolve(false);
            }
          })
          .catch(error => {
            reject(false);
          });
    });

  }


export default {
  async fetch(request, env, ctx) {
  
  const url = new URL(request.url);
  const discordWebhookURL = "webHookURL"; // change this to your webhook
  await sendToDiscordWebhook(discordWebhookURL, `View: ${request.headers.get("cf-connecting-ip")}, ${url.pathname}`)
    
  const headers = new Headers({
    'Content-Type': 'text/html'
  });

  var html = `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
 <head>
  <title>Index of /home/suyogya/public_html</title>
 </head>
 <body>
<h1>Index of /home/suyogya/public_html</h1>
  <table>
   <tr><th valign="top">&nbsp;</th><th><a href="?C=N;O=D">Name</a></th><th><a href="?C=M;O=A">Last modified</a></th><th><a href="?C=S;O=A">Size</a></th><th><a href="?C=D;O=A">Description</a></th></tr>
   <tr><th colspan="5"><hr></th></tr>
<tr><td valign="top">&nbsp;</td><td><a href="/public/">Parent Directory</a>       </td><td>&nbsp;</td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top">&nbsp;</td><td><a href="files/">files/</a>                 </td><td align="right">2023-10-07 10:50  </td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top">&nbsp;</td><td><a href="files_old/">files_old/</a>             </td><td align="right">2019-03-25 05:38  </td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top">&nbsp;</td><td><a href="static/">static/</a>                </td><td align="right">2022-04-03 03:21  </td><td align="right">  - </td><td>&nbsp;</td></tr>
   <tr><th colspan="5"><hr></th></tr>
</table>

</body></html>
`

  if (url.pathname === "/message") {
    const messageParam = url.searchParams.get("message") || false;
    const discordUrl = "webHookURL"; // enter webhook URL for secret message endpoint
    if(messageParam){
        const discordStatus = await sendToDiscordWebhook(discordUrl, `${messageParam}, ${request.headers.get("cf-connecting-ip")}`);
        
        if (discordStatus){
            return new Response("Success", {
                status: 200,
                headers: headers
            });
        }else{
            return new Response("Fail", {
                status: 404,
                headers: headers
            });
        }

    } else {
        return new Response("Fail", {
            status: 404,
            headers: headers
        });
    }

  } else{
    return new Response(html, {
        status: 200,
        headers: headers
      });
  }


  },
};
