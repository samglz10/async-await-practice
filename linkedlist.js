const seventh = {
    value: 7,
    next: null,
  }
  const sixth = {
    value: 5,
    next: seventh,
  }
  const fifth = {
    value: 5,
    next: sixth,
  }
  const fourth = {
    value: 4,
    next: fifth,
  }
  const third = {
    value: 3,
    next: fourth,
  }
  const second = {
    value: 1,
    next: third,
  }
  const first = {
    value: 1,
    next: second,
  }
  
  /**
    * @typedef {object} listnode
    * @property {number} value
    * @property {listnode | null} next
    */
  
  
  /**
   * @param {listnode} node
   * @returns {number}
   */
  function traverse(node) {
    console.log(node.value);
    if(node.next === null){
        return;
    }
    traverse(node.next)
  }

  //traverse(first);
  /**
   * @param {listnode} node
   * @returns {number}
   */

  function removeDuplicates(node){
    if(node === null || node.next === null){
        return
    }
    while(node.value === node.next.value){
        node.next = node.next.next;
        console.log(node)
    }
    removeDuplicates(node.next)
  }

  traverse(first)
  console.log('before')
  removeDuplicates(first);
  traverse(first)