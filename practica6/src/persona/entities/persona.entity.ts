import { Registro } from 'src/registro/entities/registro.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'persona'})
export class Persona {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
        nombre: string;

    @Column()
        identificacion: string;

    @OneToMany(() => Registro, registro => registro.persona)
    registro: Registro[];

    @Column('text')
    estado: string;
}
