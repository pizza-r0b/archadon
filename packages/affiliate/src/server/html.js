import { readFileSync } from 'fs';
import { resolve } from 'path';

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
              <title>Archadon - Art for your floors - HANDCRAFTED FINE WOOL RUGS</title>
              <meta name="description" content="Each of our rugs is a handmade, one-of-a-kind, heirloom-quality piece. In a time when so much of what we consume is machine-made, owning something handcrafted can be a point of pride. Additionally, hand-knotted rugs with high-quality wool have a denser pile. Wool is also more stain- and soil-resistant and easier to clean than synthetic fibers. When cared for properly, your rug can last for generations." />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="https://assets.archadon.com/favicon.png">
              <link rel="apple-touch-icon" href="https://assets.archadon.com/favicon.png">
              ${
                  process.env.NODE_ENV === 'production' || process.env.DEV_DEPLOY ?
                  `<style>${css}</style>`
                  :
                  ''
              }
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
