const result = Math.sqrt(64);
console.log("Il risultato della radice quadrata è", result);

const pointA = new Point(3, 5);
const pointB = new Point(6, 1);
const pointC = new Point(7, 1);
const pointD = new Point(3, 6);
const pointE = new Point(1, 1);
const pointF = new Point(-2, 1);
const distance = MathC.calculateDistance(pointA, pointB);
console.log("La distanza tra il punto A e il punto B è", distance);
const median = MathC.medianPoint(pointA, pointB)
console.log(median);
const distanceO = MathC.distanceFromOrigin(pointA)
const nearest = MathC.nearestPoint(pointA, pointB, pointC, pointD, pointE, pointF)