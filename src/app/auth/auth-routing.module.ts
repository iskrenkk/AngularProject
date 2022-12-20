import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { AuthorsComponent } from "../authors/authors.component";
import { BooksComponent } from "../books/books.component";
import { HomeComponent } from "../home/home.component";
import { ProfileComponent } from "../profile/profile.component";
import { RankingsComponent } from "../rankings/rankings.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
 
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },

    {
      path: "books",
      component: BooksComponent,
     //canActivate: [AuthActivate],
      data: {
        title: 'Books',
        loginRequired: false
      }
    }, 

    {
    path: "authors",
    component: AuthorsComponent,
   //canActivate: [AuthActivate],
    data: {
      title: 'Authors',
      loginRequired: false
    }
   },

   {
    path: "rankings",
    component: RankingsComponent,
   //canActivate: [AuthActivate],
    data: {
      title: 'Rankings',
      loginRequired: false
    }
}, 

{
    path: "about",
    component: AboutComponent,
   //canActivate: [AuthActivate],
    data: {
      title: 'About',
      loginRequired: false
    }
}, 

{
    path: "login",
    component: LoginComponent,
   //canActivate: [AuthActivate],
    data: {
      title: 'Login',
      loginRequired: false
    }
}, 

{
    path: "logout",
    component: LogoutComponent,
   //canActivate: [AuthActivate],
    data: {
      title: 'Logout',
      loginRequired: false
    }
}, 

{
    path: "register",
    component: RegisterComponent,
   //canActivate: [AuthActivate],
    data: {
      title: 'Register',
      loginRequired: false
    }
}, 

{
    path: "profile",
    component: ProfileComponent,
   //canActivate: [AuthActivate],
    data: {
      title: 'Profile',
      loginRequired: false
    }
}
    ]

    export const AuthRoutingModule = RouterModule.forChild(routes);