// 
const os = require('os');

const user = os.userInfo();
console.log(user);


// methord returns the system uptime in seconds
console.log(os.uptime());


const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS);

