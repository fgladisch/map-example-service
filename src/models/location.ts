import { Table, Column, Model } from 'sequelize-typescript';

@Table
export default class Location extends Model<Location> {

  @Column
  name: string;

  @Column
  latitude: string;

  @Column
  longitude: string;

}
