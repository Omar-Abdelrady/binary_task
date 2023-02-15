import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Users } from "./users";

@Table({
  timestamps: true,
  tableName: "email_verification_code",
})
export class EmailVerificationCode extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  code!: number;
  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    references: { model: "users", key: "id" },
  })
  user_id!: number;

  @BelongsTo(() => Users)
  user!: Users[];
  public static initAssociation(): void {
    this.belongsTo(Users);
  }
}
