
const ga = process.env.NODE_ENV !== 'production' ? '' : (
    `<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-102282562-1', 'auto');
  ga('send', 'pageview');

</script>`
);

export default function html(routerWithContext, props) {
    const filename = '/client.js';
    const src = process.env.NODE_ENV !== 'production' ? `http://localhost:${process.env.DEV_SERVER_PORT}${filename}` : filename;
    return `
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>Hand-knotted, Artisan Rugs.</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                ${
                    process.env.NODE_ENV === 'production' ?
                    `<link rel="stylesheet" href="/styles.css" />`
                    :
                    ''
                }
                ${ga}
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

                <script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8"></script>
                <script src="${src}" defer></script>
            </body>
        </html>
    `;
}
