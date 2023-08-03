export interface FindOptions {
  select?: string[];
  relations?: string[];
  where?: any;
  order?: any;
  page?: number;
  take?: number;
  skip?: number;
}

export interface FindOneOptions {
  select?: string[];
  relations?: string[];
  where?: any;
}

export interface CountOptions {
  where?: any;
}
