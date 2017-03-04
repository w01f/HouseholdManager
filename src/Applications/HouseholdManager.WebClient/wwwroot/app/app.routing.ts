import { Routes, RouterModule } from '@angular/router';

import { HomeGuard } from "./helpers/guards/home.guard";
import { DashboardGuard } from "./helpers/guards/dashboard.guard";

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlansComponent } from './components/plans/plans.component';
import { TasksComponent } from './components/tasks/tasks.component';
const appRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [HomeGuard]
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [DashboardGuard],
		canActivateChild: [DashboardGuard],
		children: [
			{ path: 'plans', component: PlansComponent },
			{ path: 'tasks', component: TasksComponent },
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

export const routing = RouterModule.forRoot(appRoutes);