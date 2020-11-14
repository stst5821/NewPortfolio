// flexboxを中央揃えにしつつ、最後の行を左寄せにする。
// https://qiita.com/QUANON/items/e14949abab3711ca8646
var $grid = $('.grid'),
    emptyCells = [],
    i;

// 子パネル (li.cell) の数だけ空の子パネル (li.cell.is-empty) を追加する。
for (i = 0; i < $grid.find('.cell').length; i++) {
    emptyCells.push($('<div>', { class: 'cell is-empty' }));
}

$grid.append(emptyCells);