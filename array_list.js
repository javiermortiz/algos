class ArrayList {
    constructor(n) {
        this.list = new Array(n);
        this.nextIdx = 0;
    }

    add(el) {
        if (this.nextIdx < this.size()) {
            this.list[this.nextIdx] = el;
        } else {
            this.list = [...this.list].concat(new Array(this.size()));
            this.list[this.nextIdx] = el;
        }

        this.nextIdx++;
    }

    size() {
        return this.list.length;
    }
}

const myArrayList = new ArrayList(3);
myArrayList.add(1);
myArrayList.add(2);
myArrayList.add(3);
myArrayList.add(4);
myArrayList.add(5);
myArrayList.add(6);
myArrayList.add(7);
console.log(myArrayList);
console.log(myArrayList.size());