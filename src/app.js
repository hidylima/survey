import * as offline from 'offline-plugin/runtime';

import './app.styl';
import './components/welcome/welcome';
import './components/introduction/introduction';
import './components/region/region';
import './components/footer/footer';

offline.install({
  onUpdateReady: function() {
    offline.applyUpdate();
  }
});
 

