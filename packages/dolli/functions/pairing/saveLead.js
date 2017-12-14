import connect from 'utils/mongoConnect';
import addCors from 'utils/corsRes';
import Lead from 'schemas/Lead';
import sendMail from 'utils/sendMail';

function sendPairedRugsEmail(id, email) {
  return sendMail({
    to: email,
    subject: 'Your saved rugs paired by AI! From Archadon.com 💻❤️😄',
    template: 'savePair',
    from: 'noreply@archadon.com',
    context: {
      url: `https://www.archadon.com/pair-room/${id}`,
    },
  });
}

async function _saveLead(event, context, callback) {
  if (event.source === 'cloudwatch-event') {
    return callback();
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }

  if (!data) {
    callback(null, addCors({
      statusCode: 400,
    }));
    return;
  }

  const { email, imageKey, filters, colors } = data;

  if (!email || !imageKey || !filters) {
    callback(null, addCors({
      statusCode: 400,
    }));
    return;
  }

  const existingLeads = await Lead.find({ email }).lean().exec();
  let existingLead;
  if (Array.isArray(existingLeads) && existingLeads.length && (existingLead = existingLeads.find(doc => doc.imageKey === imageKey))) { // eslint-disable-line no-cond-assign
    const { _id: id } = existingLead;

    await sendPairedRugsEmail(id, email);

    callback(null, addCors({
      statusCode: 200,
    }));
    return;
  }

  const lead = new Lead({
    email,
    imageKey,
    filters,
    colors,
  });
  const savedLead = await lead.save();
  const id = savedLead.get('_id');

  await sendPairedRugsEmail(id, email);

  callback(null, addCors({
    statusCode: 200,
  }));
}

export const saveLead = connect(_saveLead);
