var user = { firstName : 'Lukasz', lastName : 'Wojcik', age : 31 };

console.log(`My first name ${user.firstName} and last name : ${user.lastName} (${user.age})`)

var html = `<div>
              <div>${user.firstName}</div>
            </div>`;

var start = 'teststring'.startsWith('test');
var end = 'teststring'.endsWidth('ing');

console.log({ start, end });
