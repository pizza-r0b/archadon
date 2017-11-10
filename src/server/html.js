import { readFileSync } from 'fs';
import { resolve } from 'path';

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

const fb = process.env.NODE_ENV !== 'production' ? '' : (
    `
    <!-- Facebook Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '498852017156109');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=498852017156109&ev=PageView&noscript=1"
    /></noscript>
    <!-- DO NOT MODIFY -->
    <!-- End Facebook Pixel Code -->
    `
);

const css = readFileSync(resolve(resolve(), './public/styles.css'));
const vendor = readFileSync(resolve(resolve(), './public/vendor.js'));

export default function html(routerWithContext, props) {
  const client = '/client.js';
//   const vendor = '/vendor.js';
  const src = name => process.env.NODE_ENV !== 'production' && !process.env.DEV_DEPLOY ? `http://localhost:${process.env.DEV_SERVER_PORT}${name}` : name;
  return `
      <html>
          <head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <title>Hand-knotted, Artisan Rugs.</title>
              <meta name="description" content="" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="https://assets.archadon.com/favicon.png">
              <link rel="apple-touch-icon" href="https://assets.archadon.com/favicon.png">
              ${
                  process.env.NODE_ENV === 'production' || process.env.DEV_DEPLOY ?
                  `<style>${css}</style>`
                  :
                  ''
              }
              ${ga}
              ${fb}
          </head>
          <body>
              <div id="app">${routerWithContext}</div>
              <script>
                  window.__INITIAL_STATE__ = ${JSON.stringify(props)};
              </script>
              <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
              <script>
                  Stripe.setPublishableKey('${process.env.STRIPE_PUBLIC_KEY}');
              </script>

              <script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8"></script>
              <script>${vendor}</script>
              <script src="${src(client)}" defer></script>
          </body>
      </html>
  `;
}
