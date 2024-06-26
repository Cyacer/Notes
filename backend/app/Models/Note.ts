import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Note extends BaseModel {
  
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public title: string

  @column()
  public describe:string

  @column()
  public favorite: boolean

  @column()
  public color: string

  @column({columnName: 'user_id'})
  public userId: number

  @belongsTo(() => User, {
    foreignKey: 'userId'
  })

  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
