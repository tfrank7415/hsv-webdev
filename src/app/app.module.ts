import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PricingComponent } from './components/pricing/pricing.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { NonProfitComponent } from './components/non-profit/non-profit.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { TheProcessComponent } from './components/the-process/the-process.component';
import { ContactUsService } from './shared/services/contact-us/contact-us.service';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AuthService } from '../app/shared/services/auth/auth.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StoreComponent } from './components/store/store.component';
import { StoreService } from './shared/services/store/store.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PricingComponent,
    OurMissionComponent,
    AboutUsComponent,
    ContactUsComponent,
    NonProfitComponent,
    DeveloperComponent,
    TheProcessComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UserProfileComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config),
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatStepperModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'our-mission', component: OurMissionComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'non-profit', component: NonProfitComponent }, // canActivate: [SecureInnerPagesGuard]
      { path: 'developer', component: DeveloperComponent }, // canActivate: [AuthGuard] This is how to secure routes
      { path: 'the-process', component: TheProcessComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'verify-email', component: VerifyEmailComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'store', component: StoreComponent }
    ])
  ],
  providers: [ContactUsService,
              AuthService,
              StoreService,
              AngularFirestore,
              AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
