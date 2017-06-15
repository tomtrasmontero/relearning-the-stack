/*jshint node: true */
'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import swig from 'swig';

swig.setDefaults({ cache: false });

const app = express();

export { app };