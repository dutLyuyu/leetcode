function BiHeap(type){
  this.arr = [];
  this.type = type;
}

BiHeap.prototype.parent = function(index){
  if (index <= 0) return undefined;
  let r = (index - 1) / 2;
  if (r % 1 === 0) {
    return r;
  } else {
    return Math.floor(r);
  }
};

BiHeap.prototype.children = function(index){
  return [index * 2 + 1, index * 2 + 2]
};

BiHeap.prototype.isCorrect = function(upOne, lowerOne){
  if (this.type = "min") {
    return v(upOne) <= v(lowerOne);
  } 
  return v(upOne) >= v(lowerOne);
}

BiHeap.prototype.v = function(index) {
  return this.arr[index];
}

BiHeap.prototype.getBest = function(...args) {
  if (args.length <= 0 ) {
    return null;
  }
  const _v = this.v.bind(this);
  let r = null;
  for (let i = 1; i < args.length; i++){
    if (typeof _v(args[i]) === 'number') {
      if (r === null) {
        r = _v(args[i]);
        continue;
      }
      if (this.type = "min") {
        if (_v(args[i]) <= _v(r)){
          r = args[i];
        }
       } else {
         if (_v(args[i]) >= _v(r)){
           r = args[i];
         }
       } 
    }
  }
  return r;
}

BiHeap.prototype.change = function(index1, index2){
  const tmp = this.arr[index1];
  this.arr[index1] = this.arr[index2];
  this.arr[index2] = tmp;
};

BiHeap.prototype.floatUp = function(index){
  let paIndex = this.parent(index);
  while (paIndex && !this.isCorrect(paIndex, index)){
    this.change(paIndex, index);
    index = paIndex;
    paIndex = this.parent(paIndex); 
  }
};

BiHeap.prototype.sink = function(index){
  const shouldSink = (index) => {
    let [left, right] = this.children(index); 
    if (typeof this.getBest(left, right, index) !== 'number' || this.getBest(left, right, index) === index) {
      return undefined;
    } else {
      return this.getBest(left, right, index);
    }
  }
  while (shouldSink(index)){
    let nextLevelIndex = shouldSink(index);
    this.change(nextLevelIndex, index);
    index = nextLevelIndex;
  }
};

BiHeap.prototype.insert = function(){

}

BiHeap.prototype.delTop = function(){
  
}