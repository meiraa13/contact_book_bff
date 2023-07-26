import { getRounds, hashSync } from 'bcryptjs'
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, 
        UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm'
import Contact from './contact.entity'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type: 'varchar', length: 120})
    fullname:string

    @Column({type:'varchar', length:45})
    nickname:string

    @Column({type:'varchar', length:45, unique:true})
    email:string

    @Column({type:'varchar', length: 120})
    password:string

    @Column({type:'integer'})
    phoneNumber:number

    @CreateDateColumn({type:'date'})
    createdAt: string | Date

    @UpdateDateColumn({type:'date'})
    updatedAt: string | Date

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted: number = getRounds(this.password)

        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }
}

export default User