/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  providers: [],
  exports: [],
  imports: [DatabaseModule, ConfigModule, LoggerModule],
})
export class CommonModule {}
