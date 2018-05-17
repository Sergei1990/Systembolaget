// emulate module.exports
class module {

  static set exports(classDef){
    // define a memory for class definitions
    this.mem = this.mem || {};

    // create a global variable with the class name
    this.mem[classDef.name] = classDef;
  }
}

// emulate require
function require(fileName) {

  // special for json
  if (fileName.endsWith('.json')){ return $.getJSON(fileName); }

  // special for assert
  if(fileName === 'assert'){ return chai.assert; }

  // map fileName to className
  let className = fileName.substr(fileName.lastIndexOf('/')+1)
    .replace(/-[a-z]/g,(found)=>found[1].toUpperCase()).replace('.js', '');

  className = className[0].toUpperCase() + className.substr(1);

  return module.mem[className];
}