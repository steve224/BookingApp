const express = require('express');
const app = express();

const { port, methods, origin } = require('../config/default.json');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');