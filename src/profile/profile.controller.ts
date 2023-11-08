import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './schemas/profile.schema';

import { Query as ExpressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController {
  constructor(private ProfileService: ProfileService) {}

  @Get()
  async getAllProfile(@Query() query: ExpressQuery): Promise<Profile[]> {
    return this.ProfileService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createProfile(
    @Body()
    profile: CreateProfileDto,
    @Req() req,
  ): Promise<Profile> {
    return this.ProfileService.create(profile, req.user);
  }

  @Get(':id')
  async getProfile(
    @Param('id')
    id: string,
  ): Promise<Profile> {
    return this.ProfileService.findById(id);
  }

  @Put(':id')
  async updateProfile(
    @Param('id')
    id: string,
    @Body()
    profile: UpdateProfileDto,
  ): Promise<Profile> {
    return this.ProfileService.updateById(id, profile);
  }

  @Delete(':id')
  async deleteProfile(
    @Param('id')
    id: string,
  ): Promise<Profile> {
    return this.ProfileService.deleteById(id);
  }
}
