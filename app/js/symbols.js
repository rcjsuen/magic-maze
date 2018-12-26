import config from './config';
const size = config.size;

export default {
    /**
    * Draw an arrow
    */
    arrow(type) {
        if (type === 'gate') {
            // Linear arrow
            p5.blendMode('normal');
            p5.line(size/2, size/4, size/2, size/1.5);
            p5.line(size/2, size/4, size/3, size/2.5);
            p5.line(size/2, size/4, size/1.5, size/2.5);
            p5.blendMode('multiply');
        } else if (type === 'enter') {
            // Filled arrow
            p5.strokeJoin('round');
            p5.strokeCap('round');
            p5.stroke(150);
            p5.fill(255);
            p5.beginShape();
            p5.vertex(size/2.25, size/3);
            p5.vertex(size/2.25, size/4);
            p5.vertex(size/1.7, size/4);
            p5.vertex(size/1.7, size/3);
            p5.vertex(size/1.5, size/3);
            p5.vertex(size/1.93, size/2);
            p5.vertex(size/2.75, size/3);
            p5.vertex(size/2.75, size/3);
            p5.endShape('close');
        }
    },

    /**
    * Draw background grid
    */
    grid() {
        p5.textSize(8);
        p5.fill(0, 0, 0, 128);
        for (let i = 0; i <= config.boardCols; i += 1) {
            // Draw vertical lines
            p5.strokeWeight(.5);
            p5.stroke(255, 0, 0, 80);
            p5.line(i * size, 0, i * size, config.boardRows * size);

            if (i !== config.boardCols) {
                for (let j = 0; j < config.boardRows; j += 1) {
                    // Add coordinates as text
                    p5.noStroke();
                    p5.text(i + ':' + j, i * size + 6, j * size + 20);
                }
            }
        }

        for (let i = 0; i <= config.boardRows; i += 1) {
            // Draw horizontal lines
            p5.stroke(0, 0, 255, 80);
            p5.line(0, i * size, config.boardCols * size, i * size);
        }
    }
}