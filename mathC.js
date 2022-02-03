class MathC {
    static calculateDistance(a, b) {
        const xDif = b.x - a.x; // 6 - 3 = 3
        const xDif2 = xDif * xDif; // 3 * 3 
        const yDif = b.y - a.y; // 5 - 1
        const yDif2 = yDif * yDif; // 4 * 4
        const sumDif2 = xDif2 + yDif2; // 9 + 16
        const sqrtSumDif2 = Math.sqrt(sumDif2); // 5
        return sqrtSumDif2;
        //return Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2));
    }

    static medianPoint(a, b) {
        const xofM = (a.x + b.x) / 2 // (3 + 6) /2 = 4.5
        const yofM = (a.y + b.y) / 2 // (5 + 1) /2 = 3
        return "the coords of the median point are X: " + xofM + " Y: " + yofM;
    }

    static distanceFromOrigin(p) {
        const origin = new Point(0, 0)
        const distance = this.calculateDistance(origin, p)
        return distance
    }
    //MathC.nearestPoint(startingpoint, pointA, pointB...) returns nearest to starting point
    static nearestPoint(startingpoint, ...points) {
        // let nearest = points[0]
        // for (let i = 1; i < points.length; i++) {
        //     const point = points[i];
        //     if (this.calculateDistance(startingpoint, point) < this.calculateDistance(startingpoint, nearest)) {
        //         nearest = point;
        //     }
        // } return nearest;

        points.reduce((p, c) => this.calculateDistance(startingpoint, p) < this.calculateDistance(startingpoint, c) ? p : c)

    }
}