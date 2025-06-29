const config:any = {
    screens: {
      App: {
        screens: {
          Home: 'home',
          Filter: 'Filter',
          Saved: 'Saved',
        },
      },
      NewsDetailScreen:"NewsDetailScreen/:id/:slug"
    },
  };
  
  export const linking = {
    prefixes: ['cryptobuzz://'],
    config,
  };
  