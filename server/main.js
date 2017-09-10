import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';

import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration';

Meteor.startup(() => {

  WebApp.connectHandlers.use((req, res, next)=>{
    // console.log (req.url, req.method, req.headers, req.query);
    // res.statusCode = 404; //httpstatuses.com
    // res.setHeader('my-custom-header', 'Andrew was here');
    // res.write ('<h1>test</h1>');
    // res.end();
    // next();

    const _id = req.url.slice(1);
    const link = Links.findOne(_id);
    if (link) {
      
      res.statusCode = 302;
      res.setHeader ('Location', link.url);
      res.end();
      Meteor.call ('links.trackVisit', _id);
    } else {
      next ();
    }
  });

//     Meteor.methods ({

//     greetUser (x,y) {
//         if (typeof x ==='number' && typeof y ==='number') {
//             return x+y;
//         } else {
//             throw new Meteor.Error ('invalid-numbers', 'expected numbers to passed in RPC');
//         }
//         return null;
//     }
// });

//     Meteor.call('greetUser', 2, 2, (err, res)=> {
//       console.log ('Greet user arguments',  err, res);
//     });

  // const petSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max:200,
  //     optional:true
  //   },
  //   age: {
  //     type: Number,
  //     min: 0
  //   },
  //   contactNumber: {
  //     type: String,
  //     optional: true,
  //     regEx: SimpleSchema.RegEx.Phone
  //   }
  // });
  // petSchema.validate ({
  //   age:21,
  //   contactNumber: 'abc1234'
  // });
});
