export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME!;
export const PRODUCTION_MODE =
  Number(process.env.NEXT_PUBLIC_PRODUCTION_MODE!) == 1;
export const SITE_BASE_URL = process.env.NEXT_PUBLIC_SITE_BASE_URL!;
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
export const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION!;
export const AWS_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!;
export const AWS_SECRET_ACCESS_KEY =
  process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!;
export const AWS_REGION = process.env.NEXT_PUBLIC_AWS_REGION!;
export const AWS_BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!;
export const STRIPE_PUBLICK_API_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLICK_API_KEY!;
export const STRIPE_SECRET_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!;
export const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
export const PAYPAL_CLIENT_SECRET =
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET!;

export const TAG_USERNAME = "EMAIL";
export const TAG_PASSWORD = "PASSWORD";
export const TAG_ACCESS_TOKEN = "ACCESS_TOKEN";
export const TAG_REFRESH_TOKEN = "REFRESH_TOKEN";

export const SIDEBARWIDTH_SM = 80;
export const SIDEBARWIDTH_MD = 210;
export const SIDEBARWIDTH_LG = 260;
export const PAGE_LIMIT = 1000;
export const ASSET_TTL = 3600;

export const DATETIME_FORMAT = "MMM DD YYYY hh:mm:ss A";
export const DATE_FORMAT = "MMM DD YYYY";
export const US_DATETIME_FORMAT = "MMM dd, yyyy";

export const DEFAULT_AVATAR_IMAGE = "/images/fanclub/fan.svg";
export const DEFAULT_LOGO_IMAGE = "/images/logo.png";
export const PLACEHOLDER_IMAGE = "/images/placeholder.jpg";

//##########################################################
//################### System configuration #################
//##########################################################
export enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum PROVIDER {
  PAYPAL = "PAYPAL",
  STRIPE = "STRIPE",
}

export enum OAUTH_PROVIDER {
  FACEBOOK = "FACEBOOK",
  TWITTER = "TWITTER",
  LINKEDIN = "LINKEDIN",
  YOUTUBE = "YOUTUBE",
}

export enum MUSIC_QUALITY {
  AUTO,
  HIGH,
  LOW,
}

export enum LIVESTREAM_QUALITY {
  AUTO,
  HIGH,
  LOW,
}

export enum TRANSACTION_TYPE {
  DONATION = "DONATION",
  SUBSCRIPTION = "SUBSCRIPTION",
}

export enum ASSET_TYPE {
  NONE = "NONE",
  MUSIC = "MUSIC",
  LIVESTREAM = "LIVESTREAM",
}

export enum IMAGE_SIZE {
  SQUARE = "SQUARE",
  WIDE = "WIDE",
  TALL = "TALL",
  WIDEANDTALL = "WIDEANDTALL",
}

export enum FILE_TYPE {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

export enum VIEW_MODE {
  CATEGORY,
  LIST,
  VIDEO,
}

//##########################################################
//################## Blur image for loading ################
//##########################################################
export const IMAGE_BLUR_DATA_URL =
  "data:image/png;base64,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";
