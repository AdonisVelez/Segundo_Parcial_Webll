import { Encuesta } from 'src/encuesta/entities/encuesta.entity';
import { Persona } from 'src/persona/entities/persona.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name:'registro' })
export class Registro {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
        fecha: Date;

    @Column({ type: 'timestamp' })
        hora: Date;

    @Column()
        ubicacion: string;
    

    @ManyToOne(() => Persona, persona => persona.registro)
        persona: Persona;

    @ManyToOne(() => Encuesta, encuesta => encuesta.registro)
        encuesta: Encuesta;

    @Column('text')
        estado: string;
    
}
