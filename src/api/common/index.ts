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


export interface GetUser {
  id?: string;
}

export interface Account {
  user: {
    id?: string,
    avatar?: string,
    name?: string,
    email?: string,
    password?: string,
    phone?: string,
    birthday?: string,
    gender?: boolean,
  },
  token?: string
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
