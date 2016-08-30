# ns.js
A small and simple Javascript namespace function

#### Syntax
    Namespace(namespace[, callbackFn]);
    
#### Parameters
- `namespace`: Required. String representation of your namespace.
- `callbackFn`: Optional. If `callbackFn` is a function it will be called with `this` referencing the inner-most object of the specified namespace.
 
#### Return Value
The inner-most object of the specified namespace.

#### Usage
    // define namespace
    Namespace('utility.component');
    
    // define namespace with callback
    Namespace('utility.component', function(){
        this.name = 'component';
    });
    
    // assign namespace with callback
    var component = Namespace('utility.component', function(){
        this.name = 'component';
    });
