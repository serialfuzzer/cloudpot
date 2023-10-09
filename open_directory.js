export default {
    async fetch(request, env, ctx) {
        
        const url = new URL(request.url);
        const headers = new Headers({
            'Content-Type': 'text/html'
        });
        
        var html = `
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
        <html>
        <head>
        <title>Index of /var/www/public_html</title>
        </head>
        <body>
        <h1>Index of /var/www/public_html</h1>
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
        
        return new Response(html, {
            status: 200,
            headers: headers
        });
          
    },
};