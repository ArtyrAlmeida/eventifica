import { EventInterface } from '../interfaces';
import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
class Event extends Model implements EventInterface {
    @AllowNull(false)
    @Column(DataType.REAL)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    city!: string;

    @AllowNull(false)
    @Column(DataType.GEOMETRY)
    position!: {
        latitude: string;
        longitude: string;
    };
}

export { Event };