// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(profile: any): Promise<any> {
    const { googleId, displayName, email, accessToken } = profile;
    let user = await this.userModel.findOne({ googleId });

    if (!user) {
      user = new this.userModel({
        googleId,
        displayName,
        email,
        accessToken,
      });
      await user.save();
    }
    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.googleId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
