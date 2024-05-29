import { Controller, Get, Req, Post } from "@nestjs/common";
import { Request } from "express";

@Controller('cats')
export class TasksController {
    @Post()
    create(): string {
        return 'This action adds a new cat';
    }
    @Get()
    findAll(@Req() req: Request): string {
        return 'Hello from controller'
    }
}