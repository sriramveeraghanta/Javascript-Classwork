function execute(type, arg1, arg2) {
  if (type === "ADD") {
    return arg1 + arg2;
  } else if (type === "SUB") {
    return arg1 - arg2;
  } else if (type === "MUL") {
    return arg1 * arg2;
  } else if (type instanceof Function) {
    return type(arg1, arg2);
  } else {
    if (typeof type === "string") {
      return "Unknown Operation Name";
    } else {
      return "Unknown Operation Type";
    }
  }
}
