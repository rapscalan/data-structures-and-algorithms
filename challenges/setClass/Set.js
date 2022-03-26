class Set{
  constructor(){
    this.mySet = [];
  }

  add(el){
    if(!this.has(el)){
      this.mySet.push(el);
    }
  }

  remove(el){
    if(this.has(el)){
      const index = this.mySet.findIndex(el2 => {
        el === el2;
      });
      this.mySet.splice(index, 1);
    }
  }

  has(el){
    return this.mySet.findIndex(el2 => el2 === el) >= 0;
  }

  union(aSet){

    let resultSet = new Set();
    this.mySet.forEach(el => {
      resultSet.add(el);
    });

    aSet.mySet.forEach(el => {
      resultSet.add(el);
    });
    return resultSet.mySet;

  }

  intersection(aSet){
    let resultSet = new Set();
    aSet.mySet.forEach(el => {
      if(this.has(el)){
        resultSet.mySet.push(el);
      }
    });
    return resultSet.mySet;
  }

  difference(aSet){
    let resultSet = new Set();
    
    this.mySet.forEach(el => {
      if(!aSet.has(el)){
        resultSet.add(el);
      }
    });
    aSet.mySet.forEach(el => {
      if(!this.has(el))
        resultSet.add(el);
    });
    return resultSet.mySet;
  }

  static intersection(set1, set2){
    return set1.intersection(set2);
  }

  static union(set1, set2){
    return set1.union(set2);
  }

  static difference(set1, set2){
    return set1.difference(set2);
  }
}

module.exports = Set;
