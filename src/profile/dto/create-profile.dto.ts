import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class CreateProfileDto {
  
  @IsNotEmpty()
  @IsString()
  readonly name: string;
 
  @IsNotEmpty()
  @IsString()
  readonly gender: string;

  @IsNotEmpty()
  @IsString()
  readonly birthday: string;

  @IsNotEmpty()
  @IsString()
  readonly horoscape: string;

  @IsNotEmpty()
  @IsString()
  readonly zodiac: string;

  @IsNotEmpty()
  @IsNumber()
  readonly height: number;
  
  @IsNotEmpty()
  @IsNumber()
  readonly weight: number;

 

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly user: User;
}
