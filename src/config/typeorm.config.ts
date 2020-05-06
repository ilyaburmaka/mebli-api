import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  migrationsRun: true,
  ssl: {
    rejectUnauthorized: false,
  },
  url:
    'postgres://pqrjleukloehdl:2715597aebaf39c5bf64872303c67c6d8833b745f5f721b8982ca5463c6880c3@ec2-52-6-143-153.compute-1.amazonaws.com:5432/d8dd5g7dhv5dpj',
  migrations: [__dirname + 'src/db/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};
