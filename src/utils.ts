export function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor: any) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

type Options = {
  limit?: number;
  page?: number;
  offset?: number;
  sort?: string;
  match?: string;
  negateMatch?: string;
  include?: string;
  exclude?: string;
  exists?: string;
  notExists?: string;
  regex?: string;
  unregex?: string;
  lt?: number;
  gt?: number;
  lte?: number;
  gte?: number;
};

type FilterOptions = {
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  exists?: boolean;
  eq?: string | number | boolean | null;
  neq?: string | number | boolean | null;
};

export function parseInsideValue(value: string, options: any) {
  const str = [];
  for (let p in options) {
    if (p === 'lt') {
      str.push(
        encodeURIComponent(value) + '<' + encodeURIComponent(options[p])
      );
    }
    if (p === 'lte') {
      str.push(
        encodeURIComponent(value) + '<=' + encodeURIComponent(options[p])
      );
    }
    if (p === 'gte') {
      str.push(
        encodeURIComponent(value) + '>=' + encodeURIComponent(options[p])
      );
    }
    if (p === 'gt') {
      str.push(
        encodeURIComponent(value) + '>' + encodeURIComponent(options[p])
      );
    }
    if (p === 'sort') {
      str.push(
        'sort=' +
          encodeURIComponent(value) +
          ':' +
          encodeURIComponent(options[p])
      );
    }
    if (p === 'eq') {
      str.push(
        encodeURIComponent(value) + '=' + encodeURIComponent(options[p])
      );
    }
    if (p === 'neq') {
      str.push(
        encodeURIComponent(value) + '!=' + encodeURIComponent(options[p])
      );
    }

    if (p === 'exists') {
      if (options[p]) {
        str.push(encodeURIComponent(value));
      } else {
        str.push('!' + encodeURIComponent(value));
      }
    }
  }
  console.log(str);
  return str.join('&');
}

export function createQuery(options?: any) {
  if (!options) {
    return '';
  }
  const str = [];
  for (let p in options)
    if (options.hasOwnProperty(p)) {
      let filters = parseInsideValue(p, options[p]);
      if (filters.length > 0) {
        str.push(filters);
      } else {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(options[p]));
      }
    }
  if (str.length > 0) {
    return '?' + str.join('&');
  } else {
    return '';
  }
}
