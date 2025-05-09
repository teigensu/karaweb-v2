/* global hexo */
const createLogger = require('hexo-log');

const logger = createLogger.default();

/**
 * Print welcome message
 */
logger.info(`=======================================
 █████╗ ██╗  ██╗██╗██╗   ██╗ █████╗ ███╗   ███╗ █████╗ 
██╔══██╗██║ ██╔╝██║╚██╗ ██╔╝██╔══██╗████╗ ████║██╔══██╗
███████║█████╔╝ ██║ ╚████╔╝ ███████║██╔████╔██║███████║
██╔══██║██╔═██╗ ██║  ╚██╔╝  ██╔══██║██║╚██╔╝██║██╔══██║
██║  ██║██║  ██╗██║   ██║   ██║  ██║██║ ╚═╝ ██║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝
=============================================`);

/**
 * Check if all dependencies are installed
 */
require('../include/dependency')(hexo);

/**
 * Configuration file checking and migration
 */
require('../include/config')(hexo);

/**
 * Register Hexo extensions and remove Hexo filters that could cause OOM
 */
require('../include/register')(hexo);
