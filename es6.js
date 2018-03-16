
const object = {
    width: 100,
    height: 100,
    depth: 100,
    [Symbol.iterator](){
        let keys = Object.keys(this).sort();
        let index = 0;

        return{
            next(){
                if(index < keys.length){
                    let property = keys[index++];
                    return{
                        value: [property, this[property]],
                        done: false
                    };
                }
                return {done: true};
            }
        };
    }
};

for (let prop of object){
    console.log(prop);
}