const routes = {
  home: '/',
  admin: '/admin',
  users: '/users',
} as const

// type Routes = typeof routes
// type RKeys = keyof Routes // "home" | "admin" | "users"
// type RVals = Routes[RKeys] // "/" | "/admin" | "/users"

type RValue = typeof routes[keyof typeof routes] // "/" | "/admin" | "/users"
