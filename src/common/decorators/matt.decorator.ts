import { SetMetadata } from '@nestjs/common';

export const IS_MATT_KEY = 'isMatt';

export const Matt = () => SetMetadata(IS_MATT_KEY, true);
