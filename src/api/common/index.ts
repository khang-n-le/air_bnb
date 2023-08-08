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

export const serialize = (obj: any) => {
  const keys = Object.keys(obj);
  let query = '?';
  keys.forEach(key => {
    if (obj[key] !== undefined && obj[key] !== '') {
      query +=
        typeof obj[key] === 'string'
          ? `${key}=${obj[key]}&`
          : `${key}=${JSON.stringify(obj[key])}&`;
    }
  });
  return query;
};
