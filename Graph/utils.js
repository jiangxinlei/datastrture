export const orangesRotting = function(grid) {
  let q = [];
  let fresh = 0;
  let minutes = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) fresh++;
      if (grid[i][j] === 2) q.push([i, j, 0]);
    }
  }

  while (q.length) {
    let bad = q.shift();
    rotOrange(...bad);

    minutes = bad[2];
  }

  function rotOrange(row, col, t) {
    let d = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
    for (let i = 0; i < 4; i++) {
      let r = row + d[i][0];
      let c = col + d[i][1];

      if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== 1) {
        continue;
      } else {
        grid[r][c] = 2;
        fresh--;
        q.push([r, c, t + 1 ]);
      }
    }
  }

  return fresh ? -1 : minutes;
};

