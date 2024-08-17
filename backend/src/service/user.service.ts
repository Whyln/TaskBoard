import { Provide } from '@midwayjs/core';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';


const USERS_FILE = path.join(__dirname, '../../../database/users.json');

@Provide()
export class UserService {
  private async readUsersFile(): Promise<any[]> {
    if(!fs.existsSync(USERS_FILE)) {
      console.log('No users file found, creating a new one at', USERS_FILE);
      await fs.promises.writeFile(USERS_FILE, '[]');
      return [];
    }
    const users = await fs.promises.readFile(USERS_FILE, 'utf8');
    return JSON.parse(users);
  }
  private async writeUsersFile(users: any[]): Promise<void> {
    await fs.promises.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
  }

  async login(username: string, password: string): Promise<any|null> {
    const users = await this.readUsersFile();
    const user = users.find(user => user.username === username);
    if(!user)throw new Error('User not found');
    if(user.password !== password)throw new Error('Invalid password');
    
    console.log("User logged in", user);

    return user;
  }

  async register(username:string ,password:string): Promise<any|null> {
    const users = await this.readUsersFile();
    const user = users.find(user => user.username === username);
    if(user) throw new Error('User already exists');
    const newUser = {
      id: uuidv4(),
      username,
      password
    };
    users.push(newUser);
    await this.writeUsersFile(users);

    console.log("User registered", newUser);
    
    return newUser;
  }
  
  async getUserById({ id }): Promise<any> {
    const users = await this.readUsersFile();
    const user = users.find(user => user.id === id);
    if(!user)throw new Error('User not found');
    return user;
  }

  async unsubscribe({ id }): Promise<any> {
    const users = await this.readUsersFile();
    const userIndex = users.findIndex(user => user.id === id);
    if(userIndex === -1)throw new Error('User not found');
    const user = users[userIndex];
    users.splice(userIndex, 1);
    await this.writeUsersFile(users);
    console.log("User unsubscribed", user);
    return user;
  }
}
