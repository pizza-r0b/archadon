
export default function html(routerWithContext, props) {
    const filename = '/client.js';
    const src = process.env.NODE_ENV !== 'production' ? `http://localhost:${process.env.DEV_SERVER_PORT}${filename}` : filename;
    return `
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title></title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                ${
                    process.env.NODE_ENV === 'production' ?
                    `<link rel="stylesheet" href="/styles.css" />`
                    :
                    ''
                }
            </head>
            <body>
                <div id="app">${routerWithContext}</div>
                <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(props)};
                </script>
                <script src="https://use.typekit.net/vgi7zyh.js"></script>
                <script>try{Typekit.load({ async: true });}catch(e){}</script>
                <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
                <script>
                    Stripe.setPublishableKey('${process.env.STRIPE_PUBLIC_KEY}');
                </script>
                <script src="${src}" defer></script>
            </body>
        </html>
    `;
}
