export default function ({types: t}) {
  return {
    visitor: {
      ImportDeclaration(path) {
        console.log(path);
      }
    }
  };
}
