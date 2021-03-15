import Application from 'qunit-window-error/app';
import config from 'qunit-window-error/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
