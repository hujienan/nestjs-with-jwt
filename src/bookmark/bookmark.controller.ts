import { Controller, Get, Headers, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('bookmark')
export class BookmarkController {
  @Get()
  getBookmark(@Headers() headers: string): string {
    return headers;
  }
}
