/**
 *
 * Asynchronously loads the component for Instance
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
