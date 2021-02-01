/**
 * Stack class bro!!!
 */

module.exports = function Stack() {
  let items = {};
  let count = 0;

  /**
   * Add element to the top of the stack
   * @param {number} element element to add
   */
  this.push = function push(element) {
    items[count] = element;
    count++;
  };

  this.pop = function pop() {
    if (count === 0) return undefined;
    const res = items[count - 1];
    delete items[count - 1];
    count--;
    return res;
  };

  this.peek = function peek() {
    if (this.isEmpty()) return undefined;
    return items[count - 1];
  };

  this.isEmpty = function isEmpty() {
    return count === 0;
  };

  this.clear = function clear() {
    if (items.isEmpty) return;
    items = {};
    count = 0;
    // while (!this.isEmpty()) {
    //   this.items.pop();
    // }
  };

  this.size = function size() {
    return count;
  };


  /**
   * Return string version of Stack
   */
  this.toString = function toString() {
    return Object.values(items).toString();
  };
};
