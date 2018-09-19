import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/containers/layout/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children:[{
            path: '',
            pathMatch: 'full',
            redirectTo: '/products'
        }, {
            path: 'products',
            loadChildren: './product/product.module#ProductModule'
        }]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}


