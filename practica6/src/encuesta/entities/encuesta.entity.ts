import { Registro } from 'src/registro/entities/registro.entity';
import { Entity, Column,OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'encuesta' })
export class Encuesta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
        descripcion: string;
    
    @Column()
        detalles: string; 

    @OneToMany(() => Registro, registro => registro.encuesta)
    registro: Registro[];

    @Column()
    estado: string;
    
}