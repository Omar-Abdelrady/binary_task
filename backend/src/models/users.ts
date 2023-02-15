import { Table, Model, Column, DataType, HasOne } from "sequelize-typescript";
import { EmailVerificationCode } from "./emailVerificationCode";
@Table({
  timestamps: true,
  tableName: "users",
})
export class Users extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  email_is_verified!: boolean;

  @HasOne(() => EmailVerificationCode, { onDelete: "cascade" })
  email_verification_code!: EmailVerificationCode[];

  public static initAssociation(): void {
    this.hasOne(EmailVerificationCode);
  }
}
