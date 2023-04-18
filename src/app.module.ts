import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Album } from "./album/album.entity";
import { Comment } from "./comment/comment.entity";
import { Prize } from "./prize/prize.entity";
import { Track } from "./track/track.entity";
import { CollectorAlbum } from './collectoralbum/collectoralbum.entity';
import { Band } from './band/band.entity';
import { Collector } from './collector/collector.entity';
import { Musician } from './musician/musician.entity';
import { Performer } from './performer/performer.entity';
import { PerformerPrize } from './performerprize/performerprize.entity';

import { RecordLabelModule } from './recordlabel/recordlabel.module';
import { PrizeModule } from './prize/prize.module';
import { TrackModule } from './track/track.module';
import { CollectorModule } from './collector/collector.module';
import { PerformerModule } from './performer/performer.module';
import { BandModule } from './band/band.module';
import { MusicianModule } from './musician/musician.module';
import { AlbumModule } from './album/album.module';
import { GenreModule } from './genre/genre.module';
import { CommentModule } from './comment/comment.module';
import { CollectorAlbumModule } from './collectoralbum/collectoralbum.module';
import { AlbumstatusModule } from './albumstatus/albumstatus.module';
import { PerformerprizeModule } from './performerprize/performerprize.module';
import { BandmusicianModule } from './bandmusician/bandmusician.module';
import { MusicianAlbumModule } from './musicianalbum/musicianalbum.module';
import { BandAlbumModule } from './bandalbum/bandalbum.module';
import { CollectorPerformerModule } from './collectorperformer/collectorperformer.module';
import { AlbumBandModule } from './albumband/albumband.module';
import { AlbumMusicianModule } from './albummusician/albummusician.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_URL && process.env.DATABASE_URL.replace('postgres://','').split(':')[1].split('@')[1] || process.env.DATABASE_URL || process.env.DB_HOST || 'ec2-34-202-127-5.compute-1.amazonaws.com',
      port: 5432,
      username: process.env.DATABASE_URL && process.env.DATABASE_URL.replace('postgres://','').split(':')[0] || process.env.DB_USER || 'kuyhyxvdzrpet',
      password: process.env.DATABASE_URL && process.env.DATABASE_URL.replace('postgres://','').split(':')[1].split('@')[0] || process.env.DB_PASSWORD || 'e87bb1e362686c33d8ca20cc7efe96fa952e2e4014f3eb43dcca80556290f19e',
      database: process.env.DATABASE_URL && process.env.DATABASE_URL.split('/')[3] || process.env.DB_NAME || 'dfk1jp3l196po2',
      entities: [Album, CollectorAlbum, Band, Collector, Comment, Musician, Performer, PerformerPrize, Prize, Track,],
      dropSchema: false,
      synchronize: true,
      keepConnectionAlive: true,
      migrations: [__dirname + '/migration/**/*{.ts,.js}'],
      migrationsRun: true,
      ssl: { rejectUnauthorized: false }
    }),
    RecordLabelModule,
    PrizeModule,
    TrackModule,
    CollectorModule,
    PerformerModule,
    BandModule,
    MusicianModule,
    AlbumModule,
    GenreModule,
    CommentModule,
    CollectorAlbumModule,
    AlbumstatusModule,
    PerformerprizeModule,
    BandmusicianModule,
    MusicianAlbumModule,
    BandAlbumModule,
    CollectorPerformerModule,
    AlbumBandModule,
    AlbumMusicianModule],
})
export class AppModule { }
