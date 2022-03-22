import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { MenuComponent } from "./menu/menu.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { BookingComponent } from "./booking/booking.component";

const routes: Routes=[
    {path: 'register',component: RegisterComponent},
    {path: 'menu', component: MenuComponent },
    {path: 'login',component: LoginComponent},
    {path: 'footer',component: FooterComponent},
    {path: 'booking',component: BookingComponent}
    
     
];

@NgModule({

imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})
export class AppRoutingModule{}
export const routingComponents =[RegisterComponent, MenuComponent, LoginComponent, FooterComponent, BookingComponent];
