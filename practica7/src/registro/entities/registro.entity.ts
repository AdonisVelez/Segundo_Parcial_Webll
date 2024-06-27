import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Encuesta } from 'src/encuesta/entities/encuesta.entity';
import { Persona } from 'src/persona/entities/persona.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'registro' })
export class Registro {


  @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({ type: 'timestamp' })
    @Field(() => Date)
        fecha: Date;

    @Column({ type: 'timestamp' })
    @Field(() => Date)
        hora: Date;

    @Column()
    @Field(() => String)
        ubicacion: string;
    

    @ManyToOne(
        () => Persona, 
        persona => persona.registro,
        {eager: true})
       persona: Persona;

    @ManyToOne(
        () => Encuesta, 
        encuesta => encuesta.registro,
        {eager: true})
        encuesta: Encuesta;

    @Column('text')
    @Field(() => String)
        estado: string;
}
