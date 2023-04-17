import { EventInterface, Point } from '../interfaces';
import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
class Event extends Model<EventInterface> implements EventInterface {
    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    city!: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    date!: Date;

    @AllowNull(false)
    @Column(DataType.GEOMETRY('POINT'))
    position!: Point;
}

export default Event;