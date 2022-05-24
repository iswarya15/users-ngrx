import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { appReducers } from './store/reducers/app.reducer';
import { environment } from './environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ConfigEffects } from './store/effects/config.effects';
import { UserEffects } from './store/effects/user.effects';
import { UserService } from './services/user.service';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers), // add reducer to forRoot of store module
    EffectsModule.forRoot([UserEffects, ConfigEffects]), // add effects to forRoot of effects module
    // add store dev tools if env is not production(not necessary)
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
