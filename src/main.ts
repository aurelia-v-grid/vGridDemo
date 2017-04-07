

// import loader
import 'fuse-box-aurelia-loader';

// start aurelia bootstrapper
import 'aurelia-bootstrapper';

// import aurelia (ts type only)
import {Aurelia} from 'aurelia-framework';

// aurelia configuration
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-v-grid');

  aurelia.start().then(() => aurelia.setRoot());
}
