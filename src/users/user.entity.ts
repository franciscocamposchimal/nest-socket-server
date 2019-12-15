import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

@Entity('users')
export class User {
    @ObjectIdColumn()
    id: ObjectID;
    
    @Column()
    socketId: string;

    /*@Column()
    firstName: string;
    
    @Column()
    lastName: string;*/
}
