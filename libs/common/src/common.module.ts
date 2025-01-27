/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  providers: [],
  exports: [],
  imports: [DatabaseModule, ConfigModule],
})
export class CommonModule {}
