import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,  UpdateDateColumn, ManyToOne} from 'typeorm'
import User from './user.entity'

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type: 'varchar', length: 120})
    fullname:string

    @Column({type:'varchar', length:45})
    email:string

    @Column({type:'integer'})
    phoneNumber:number

    @CreateDateColumn({type:'date'})
    createdAt: string | Date

    @UpdateDateColumn({type:'date'})
    updatedAt: string | Date

    @ManyToOne(()=> User, (user) => user.contacts)
    user: User
}

export default Contact