import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      // clientID: process.env.GOOGLE_CLIENT_ID,
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // callbackURL: process.env.GOOGLE_CALLBACK_URL,
      clientID: "",
      clientSecret: "",
      callbackURL: "http://localhost:3000/auth/google/redirect",
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { id, displayName, emails } = profile;
    const user = await this.authService.validateUser({
      googleId: id,
      displayName,
      email: emails[0].value,
      accessToken,
    });
    done(null, user);
  }
}
