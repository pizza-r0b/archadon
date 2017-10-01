const aws = require('aws-sdk');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const exphbs = require('express-handlebars');
const path = require('path');

const transporter = nodemailer.createTransport({
  SES: new aws.SES(),
});

transporter.use('compile', hbs({
  viewEngine: exphbs(),
  viewPath: path.resolve(__dirname, '../../templates'),
  extName: '.hbs',
}));

function sendMail(options) {
  return new Promise((resolve, reject) => {
    console.log('begin send mail');
    transporter.sendMail(Object.assign({
      from: 'no-reply@archadon.com',
    }, options), (err, info) => {
      if (err) {
        console.log('ERR', err);
        return reject(err);
      }
      console.log('No error', info);
      return resolve(info);
    });
  });
}

module.exports = sendMail;
