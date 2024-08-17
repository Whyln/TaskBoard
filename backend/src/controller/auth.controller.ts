// src/controller/auth.controller.ts
import { Body, Controller, Post,Inject,Query,Get } from '@midwayjs/core';
import { UserService } from '../service/user.service';



@Controller('/auth')
export class AuthController {
    // Inject the user service
    @Inject()
    userService: UserService;

    @Get('/get_user')
    async getUserById(@Query('id') id) {
        if(!id) return { success: false, message: 'User ID is required' };
        try{
            const user = await this.userService.getUserById({ id });
            return { "success": true, "userInfo": user };
        }catch(e){
            return { "success": false, "message": e.message };
        }        
    }

  @Post('/register')
  async register(@Body() body: { username: string; password: string }) {
    if (!body.username || !body.password) {
      return { "success": false, "message": 'Username and password are required' };
    }
    const { username, password } = body;
    try {
      const user = await this.userService.register(username, password);
      return { "success": true, "userInfo":user };
    }catch(e){
        return { "success": false, "message": e.message };
    }
  }

  @Post('/login')
  async login(@Body() body: { username: string; password: string }) {
    if (!body.username || !body.password) {
      return { "success": false, "message": 'Username and password are required' };
    }
    const { username, password } = body;
    try {
      const user = await this.userService.login(username, password);
      return { "success": true, "userInfo":user };
    }catch(e){
        return { "success": false, "message": e.message};
    }
  }

  @Post('/unsubscribe')
    async unsubscribe(@Body() body: { id: string }) {
        if (!body.id) {
            return { "success": false, "message": 'User ID is required' };
        }
        const { id } = body;
        try {
            const user = await this.userService.unsubscribe({ id });
            return { "success": true, "userInfo":user };
        }catch(e){
            return { "success": false, "message": e.message };
        }
    }
}