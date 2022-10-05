export default [
  (code, _chunk) => {
    if (code.includes('function slug(')) {
      return code.replace('function slug(', 'function slugFn(');
    }

    return code;
  }

];
