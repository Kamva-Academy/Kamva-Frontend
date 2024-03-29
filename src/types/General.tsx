export type AppBarDrawerItemType = {
  title: string,
  href: string,
}

export type TopSiteBannerType = {
  mobile_image?: string;
  desktop_image?: string;
  redirect_to: string;
}

export type ArticleType = {
  id: number;
  name: string;
  description: string;
  cover_page: string;
};


export type ProgramType = {
  id: number;
  name: string;
  description: string;
  cover_page: string;
};