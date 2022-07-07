import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity("data")
export class Data {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  brightness: string;

  @Column()
  humidity: string;

  @Column()
  temperature: string;

  @Column()
  valve: boolean;

  @Column()
  heater: boolean;

  @Column()
  lamp: boolean;

  @Column()
  sensorsStatus: string;

  @CreateDateColumn()
  created_at: Date;
  
}

