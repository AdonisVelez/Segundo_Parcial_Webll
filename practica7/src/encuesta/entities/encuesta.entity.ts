import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Registro } from 'src/registro/entities/registro.entity';
import { Entity, Column,OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'encuesta' })
export class Encuesta {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field(() => String)
        descripcion: string;
    
    @Column()
    @Field(() => String)
        detalles: string; 

    @OneToMany(
      () => Registro, 
      registro => registro.encuesta,
      {cascade: true})
    registro: Registro[];

    @Column()
    @Field(() => String)
    estado: string;
    
}