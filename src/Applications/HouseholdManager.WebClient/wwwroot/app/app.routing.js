"use strict";
const router_1 = require('@angular/router');
const home_guard_1 = require("./helpers/guards/home.guard");
const dashboard_guard_1 = require("./helpers/guards/dashboard.guard");
const login_component_1 = require('./components/login/login.component');
const home_component_1 = require('./components/home/home.component');
const dashboard_component_1 = require('./components/dashboard/dashboard.component');
const plans_component_1 = require('./components/plans/plans.component');
const tasks_component_1 = require('./components/tasks/tasks.component');
const appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [home_guard_1.HomeGuard]
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [dashboard_guard_1.DashboardGuard],
        canActivateChild: [dashboard_guard_1.DashboardGuard],
        children: [
            { path: 'plans', component: plans_component_1.PlansComponent },
            { path: 'tasks', component: tasks_component_1.TasksComponent },
            { path: '', redirectTo: 'plans', pathMatch: 'full' }
        ]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map