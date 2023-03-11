class HashTable {
  _hash: any[][];
  private ARRAY_SIZE = 51;
  private RANDOMNESS_NUMBER = 31;

  constructor() {
    this._hash = new Array(this.ARRAY_SIZE);
  }

  private hashFunction(key: string) {
    const keylength = key.length;
    let total = 0;

    for (let index = 0; index < Math.min(keylength, 100); index++) {
      let charCodeAt = key.charCodeAt(index) - 96;
      total = (total * this.RANDOMNESS_NUMBER + charCodeAt) % this.ARRAY_SIZE;
    }

    return Math.abs(total);
  }

  set(key: string, value: any) {
    const hashCode = this.hashFunction(key);
    if (!this._hash[hashCode]) {
      this._hash[hashCode] = [[key, value]];
    } else {
      let hashBlock = this._hash[hashCode];
      for (let index = 0; index < hashBlock.length; index++) {
        if (hashBlock[index][0] == key) {
          hashBlock[index][0][1] = value;
          break;
        } else {
          this._hash[hashCode].push([key, value]);
        }
      }
    }

    return this._hash;
  }

  get(key: string) {
    const hashCode = this.hashFunction(key);
    if (!this._hash[hashCode]) {
      return false;
    }

    let hashBlock = this._hash[hashCode];
    for (let index = 0; index < hashBlock.length; index++) {
      if (hashBlock[index][0] == key) {
        return hashBlock[index][1];
      }
    }

    return false;
  }
}

const hashFunc = new HashTable();
hashFunc.set("ID", "BVN");
hashFunc.set("Location", "Nigeria");

console.log(hashFunc._hash, 'Hashed Values');
console.log(hashFunc.get('ID'));
