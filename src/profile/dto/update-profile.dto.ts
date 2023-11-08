import {
  IsEmpty,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
 

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly gender: string;

  @IsOptional()
  @IsString()
  readonly birthday: string;

  @IsOptional()
  @IsString()
  readonly horoscape: string;

  @IsOptional()
  @IsString()
  readonly zodiac: string;


  @IsOptional()
  @IsNumber()
  readonly height: number;

  @IsOptional()
  @IsNumber()
  readonly weight: number;
 

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
