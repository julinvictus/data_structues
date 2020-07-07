// run file: npm run test

const LinkedList = require('./linked_lists');

test('it constructs a linked list', () => {
  var singleElementList = new LinkedList('oi');
  expect(singleElementList).toEqual({ head: { next: null, value: 'oi' }, length: 1 });
});

test('adds node to head', () => {
  const list = new LinkedList('first');
  expect(list.addToHead('second')).toEqual({
    head: {
      value: 'second',
      next: {
        value: 'first',
        next: null,
      },
    },
    length: 2,
  });
});

test('adds node to tail', () => {
  const letters = new LinkedList('a');
  expect(letters.addToTail('b')).toEqual({
    head: {
      value: 'a',
      next: {
        value: 'b',
        next: null,
      },
    },
    length: 2,
  });
});

test('adds node to specific index', () => {
  const myName = new LinkedList('j');
  expect(myName.addToTail('u').addToTail('i').addToSpecificIndex(2, 'l')).toEqual({
    head: {
      value: 'j',
      next: {
        value: 'u',
        next: {
          value: 'l',
          next: {
            value: 'i',
            next: null,
          },
        },
      },
    },
    length: 4,
  });
});

test('deletes node with a specific value', () => {
  const otherList = new LinkedList(1).addToHead(2).addToHead(3);
  otherList.delete(3);
  expect(otherList).toEqual({
    head: {
      value: 2,
      next: {
        value: 1,
        next: null,
      },
    },
    length: 2,
  });
});
