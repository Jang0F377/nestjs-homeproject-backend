import { SetMetadata } from '@nestjs/common';

export const IS_SARAH_KEY = 'isSarah';

export const Sarah = () => SetMetadata(IS_SARAH_KEY, true);
