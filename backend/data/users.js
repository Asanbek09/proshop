import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('4321', 10),
    isAdmin: true
  }, 
  {
    name: 'Leroy Smith',
    email: 'leroy.smith@gmail.com',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'Jin Kazama',
    email: 'jin.kazama@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Armor King',
    email: 'armor.king@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users