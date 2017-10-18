import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { PagesComponent } from './pages.component';

export const childRoutes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: IndexComponent },
            { path: 'form', component: FormComponent },
            { path: '**', redirectTo: 'index', pathMatch: 'full' }
        ]
    },
];

export const routing = RouterModule.forChild(childRoutes);