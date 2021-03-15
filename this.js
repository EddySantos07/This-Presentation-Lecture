/* */

/* 1. Default Binding */

// function foo () {
//     this.a = 'foo';
//     return this.a
// }

// Here is Global
// in Browser its called the window!

// console.log(foo());
// console.log(this)

//////////////////////////////////


/*  2. Implicit Binding */

// function bar () {
    // console.log(this)
    // console.log(this.a) 

    // return this.a
    // return this;
// }

// const obj = {
//     a: "foo",
//     b: bar
// };

// console.log(obj.b());


/*  3. Explicit Binding   */

/*  " bind, apply and call are all functions that 
can be used to explicitly set the value of “this” "*/


function bar() {
    console.log(this.a);

    return '--------';
}

let foo = {
    a: "Explicit!"
}

// console.log( bar.bind(foo)() ); //binding foo as this

// console.log( bar.call(foo) );

// console.log( bar.apply(foo) );



/* 4. New Binding */

function newBinding () {
    this.a = 'a';
    this.log = function () {
        console.log(this);
    }
}

let testBinding = new newBinding(); 

testBinding.log()
