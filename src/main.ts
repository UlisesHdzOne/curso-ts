//Namespaces
// esto se usa en caso nos encontramos un proyecto muy antiguo
namespace Common {
  export interface User {
    id: number;
    username: string;
  }
  export interface Error {
    id: number;
    isCritical: boolean;
    message: string;
  }
}

namespace Special {
  export interface User {
    uudi: string;
    username: string;
  }
}

namespace Common {
    export interface Warning {
      id: number;
      message: string;
    }
}

const user: Special.User = {
  uudi: "WWW",
  username: "ulises",
};


const warning: Common.Warning = {
    id: 1,
    message: "Este es un warning"
}

console.log(user);
console.log(warning);