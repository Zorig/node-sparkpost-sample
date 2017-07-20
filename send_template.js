var key = '<API key>'
  , SparkPost = require('sparkpost')
  , client = new SparkPost(key);

/**
 * 
 * @param {string} template_id  sparkpost дээрх тэмплэйтийн id
 * @param {object} substitution_data тэмплэйтээс шалтгаалан орлуулах түлхүүр үг бүхий object байх жишээ нь {name: 'John Doe', company: 'test LLC'}
 * @param {array} recipients  жишээ нь [
      {
        address: {
          email: 'test1@test.com',
          name: 'John Doe'
        }
      }
      , {
        address: {
          email: 'test2@test.com'
        }
      }
      , {
        address: {
          email: 'test3@test.com'
        }
      }
    ]
 */

function send_email(template_id, recipients, substitution_data) {
  var transmission = {
    'content': {
      'template_id': template_id
    },
    'recipients': recipients,
    'substitution_data': substitution_data
  },
    options = {
      num_rcpt_errors: 3,
      sandbox: true
  }
  // Promise
  client.transmissions.send(transmission, options).then(data => {
    console.log('Амжилттай!');
    console.log(data);
    }).catch(err => {
      console.log('Whoops! Something went wrong');
      console.log(err);
    });
}
var recipients_list = [
      {
        address: {
          email: 'test@test.co',
          name: 'MRTEST'
        }
      }];
send_email('my-first-email',  recipients_list, {name: 'John Doe', company: 'test LLC'});
