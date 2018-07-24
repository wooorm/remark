'use strict';

module.exports = emphasis;

/* Stringify an `emphasis`.
 *
 * The marker used is configurable through `emphasis`, which
 * defaults to an underscore (`'_'`) but also accepts an
 * asterisk (`'*'`):
 *
 *     *foo*
 *
 * In `pedantic` mode, text which itself contains an underscore
 * will cause the marker to default to an asterisk instead:
 *
 *     *foo_bar*
 */
function emphasis(node) {
  var marker = this.options.emphasis;
  var content = this.all(node).join('');

  if (this.options.pedantic) {
    if (marker === '_' && content.indexOf(marker) !== -1) {
      marker = '*';
    }
  }

  return marker + content + marker;
}
