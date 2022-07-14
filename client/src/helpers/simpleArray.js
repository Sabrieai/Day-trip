
const simpleArray = (reviewed) => {
  const results = [];
  for (const review of reviewed) {
    const id = review.id;
    results.push(id);
  }
  return results
}

module.exports = { simpleArray };