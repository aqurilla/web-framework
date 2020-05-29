import { User } from './models/User';

const user = new User({});

user.set({ name: 'newname', age: 999 });

console.log(user.get('name'));
console.log(user.get('age'));
