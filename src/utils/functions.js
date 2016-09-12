/**
 * Returns true if ANY clickers have changed
 * @param {array} clickers
 * @returns {bool}
 */
export function areChangesPresent(clickers) {
  return clickers.some(clicker => clicker.hasChanged);
}