import BW = require('browser-window');
import * as M from '../../src/browser/menu';

context('menu', () => {
    describe('#build', () => {
        it('returns menu object', () => {
            if (on_travis) {
                let w = new BW({show: false});
                const m = M.build(w);
                assert.ok(m);
            }
        });
    });
});
