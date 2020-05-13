class Time { 

    constructor(start, end) { 
    
    this._start = start;
    
         this._end = end; 
    
    this._duration = end - start; 
    
 } 
    
} 
    
    const time = new Time(0, 20); 
    
    time._start = 5; 
    
    time._duration -= 5; 
    
    console.log(time._start)

    



// class Person { 

//     constructor(name, age) { 
//     this._name = name; 
//     this.age = age; 
//     } 
    
//     get name() { 
//         return this._name.toUpperCase(); 
//         } 
//     set name(newName){
//         if(newName){ this._name = newName; }
//         } 
// } 

// let man = new Person('John', 10); 
// console.log(man.name, man.age); 
// man.name = 'John Park'; 
// man.age = 20;
// console.log(man.name, man.age);

