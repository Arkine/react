import 'babel-polyfill';

import Chai from "chai";
import ChaiEnzyme from "chai-enzyme";

Chai.use(ChaiEnzyme());

const context = require.context('./src', true, /\.spec\.js$/);

context.keys().forEach(context);