const aws = require('aws-sdk');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const exphbs = require('express-handlebars');
const path = require('path');

const transporter = nodemailer.createTransport({
  SES: new aws.SES(),
});

transporter.use('compile', hbs({
  viewEngine: exphbs({ extname: '.hbs' }),
  viewPath: '../../templates',
}));

function sendMail(options) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(Object.assign({
      from: 'no-reply@archadon.com',
    }, options), (err, info) => {
      if (err) {
        return reject(err);
      }
      return resolve(info);
    });
  });
}

module.exports = sendMail;
