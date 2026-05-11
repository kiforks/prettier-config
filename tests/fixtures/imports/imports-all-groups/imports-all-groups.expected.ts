import { ngneatThing } from '@ngneat/forms-manager';
import { fakerStuff } from '@faker/core';
import { ngmocks } from 'ng-mocks';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Browser } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { trigger } from '@angular/animations';
import { MatButton } from '@angular/material/button';
import { CdkOverlay } from '@angular/cdk/overlay';
import { Firestore } from '@angular/fire/firestore';
import { CustomAngular } from '@angular/custom';

import { env } from '@env/environment';

import { Workspace } from '@nx/workspace';

import { NgxModule } from '@ngx-translate/core';
import { NgPipe } from '@ng-some/pipe';

import { ScopeStuff } from '@somescope/lib';

import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs/operators';
import _ from 'lodash';

import { TestModule } from './app.module';
import { config } from './my.config';

import { ApiService } from './api/api.service';
import { UserDto } from './services/user.dto';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { Helper } from './helpers/test.helper';
import { AppComponent } from './components/app.component';
import { Modal } from './pages/modals/test.modal';
import { Factory } from './factories/test.factory';
import { Resolver } from './resolvers/test.resolver';
import { Mixin } from './mixins/test.mixin';
import { State } from './states/test.state';
import { Role } from './enums/role.enum';
import { User } from './interfaces/user.interface';
import { i18nKey } from './i18n/keys';
import { utility } from './utils/test.util';

import { parent } from '../parent';
import { sibling } from './sibling';

import express from 'express';
import { someThirdParty } from 'some-package';
import { catchAll } from 'unmatched-package-name';

@Component({})
export class App {}
