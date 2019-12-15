import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',

      host: this.getValue('MONGO_HOST'),
      port: parseInt(this.getValue('MONGO_PORT')),
      username: this.getValue('MONGO_USER'),
      password: this.getValue('MONGO_PASSWORD'),
      database: this.getValue('MONGO_DATABASE'),

      entities: ['src/**/*.entity{.ts,.js}'],
      useUnifiedTopology: true,
      synchronize: true
    };
  }

}

const configService = new ConfigService(process.env)
  .ensureValues([
    'MONGO_HOST',
    'MONGO_PORT',
    'MONGO_USER',
    'MONGO_PASSWORD',
    'MONGO_DATABASE'
  ]);

export { configService };