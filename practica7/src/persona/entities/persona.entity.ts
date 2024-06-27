import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Registro } from 'src/registro/entities/registro.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name: 'persona'})
export class Persona {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int)
    id: number;

    @Column()
    @Field(() => String)
        nombre: string;

    @Column()
    @Field(() => String)
        identificacion: string;

    @OneToMany(
      () => Registro, 
      registro => registro.persona,
      {cascade: true})
    registro: Registro[];

    @Column('text')
    @Field(() => String)
    estado: string;
}
