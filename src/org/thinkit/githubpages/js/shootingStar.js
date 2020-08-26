'use strict'

let space;

const floatySpace = () => {

    space = new CanvasSpace("canvas", "#252934").display();

    const center = space.size.$divide(1.8);

    const r = Math.min(space.size.x, space.size.y) * 1;

    const pts = getPts(center, r);
    const line = getLine();
    const form = new Form(space);
    const mouse = center.clone();

    space.add({
        animate: function(time, fps, context) {

            const colors = [
                "#FF3F8E", "#04C2C9", "#2E55C1"
            ];

            for (let i = 0; i < pts.length; i++) {
                // rotate the points slowly
                var pt = pts[i];

                pt.rotate2D(Const.one_degree / 20, center);
                form.stroke(false).fill(colors[i % 3]).point(pt, 1);

                // get line from pt to the mouse line
                var ln = new Line(pt).to(line.getPerpendicularFromPoint(pt));

                // opacity of line derived from distance to the line
                var opacity = Math.min(0.8, 1 - Math.abs(line.getDistanceFromPoint(pt)) / r);
                var distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse))

                if (distFromMouse < 50) {
                    if (pts[i].brightness < 0.3) pts[i].brightness += 0.015
                } else {
                    if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01
                }

                var color = "rgba(255,255,255," + pts[i].brightness + ")"
                form.stroke(color).fill(true).line(ln);
            }
        },

        onMouseAction: function(type, x, y, evt) {
            if (type == "move") {
                mouse.set(x, y);
            }
        },

        onTouchAction: function(type, x, y, evt) {
            this.onMouseAction(type, x, y);
        }
    });

    space.bindMouse();
    space.play();
}

const getPts = (center, r) => {

    let pts = [];
    let count = window.innerWidth * 0.05;

    if (count > 150) {
        count = 150;
    }

    for (let i = 0; i < count; i++) {
        const p = new Vector(Math.random() * r - Math.random() * r, Math.random() * r - Math.random() * r);
        p.moveBy(center).rotate2D(i * Math.PI / count, center);
        p.brightness = 0.1
        pts.push(p);
    }

    return pts;
}

const getLine = () => {
    const angle = -(window.innerWidth * 0.5);
    return new Line(0, angle).to(space.size.x, 0);
}

floatySpace();

$(window).resize(function() {
    space.removeAll();
    $("canvas").remove();
    floatySpace();
});