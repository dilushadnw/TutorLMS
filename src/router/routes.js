const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
    ],
  },

  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/DashboardHome.vue') },
      { path: 'profile', component: () => import('pages/dashboard/ProfilePage.vue') },
      // Add more dashboard routes here as modules (Classes, Payments, etc.)
    ],
    meta: { requiresAuth: true },
  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/admin/AdminHome.vue') },
      { path: 'students', component: () => import('pages/admin/AdminUsersPage.vue') },
    ],
    meta: { requiresAuth: true }, // Ideally protect with role check too
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
