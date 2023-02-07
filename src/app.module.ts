import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { join } from 'path';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Pet} from "./pets/pet.entity";
import { OwnersModule } from './owners/owners.module';
import {Owner} from "./owners/entities/owner.entity";
import * as process from "process";
require('dotenv').config()

@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      }),
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities: [
              // 'dist/**/*.entity{.ts,.jss}'
              Pet, Owner
          ],
          synchronize: true,
      }),
      PetsModule,
      OwnersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
